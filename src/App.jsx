import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import ClassesPage from "./Pages/ClassesPage";
import InstructorsPage from "./Pages/InstructorsPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import DashboardLayout from "./Layouts/DashboardLayout";
import SelectedClassesPage from "./Pages/dashboard/selectedClassesPage";
import EnrolledClasses from "./Pages/dashboard/EnrolledClasses";
import AddClass from "./Pages/dashboard/AddClass";
import ManageUsers from "./Pages/dashboard/ManageUsers";
import ManageClassesPage from "./Pages/dashboard/ManageClassesPage";
import MyClassesPage from "./Pages/dashboard/MyClasses";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/instructors" element={<InstructorsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<h1>Dashboard page</h1>} />
          <Route path="/selected-classes" element={<SelectedClassesPage />} />
          <Route path="/enrolled-classes" element={<EnrolledClasses />} />
          <Route path="/add-class" element={<AddClass />} />
          <Route path="/my-classes" element={<MyClassesPage />} />
          <Route path="/manage-classes" element={<ManageClassesPage />} />
          <Route path="/manage-user" element={<ManageUsers />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
