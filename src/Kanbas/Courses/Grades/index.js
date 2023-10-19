import db from "../../Database";
import { useParams } from "react-router-dom";
import {FaFileImport} from "react-icons/fa";
import {FaFileExport} from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="container">
            <h1>Grades</h1>
            <div className="col">
                <div className="d-flex justify-content-end">

                    <div className=" col-xl-2">
                        <button type="button" className="btn btn-secondary"><i>{<FaFileImport/>}</i> Import
                        </button>
                    </div>
                    <div className="col-xl-2">
                        <button type="button" className="btn btn-secondary"><i>{<FaFileExport/>}</i>Export
                        </button>
                    </div>
                    <div className="col-xl-2">
                        <button type="button" className="btn btn-secondary"><i>{<AiFillSetting/>}</i></button>
                    </div>

                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Student Names</h2>
                        <input id="students" placeholder="Search Students"
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <h2>Assignment Names</h2>
                        <input id="assignments" placeholder="Search Assignments"
                               className="form-control"/>
                    </div>
                </div>
                <br/>
                    <button type="button" className="btn btn-secondary">Apply Filters</button>

            </div>
            <hr/>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td>{grade?.grade || ""}</td>);})}
                            </tr>);
                    })}
                    </tbody></table>
            </div></div>);
}
export default Grades;


