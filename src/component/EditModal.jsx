import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "./redux/reducers/todos";

function EditModal({ todo, closeModal }) {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  useEffect(() => {
    setText(todo.text);
  }, [todo.text]);

  const handleSave = () => {
    // if (text.trim() === "") return; // Basic validation
    console.log(text);

    dispatch(
      updateTodo({
        id: todo.id,
        text: text,
      })
    );
    closeModal();
  };
  return (
    <div className="overlay h-screen w-screen fixed top-0 left-0">
      <div className="absolute top-[17%] left-[37.3%] mx-auto w-122 h-50 p-6 shadow bg-slate-100 rounded">
        <div className="flex flex-col gap-5 w-full">
          <span className="text-xl font-semibold">Edit Todo</span>
          <input
            className="px-3 py-2 outline-0 border rounded"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div className="flex flex-row gap-2 justify-between items-center">
            <button
              className="bg-sky-600 text-white py-2 px-3 rounded hover:bg-sky-500"
              onClick={handleSave}
            >
              Simpan
            </button>
            <button
              className="bg-amber-600 text-white py-2 px-3 rounded hover:bg-amber-500"
              onClick={closeModal}
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
