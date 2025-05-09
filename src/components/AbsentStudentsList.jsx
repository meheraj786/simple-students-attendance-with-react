import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentProvider'

const AbsentStudentsList = () => {
  const {students,toggleList,deleteFromList}= useContext(StudentContext)
  return (
    <div className="absent-students list">
    <h2>Absent Students</h2>
    <ul>
      {students
        .filter((student) => student.isPresent === false)
        .map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => toggleList(item)}>
              Accidentally Added
            </button>
            <button onClick={() => deleteFromList(item)}>Delete</button>
          </li>
        ))}
    </ul>
  </div>
  )
}

export default AbsentStudentsList