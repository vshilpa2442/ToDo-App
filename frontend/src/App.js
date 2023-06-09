import Header from "./components/partials/Header.jsx";
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, title,text) => {
    setIsUpdating(true)
    setTitle(title);
    setText(text);
    setToDoId(_id); 
  };

  

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedTime = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()} ${formattedTime}`;
    return formattedDate;
  };

  return (
    <div className="App">
      <>
        <Header />
      </>

      <div className="container">
        <div className="top">
        <input
            type="text"
            placeholder="Add Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Description..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId,title,text, setToDo,setTitle, setText, setIsUpdating)
                : () => addToDo( title,text,setTitle,setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              title={item.title}
              text={item.text}
              date={formatDate(item.date)}
              updateMode={() => updateMode(item._id,item.title,item.text, item.date)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
