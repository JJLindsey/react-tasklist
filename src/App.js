//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text:'Groceries',
        day: 'Sep 1st at 1pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'Beach Day',
        day:'Sep 3rd at 9am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Meeting',
        day:'Sep 5th at 8am',
        reminder: true,
    }
])

//Add Task

const addTask = (task) => {
  const id =Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, remider: !task.reminder} : task))
}

  return (
    <div className='container'>
      <Header/>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
