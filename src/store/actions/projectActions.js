export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call to database
    const firestore = getFirebase().firestore();

    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch((err) => {
          dispatch({
              type: "CREATE_PROJECT_ERR",
              err,
          });
      });
      
  }
};