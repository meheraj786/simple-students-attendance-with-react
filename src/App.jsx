import { useState } from 'react'
import './App.css'

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEdiMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const submitHandler =(e)=>{
    e.preventDefault()
    if (studentName.trim==="") {
      alert("Please add student")
    }
    editMode ? updateHandler() : createHandler()
  }
const changeNameHandler=(e)=>{
  setStudentName(e.target.value)

}
const createHandler=()=>{
  const newStudent= {
    id: Date.now() + "",
    name: studentName,
    isPresent: undefined
  }
  setStudents([...students, newStudent])
  setStudentName("")
}
const editHandler=(student)=>{
  setEdiMode(true)
  setEditableStudent(student)
  setStudentName(student.name)
}
const updateHandler=()=>{
  const updateStudents= students.map((student)=>{
    if (student.id===editableStudent.id) {
      return {...student, name: studentName}
      
    }
    return student
  })
  setStudents(updateStudents)
  setEdiMode(false)
  setStudentName("")
}
const deleteHandler=(studentId)=>{
  const updateStudent= students.filter((student)=>student.id!=studentId)
  setStudents(updateStudent)
}
const makePresentHandler=()=>{
  
}
const makeAbsentHandler=()=>{

}
  

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={studentName} onChange={changeNameHandler} />
        <button type="submit">{editMode ? "Update Student" : "Add Student"}</button>
      </form>
    <div className="all-students list">
      <h2>All Students</h2>
      {students.map((student)=>(
        <li key={student.id}><span>{student.name}</span>
        <div style="display:flex;">
        <button onClick={()=>editHandler(student)}>Edit</button>
        <button onClick={()=>deleteHandler(student.id)}>Delete</button>
        <button>Make Present</button>
        <button>Make Absent</button>
        </div>
        </li>
      ))}
    </div>
    <div className="present-students list">
      <h2>Present Students</h2>
      <ul>
        {students.filter((student)=>student.isPresent===true).map((item)=>(
          <li key={item.id}>
            <span>{item.name}</span>
            <button>Accidently Added</button>
          </li>
        ))}
      </ul>
    </div>
    <div className="absent-students list">
      <h2>Absent Students</h2>
            <ul>
        {students.filter((student)=>student.isPresent===false).map((item)=>(
          <li key={item.id}>
            <span>{item.name}</span>
            <button>Accidently Added</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App
