import { createContext, useState } from "react";

export const StudentContext= createContext()

export function StudentProvider({children}){
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

  const allValues={
    studentName, 
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    submitHandler,
    changeNameHandler,
    createHandler,
    editHandler,
    updateHandler,
    deleteHandler,
    makePresentHandler,
    makeAbsentHandler,
    toggleList,
    deleteFromList
  }


return(
  <StudentContext.Provider value={allValues}>
    {children}
  </StudentContext.Provider>
)}