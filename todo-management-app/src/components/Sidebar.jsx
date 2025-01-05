import React from "react";
import Button from "./Button";

export default function Sidebar({
  onStartAddTodo,
  todos,
  onSelectTodo,
  selectedTodoId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Todos
      </h2>
      <div>
        <Button onClick={onStartAddTodo}>+ Add Todo</Button>
      </div>
      <ul className="mt-8">
        {todos.map((todo) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200";

          if (todo.id === selectedTodoId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={todo.id}>
              <button 
              className={cssClasses} 
              onClick={()=>onSelectTodo(todo.id)}
              >
                {todo.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
