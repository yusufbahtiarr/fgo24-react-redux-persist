import { addTodo } from "./redux/reducers/todos";
import { useDispatch } from "react-redux";

function Input() {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const text = e.target.todo.value;
    console.log(text);

    if (text.trim()) {
      dispatch(addTodo({ text: text }));
    }
    e.target.reset();
  };

  return (
    <div className="flex flex-col gap-4 px-5 py-5 border-b border-gray-400 rounded-t-2xl bg-slate-600 ">
      <div className="flex justify-center text-2xl items-center text-white font-semibold">
        TODO APP
      </div>
      <div className="flex flex-row gap-4">
        <form className="flex flex-row gap-4 w-full" onSubmit={handleAdd}>
          <input
            className="w-full border rounded border-gray-400 outline-none px-2 text-slate-800 bg-slate-300"
            type="text"
            name="todo"
            placeholder="Input your todo"
          />
          <button className="py-2 px-4 bg-slate-800 text-white font-medium hover:bg-slate-700 cursor-pointer w-25 rounded flex items-center justify-center">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
