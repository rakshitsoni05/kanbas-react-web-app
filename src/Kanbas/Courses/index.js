import React, { useState } from 'react';
import { Navigate, Route, Routes, useParams, useLocation } from 'react-router-dom';

import CourseNavigation from './CourseNavigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/AssignmentEditor';
import Grades from './Grades';
import './index.css';
import db from "../Database";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const [currentPage, setCurrentPage] = useState('home');
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname.endsWith('/Modules')) {
            setCurrentPage('Modules');
        } else if (location.pathname.endsWith('/Assignments')) {
            setCurrentPage('Assignments');
        } else if (location.pathname.includes('/Assignments/')) {
            setCurrentPage('Assignment Editor');
        } else if (location.pathname.endsWith('/Grades')) {
            setCurrentPage('Grades');
        }
            else if (location.pathname.endsWith('/Home')) {
                setCurrentPage('Home');
        } else {
            setCurrentPage('');
        }
    }, [location.pathname]);

    return (
        <div>
            <b style={{ color: 'red' }}>{course.number} {course.name}</b>
            { ` > ${currentPage}`}
            <CourseNavigation onPageChange={setCurrentPage} />

            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: '320px',
                        top: '50px',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;
