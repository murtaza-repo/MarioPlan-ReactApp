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