import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./moduleReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";
function ModuleList() {
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };



    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                      dispatch(setModules(modules))
            );
    }, [courseId]);

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    return (
        <ul className="list-group custom-list">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <input
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }
                        style={{ width: "100%" }}
                    />
                    <br />
                    <br/>
                    <textarea
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                        style={{ width: "100%" }}
                    />
                </div>
                <div>
                    <button  type="button" className="btn btn-success"
                             onClick={handleAddModule}>Add</button>
                    <button  type="button" className="btn btn-primary"
                             onClick={() => handleUpdateModule(module._id)}>Update</button>
                </div>
            </li>
            <hr/>

            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item custom-list-item d-flex justify-content-between">
                        <div>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </div>
                        <div>
                            <button type="button" className="btn btn-success"
                                    onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger"
                                    onClick={() => handleDeleteModule(module._id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
        </ul>
    );
}

export default ModuleList;
