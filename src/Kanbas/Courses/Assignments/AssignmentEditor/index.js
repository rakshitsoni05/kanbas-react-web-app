import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../tempDatabase";
import {SlOptionsVertical} from "react-icons/sl";
import {AiFillCheckCircle} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "../assignmentReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);
    const assignments = useSelector((state) => state.assignmentReducer.assignments);
    const dispatch = useDispatch();
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {

        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="d-flex justify-content-end mb-2">
                <button type="button" className="btn btn-success mx-2">
                    <i> {<AiFillCheckCircle/>} Published</i>
                </button>
                <button type="button" className="btn btn-secondary mx-2">
                    <i>{<SlOptionsVertical/>}</i>
                </button>
            </div>
            <hr/>
            <h3>Assignment Name</h3>
            <input
                value={assignment.title}
                onChange={(e) =>
                    dispatch(setAssignment({...assignment, title: e.target.value }))}


            />
            <button onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>Add</button>
            <button
                onClick={() => dispatch(updateAssignment(assignment))}>
                Update
            </button>
            <hr />
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary mx-2">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>
        </div>

    );
}


export default AssignmentEditor;