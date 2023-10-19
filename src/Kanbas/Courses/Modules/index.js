import React from "react";
import ModuleList from "./ModuleList";
import {SlOptionsVertical} from "react-icons/sl";

function Modules() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Modules</h2>
                    <hr/>
                </div>
            </div>
            <div>
                <div className="col d-flex align-items-center">
                    <button type="button" className="btn btn-secondary mx-2">
                        Collapse All
                    </button>
                    <button type="button" className="btn btn-secondary mx-2">
                        View Progress
                    </button>
                    <div className="dropdown mx-2">
                        <button className="btn btn-secondary dropdown-toggle"
                            type="button" id="dropdownMenuButton">
                            Published
                        </button>

                    </div>
                    <button type="button" className="btn btn-danger mx-2">
                         Module
                    </button>
                    <button type="button" className="btn btn-secondary mx-2">
                        <i >{<SlOptionsVertical/>}</i>
                    </button>
                </div>
            </div>
            <hr />
            <ModuleList />
        </div>
    );
}

export default Modules;
