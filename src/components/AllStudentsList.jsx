import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentProvider'

const AllStudentsList = () => {
  const {students,editHandler,deleteHandler,makePresentHandler,makeAbsentHandler}= useContext(StudentContext)
  return (
    <div className="all-students list">
    <h2>All Students</h2>
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <span>{student.name}</span>
          <div>
            <button onClick={() => editHandler(student)}>Edit</button>
            <button onClick={() => deleteHandler(student.id)}>
              Delete
            </button>
            <button onClick={() => makePresentHandler(student)}>
              Make Present
            </button>
            <button onClick={() => makeAbsentHandler(student)}>
              Make Absent
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default AllStudentsList