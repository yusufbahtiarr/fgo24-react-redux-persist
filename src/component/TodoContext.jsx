// import { createContext, useState } from "react";

// export const TodoContext = createContext({
//   todos: [],
//   addTodo: () => {},
//   removeTodo: () => {},
//   toggleTodo: () => {},
// });

// export function TodoProvider({ children }) {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     if (text.trim()) {
//       setTodos([...todos, { id: Date.now(), text: text.trim() }]);
//     }
//   };
//   // console.log(todos);

//   const removeTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   return (
//     <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// }
