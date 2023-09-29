import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

// function App() {
//   return (
//     <div className="container">
//       <Header/>
//     </div>
//   );
// }

// 01)
// How to use a class ----------------------------------------->

// import React from "react";

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

// 02) 
// Pass some stuf using props ------------------------------------>

// 1st way

// const App = () => {
//   return (
//     <div className="container">
//       <Header title='Hello'/>
//     </div>
//   );
// }

// 03) 
// PropsType ------------------------------------------------>

// const App = () => {
//   return (
//     <div className="container">
//       <Header title={1}/>
//     </div>
//   );
// }

// ----------------------------------------------------->

const App = () => {
  const [tasks, setTask] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2.30pm',
        reminder: 'true',
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1.30pm',
        reminder: 'true',
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2.30pm',
        reminder: 'false',
      }
    ] 
  )

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !==id))
  }

  return(
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks To Show' }
    </div>
  )
}

export default App