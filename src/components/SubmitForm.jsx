import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentProvider'

const SubmitForm = () => {
  const {submitHandler,studentName,changeNameHandler,editMode   }= useContext(StudentContext)
  return (
    <form onSubmit={submitHandler}>
    <input type="text" value={studentName} onChange={changeNameHandler} />
    <button type="submit">
      {editMode ? "Update Student" : "Add Student"}
    </button>
  </form>
  )
}

export default SubmitForm