import "./App.css";
import SubmitForm from "./components/SubmitForm";
import AllStudentsList from "./components/AllStudentsList";
import PresentStudents from "./components/PresentStudents";
import AbsentStudentsList from "./components/AbsentStudentsList";
import { StudentProvider } from "./context/StudentProvider";
import Container from "./components/Container";

function App() {


  

  return (
    <>
    <StudentProvider >
<Container>
<SubmitForm/>
    <AllStudentsList/>
    <PresentStudents/>
    <AbsentStudentsList/>
</Container>
    </StudentProvider>
    </>
  );
}

export default App;
