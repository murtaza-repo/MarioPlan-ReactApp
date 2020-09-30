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
        authError: 'Login failed'
      };

    case 'LOGIN_SUCCESS':
        toast.success('Logged in successfully...')
        return {
          ...state,
          authError: null
        };

    case 'LOGOUT_SUCCESS':
      toast.warning('Logged out successfully...')
      return {
        ...state,
        authError: null
      };

    default:
      return state;
  }
};

export default authReducer;