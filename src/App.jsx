import "./App.css";
import SubmitForm from "./components/SubmitForm";
import AllStudentsList from "./components/AllStudentsList";
import PresentStudents from "./components/PresentStudents";
import AbsentStudentsList from "./components/AbsentStudentsList";
import { StudentProvider } from "./context/StudentProvider";

function App() {


  

  return (
    <>
    <StudentProvider >
    <SubmitForm/>
    <AllStudentsList/>
    <PresentStudents/>
    <AbsentStudentsList/>
    </StudentProvider>
    </>
  );
}

export default App;
