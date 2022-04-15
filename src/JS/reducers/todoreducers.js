import { ADD_TODO } from "../actionsTypes/todotypes";

const initialState = {
  todos: [
    {
      id: 1,
      text: "todo-1",
      isDone: false,
    },

    {
      id: 2,
      text: "todo-2",
      isDone: false,
    },
    {
      id: 3,
      text: "todo-3",
      isDone: false,
    },
  ],
};

const todoreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
      };
    default:
      return state;
  }
};
export default todoreducer;
