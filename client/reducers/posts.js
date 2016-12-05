function posts(state = [], action) {
  
  switch(action.type) {
    
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ];
      break;
    
    case 'INCREMENT_BOO' :
      console.log("Incrementing Boos!!");
      const index = action.index;
      return [
        ...state.slice(0,index), // before the one we are updating
        {...state[index], boos: state[index].boos + 1},
        ...state.slice(index + 1), // after the one we are updating
      ];
      break;
    
    case 'REMOVE_CAPTION' :
      console.log("remove caption!!");
      const j = action.i;
      return [
         ...state.slice(0,j), // before the one we are updating
        {...state[j], caption: ""},
        ...state.slice(j + 1), // after the one we are updating
      ];
      break;

    case 'ADD_CAPTION' :
      console.log("add caption!!");
      const k = action.i;
      return [
         ...state.slice(0,k), // before the one we are updating
        {...state[k], caption: action.caption},
        ...state.slice(k + 1), // after the one we are updating
      ];
      break;
    
    default:
      return state;
      break;
  }
}

export default posts;
