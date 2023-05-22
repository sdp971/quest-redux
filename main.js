const { createStore } = Redux;

const counterRender = document.getElementById('counter-render');
const incrementButton = document.getElementById('button-increment');
const incrementByTenButton = document.getElementById('button-incrementByTen');
const decrementButton = document.getElementById('button-decrement');
const decrementByTenButton = document.getElementById('button-decrementByTen');
const resetButton = document.getElementById('button-reset');




const incrementAction = {
  type: 'INCREMENT',
};

const incrementByTenAction = {
  type: 'INCREMENT BY TEN',
};

const decrementAction = {
  type: 'DECREMENT',
};
const decrementByTenAction = {
  type: 'DECREMENT BY TEN',
};

const resetAction = {
 type: 'RESET',
}; 



let initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT BY TEN':
      return state + 10;
    case 'DECREMENT BY TEN':
      return state - 10;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const render = () => {
  counterRender.innerText = store.getState();
};

render();
store.subscribe(render);

incrementButton.addEventListener('click', () =>
  store.dispatch(incrementAction)
);
decrementButton.addEventListener('click', () =>
  store.dispatch(decrementAction)
);

incrementByTenButton.addEventListener('click', () => {
  store.dispatch(incrementByTenAction)
})

decrementByTenButton.addEventListener('click', () => {
  store.dispatch(decrementByTenAction)
})

resetButton.addEventListener('click', () => {
  store.dispatch(resetAction)
 })
