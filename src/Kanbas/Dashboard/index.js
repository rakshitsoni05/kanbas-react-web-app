import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
    const courses = db.courses;

    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr/>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {courses.map((course) => (
                <div key={course.id} className="col wd-dashboard">
                        <div className="card h-100">
                            <b><Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225">
                                    <rect width="100%" height="100%" fill={course.color}></rect>
                                </svg>
                                {course.number}
                            </Link>
                            </b>
                            {course._id}  {course.name}  {course.number}
                        </div>

                </div>
            ))}
        </div>
        </div>

    );

}

export default Dashboard;
