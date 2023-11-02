import React,{useState, } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {SlOptionsVertical} from "react-icons/sl";
import {AiOutlinePlus} from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "./assignmentReducer";


function Assignments() {
    const { courseId } = useParams();

    //const assignments = db.assignments;
    const assignments = useSelector((state) => state.assignmentReducer.assignments);
    const assignment = useSelector((state) => state.assignmentReducer.assignment);
    const dispatch = useDispatch();

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
                <li className="list-group-item">
                    <input
                        value={assignment.title}
                        onChange={(e) =>
                            dispatch(setAssignment({ ...assignment, title: e.target.value }))
                        }
                    />
                    <br/><br/>
                    <textarea
                        value={assignment.description}
                        onChange={(e) =>
                            dispatch(setAssignment({ ...assignment, description: e.target.value }))
                        }
                    />
                    <br/><br/>
                    Due Date:
                    <input
                        type="date"
                        value={assignment.dueDate}
                        onChange={(e) =>
                            dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                        }
                    />
                    <br/><br/>
                    Available from:
                    <input
                        type="date"
                        value={assignment.availableFromDate}
                        onChange={(e) =>
                            dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
                        }
                    />
                    <br/><br/>
                    Available until:
                    <input
                        type="date"
                        value={assignment.availableUntilDate}
                        onChange={(e) =>
                            dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))
                        }
                    />
                    <br/><br/>
                    <button className="btn btn-danger"
                        onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>Add</button>
                    <button className={"btn btn-secondary"}
                        onClick={() => dispatch(updateAssignment(assignment))}>Update</button>
                </li>
                <hr/>

                {courseAssignments.map((assignment) => (
                    <li
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item custom-list-item d-flex justify-content-between align-items-center"
                    >
                        {assignment.title}

                        <div>
                            <button type="button" className="btn btn-success"
                                    onClick={() => dispatch(setAssignment(assignment))}>
                                <i> Edit<AiFillCheckCircle /> </i>
                            </button>
                            <button type="button" className=" btn btn-danger"
                                    onClick={() => dispatch(deleteAssignment(assignment._id))}>
                                Delete
                            </button>
                        </div>
                    </li>




                ))}
                <div className="d-flex justify-content-end mb-2">


                </div>
            </div>
        </div>
            </div>

    );
}
export default Assignments;