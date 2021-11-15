import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signInWithPopup, signOut } from "firebase/auth";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    //verify admin
    const [admin, setAdmin] = useState(false);
    //jwt get id token
    const [token, setToken] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser ={email, displayName: name};
                    setUser(newUser);
                //module-73#1
                //save user to the database
                saveUser(email, name, 'POST');
                //send name to firebase after creation 
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    // An error occurred
                   
                  });
                  
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //sign in google
    const signInWithGoogle =(location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    // The signed-in user info.
    const user = result.user; 
     // upsert users data
    saveUser(user.email, user.displayName, 'PUT')
    setAuthError('');
    const destination = location?.state?.from || '/';
                history.replace(destination);
  
  }).catch((error) => {
    // Handle Errors here.
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                //[jwt get id token ta session and local storage security jonno rakha hoi]
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                    // console.log(idToken);
                })
            } 
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    //verify admin
    useEffect(() => {
        fetch(` https://rocky-lowlands-35918.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    //registration success module-73#1
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(' https://rocky-lowlands-35918.herokuapp.com/users ', {
            method: method,
            // method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;