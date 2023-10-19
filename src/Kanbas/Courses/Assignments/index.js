import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {SlOptionsVertical} from "react-icons/sl";
import {AiOutlinePlus} from "react-icons/ai";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="container">
            <h3>Assignments for course {courseId}</h3>
            <hr/>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <input id="students" placeholder="Search for Assignments"
                               className="form-control"/>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <button type="button" className="btn btn-secondary"><i>{<AiOutlinePlus/>}
                        </i> Group
                        </button>
                        <button type="button" className="btn btn-danger"><i>{<AiOutlinePlus/>}
                        </i> Assignment
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <i>{<SlOptionsVertical/>} </i>
                        </button>
                    </div>
                </div>
                <hr/>

            <div className="list-group custom-list">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item custom-list-item d-flex justify-content-between align-items-center"
                    >
                        {assignment.title}

                        <div>
                            <button type="button" className="btn btn-success" >
                                <i> <AiFillCheckCircle /> </i>
                            </button>
                            <button type="button" className="btn btn-secondary"
                                    style={{ backgroundColor: "#f0f0f0", color: "black", border:"none" }}>
                                <i> <SlOptionsVertical /> </i>
                            </button>
                        </div>
                    </Link>

                ))}
                <div className="d-flex justify-content-end mb-2">

                </div>
            </div>
        </div>
            </div>

    );
}
export default Assignments;