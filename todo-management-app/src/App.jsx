import './App.css'
import NewTodo from './components/NewTodo'
import NoTodoSelected from './components/NoTodoSelected'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import SelectedTodo from './components/SelectedTodo'

function App() {
  const [todosState, setTodosState] = useState({
    selectedTodoId: undefined,
    todos: [],
    tasks: []
  });

  function handleAddTask(text){
    setTodosState(prevState=>{
      const taskId = Math.random();
      const newTask = {
        text: text,
        todoId: prevState.selectedTodoId,
        id: taskId,
      }
      return{
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id){
    setTodosState((prevState =>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task)=> task.id !== id
        )
      }
    }))
  }

  function handleSelectTodo(id){
    setTodosState(prevState => {
      return{
        ...prevState,
        selectedTodoId: id,
      };
    });
  }

  function handleStartAddTodo(){
    setTodosState(prevState => {
      return{
        ...prevState,
        selectedTodoId: null,
      };
    });
  }
  
  function handleCancelAddTodo(){
    setTodosState(prevState => {
      return{
        ...prevState,
        selectedTodoId: undefined,
      };
    });
  }

  function handleAddTodo(todoData){
    setTodosState(prevState=>{
      const newTodo = {
        ...todoData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedTodoId: undefined,
        todos: [...prevState.todos, newTodo]
      }
    })
  }

  function handleDeleteTodo(){
    setTodosState((prevState =>{
      return{
        ...prevState,
        selectedTodoId: undefined,
        todos: prevState.todos.filter(
          (todo)=> todo.id !== prevState.selectedTodoId
        )
      }
    }))
  }

  const selectedTodo = todosState.todos.find(todo=>todo.id===todosState.selectedTodoId)
  let content = 
  <SelectedTodo
    todo={selectedTodo}
    onDelete={handleDeleteTodo}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={todosState.tasks}
  />;
  if(todosState.selectedTodoId === null){
    content = <NewTodo onAdd={handleAddTodo} onCancel={handleCancelAddTodo} />
  } else if(todosState.selectedTodoId === undefined){
    content = <NoTodoSelected onStartAddTodo={handleStartAddTodo} />
  }
  return (
    <main className='h-screen flex gap-8 bg-slate-200'>
    <Sidebar 
     onStartAddTodo={handleStartAddTodo}
     todos={todosState.todos}
     onSelectTodo={handleSelectTodo}
     selectedTodoId={todosState.selectedTodoId} />
    {content}
    </main>
  )
}

export default App
