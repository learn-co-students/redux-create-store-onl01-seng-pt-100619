// Action -> Reducer -> New State

//implemented inside createStore()
//a call to dispatch should call a reducer, reassign the state, and render a change
function createStore(reducer) {
  let state;
 
  function dispatch(action) {
    state = reducer(state, action);
    render();
  };

  function getState(){
    return state;
  }
 
  // returns a Javascript object that has a dispatch method
  return {
    dispatch,
    getState
  };
};

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  // container.textContent = state.count;
  container.textContent = store.getState().count;
};

let store = createStore(reducer); //createStore takes the reducer as an argument
store.dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
