import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (studentName.trim() === "") {
      alert("Please add a student");
      return;
    }
    editMode ? updateHandler() : createHandler();
  };

  const changeNameHandler = (e) => {
    setStudentName(e.target.value);
  };

  const createHandler = () => {
    const newStudent = {
      id: Date.now().toString(),
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };

  const editHandler = (student) => {
    setEditMode(true);
    setEditableStudent(student);
    setStudentName(student.name);
  };

  const updateHandler = () => {
    const updatedStudents = students.map((student) =>
      student.id === editableStudent.id
        ? { ...student, name: studentName }
        : student
    );
    setStudents(updatedStudents);
    setEditMode(false);
    setStudentName("");
    setEditableStudent(null);
  };

  const deleteHandler = (studentId) => {
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      alert(
        `This student is already ${
          student.isPresent ? "in the present list" : "in the absent list"
        }`
      );
      return;
    }
    const updatedStudents = students.map((item) =>
      item.id === student.id ? { ...item, isPresent: true } : item
    );
    setStudents(updatedStudents);
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      alert(
        `This student is already ${
          student.isPresent ? "in the present list" : "in the absent list"
        }`
      );
      return;
    }
    const updatedStudents = students.map((item) =>
      item.id === student.id ? { ...item, isPresent: false } : item
    );
    setStudents(updatedStudents);
  };

  const toggleList = (student) => {
    const updatedStudents = students.map((item) =>
      item.id === student.id ? { ...item, isPresent: !item.isPresent } : item
    );
    setStudents(updatedStudents);
  };

  const deleteFromList = (student) => {
    const updatedStudents = students.map((item) =>
      item.id === student.id ? { ...item, isPresent: undefined } : item
    );
    setStudents(updatedStudents);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={studentName} onChange={changeNameHandler} />
        <button type="submit">
          {editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
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
    </>
  );
}

export default App;
