const TODOS = 'TODOS';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const INITIAL_STATE = {
  data: [],
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODOS: {
      return { state };
    }

    case ADD_TODO: {
      const { title } = action.payload;
      return {
        ...state,
        data: [
          ...state.data,
          { id: Math.floor(Math.random() * 256), title, done: false },
        ],
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.map(todo =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
      };
    }

    default:
      return state;
  }
}
