import KanbasNavigation from "./KanbasNavigation";
import Signin from "./users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useEffect, useState} from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
       const response = await axios.get(URL);
        setCourses(response.data);
        console.log(response.data);

    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
                                             name: "New Course",      number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                             color: "rgb(214, 169, 54)",
                                         });

    const addNewCourse = async() => {
        const response = await axios.post(URL, course);
        setCourses([response.data,...courses, ]);
    };
    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course}`
        );
        setCourses(courses.filter(
            (c) => c._id !== course));

    };

    const updateCourse = async (course) => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
        setCourse({ name: course.name});
    };


    return (
        <Provider store={store}>
        <div className="d-flex">
            <KanbasNavigation />
            <div>
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="/Account" element={<Account />} />
                    <Route path="/Account/users" element={<UserTable/>} />
                    <Route path="/Account/users/:id/users" element={<UserTable/>} />
                    <Route path="/Account/:id" element={<Account/>} />
                    <Route path="Dashboard" element={
                        <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>} />
                    <Route path="Courses/:courseId/*" element={
                        <Courses courses={courses} />} />

                </Routes>
            </div>
        </div>
        </Provider>
    );
}
export default Kanbas;