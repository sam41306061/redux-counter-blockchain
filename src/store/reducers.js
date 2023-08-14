const initialState = {
    counter: 0,
  };
  
  const counterReducer = async (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
      case 'DECREMENT_COUNTER':
      case 'MULTIPLY_COUNTER':
        return {
          ...state,
          counter: await contract.methods.getCounter().call(),
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;