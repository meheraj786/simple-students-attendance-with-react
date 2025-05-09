import React from 'react'

const AbsentStudentsList = () => {
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