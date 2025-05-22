import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import todos from "./todos";

const persistTodo = {
  key: "todos",
  storage,
};

const reducer = combineReducers({
  todos: persistReducer(persistTodo, todos),
});

export default reducer;
