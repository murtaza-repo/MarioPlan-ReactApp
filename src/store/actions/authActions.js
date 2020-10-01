export const signIn = (creds) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            })
            .catch(err => {
                dispatch({ type: "LOGIN_ERR", err })
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: 'LOGOUT_SUCCESS' });
            });
    };
};

export const signUp = (creds) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();

        firebase
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then((response) => {
                return firestore.collection('users').doc(response.user.uid).set({
                    firstName: creds.firstName,
                    lastName: creds.lastName,
                    initials: creds.firstName[0] + creds.lastName[0]
                })
            }).then(() => {
                dispatch({type: 'SIGNUP_SUCCESS'})
            }).catch((err) => {
                dispatch({type: 'SIGNUP_ERROR', err})
            })
    }
}