import React from 'react'

const PresentStudents = () => {
  return (
    <div className="present-students list">
    <h2>Present Students</h2>
    <ul>
      {students
        .filter((student) => student.isPresent === true)
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

export default PresentStudents