import { MdOutlineDeleteOutline } from "react-icons/md";

function TodoElement() {
 
  const todos = [
    { name: "Cooking", date: "23/07/2025" },
    { name: "Washing", date: "23/07/2025" },
    { name: "Cleaning", date: "23/07/2025" },
    { name: "Teaching", date: "23/07/2025" },
    { name: "Dancing", date: "23/07/2025" },
    { name: "Shopping Clothes", date: "12/08/2025" },
    { name: "Medicine Order", date: "15/08/2025" },
  ];

  return (
    <>
      {todos.map((todo, index) => (
        <div className="row" key={index}>
          <div className="col-4">{todo.name}</div>
          <div className="col-4">{todo.date}</div>
          <div className="col-3">
            <button type="button" className="btn btn-danger">
              <MdOutlineDeleteOutline />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoElement;