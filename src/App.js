import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import {Routes, Route,} from "react-router-dom"

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoList />}/>
          <Route path="/add" element={<AddTodo />}/>
      </Routes>
    </>

  );
}

export default App;
