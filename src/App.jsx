import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import { persistor, store } from "./component/redux/store";
import { Provider } from "react-redux"; // Mengimpor Provider dari react-redux
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
]);

function App() {
  return (
    <div className="max-w-lg bg-slate-200 min-h-140 rounded-2xl mx-auto mt-10">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
