import { toast } from 'react-toastify'

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERR':
      toast.error("Login failed! Try again...")
      return {
        ...state,
        authError: action.err.message
      };

    case 'LOGIN_SUCCESS':
        toast.success('Welcome back...')
        return {
          ...state,
          authError: null
        };

    case 'LOGOUT_SUCCESS':
      toast.warning('Logged out!')
      return {
        ...state,
        authError: null
      };

    case 'SIGNUP_SUCCESS':
      toast.success('Welcome...')
      return {
        ...state,
        authError: null
      };
    
    case 'SIGNUP_ERROR':
      toast.error("Something went wrong! Try again...")
      return {
        ...state,
        authError: action.err.message
      };


    default:
      return state;
  }
};

export default authReducer;