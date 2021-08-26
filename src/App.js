//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
        reminder: false,
    },
    {
        id: 3,
        text: 'Meeting',
        day:'Sep 5th at 8am',
        reminder: true,
    }
])

//delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className='container'>
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
