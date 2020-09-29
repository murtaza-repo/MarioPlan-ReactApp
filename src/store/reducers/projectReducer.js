import { toast } from 'react-toastify';

const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

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