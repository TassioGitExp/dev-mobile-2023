import { ADD_USER } from '../actions/types';
const initialState = {
  user: undefined
};
const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.user
        //places: state.places.concat({
        //  key: Math.random(),
        //  value: action.payload
        //})
      };
    default:
      return state;
  }
}
//https://irias.com.br/blog/react-native-redux-passo-a-passo-na-pratica/
export default userReducer;