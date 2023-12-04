import { React, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }
) {

    return (
        <div>
            <h1>Dashboard</h1>
            <hr/>
            <div className="container">
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <br/>
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                <br/>
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                <br/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <br/>
            <button type="button" className="btn btn-danger" onClick={addNewCourse} >
                Add
            </button>
            <button  type="button" className="btn btn-secondary" onClick={(event) => {
                //event.preventDefault();
                updateCourse(course);
            }} >
                Update
            </button>
            </div>
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
                            <div className="btn-group">
                                <button type="button" className="btn btn-success" onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                    Edit
                                </button>
                                <button type="button" className="btn btn-danger mx-2" onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}>
                                    Delete
                                </button>
                            </div>

                        </div>

                </div>
            ))}
        </div>
        </div>

    );

}

export default Dashboard;
