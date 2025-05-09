import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentProvider'

const SubmitForm = () => {
  const {submitHandler,studentName,changeNameHandler,editMode   }= useContext(StudentContext)
  return (
    <form onSubmit={submitHandler}>
      <h1>Student Attendence</h1>
    <input type="text" placeholder='Enter Student Name' value={studentName} onChange={changeNameHandler} />
    <button type="submit">
      {editMode ? "Update Student" : "Add Student"}
    </button>
  </form>
  )
}

export default SubmitForm