import { toast } from 'react-toastify';

const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      toast.success("Project added...")
      return state;
    case 'CREATE_PROJECT_ERR':
      toast.error('An error occurred!');
      return state;
    default:
      return state;
  }
};

export default projectReducer;