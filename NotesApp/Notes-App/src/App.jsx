import { useState } from "react";
import "./App.css";

function App() {
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  function handler(e) {
    e.preventDefault();
    console.log("handler working...");
    console.log(heading);
    console.log(detail);

    if (!heading.trim() || !detail.trim()) {
      alert("fill both fields");
      return;
    }

    const copytask = [...task];
    copytask.push({ heading, detail });
    setTask(copytask);

    setHeading("");
    setDetail("");

    
  }

  function del(ind)
    {
      const copyTask=[...task]
      copyTask.splice(ind,1);
      setTask(copyTask);
    }
  return (
    <>
      <div className="app">
        {/* Add note Section */}
        <div className="left">
        <form onSubmit={handler}>
          
            <h1>Add Notes</h1>
            <input
              type="text"
              value={heading}
              placeholder="Notes Heading.."
              onChange={(e) => setHeading(e.target.value)}
            />
            <textarea
              value={detail}
              placeholder="Details here..."
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
            <button type="submit">Add Note</button>
             </form>
          </div>
       

        {/* Right Section */}
        <div className="right">
          <h1>Recent Notes</h1>
          {task.length === 0 ? (
            <p>No notes.....</p>
          ) : (
            <div className="notes">
              {task.map((note, index) => (
                <div className="note" key={index}>
                  <h2>{note.heading}</h2>
                  <p>{note.detail}</p>
                  <button onClick={del}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
