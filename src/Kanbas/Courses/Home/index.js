import React from "react";
import ModuleList from "../Modules/ModuleList";
import { SlOptionsVertical } from "react-icons/sl";

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Home</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <div className="d-flex align-items-center">
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
                    <hr />
                    <ModuleList />
                </div>
                <div className="d-none d-lg-block col-lg-3 col-xl-3 ">
                    <div className="col">
                        <div className="row mb-2">
                            <h3 className="col-12 list-group-item list-group-item-secondary">Course Status</h3>
                            <div className="col-12">
                                <button type="button" className="btn btn-secondary">Unpublish</button>
                                <button type="button" className="btn btn-success">Published</button>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <button type="button" className="col-12 btn btn-secondary wd-margin-bottom">Import Existing Content</button>
                            <button type="button" className="col-12 btn btn-secondary wd-margin-bottom">Import From Commons</button>
                            <button type="button" className="col-12 btn btn-secondary wd-margin-bottom">Choose Home Page</button>
                            <button type="button" className="col-12 btn btn-secondary wd-margin-bottom">View Course Stream</button>
                            <button type="button" className="col-12 btn btn-secondary wd-margin-bottom">New Announcement</button>
                            <button type="button" className="col-12 btn btn-secondary wd-margin-bottom">New Analytics</button>
                            <button type="button" className="col-12 btn btn-secondary wd-margin-bottom">View Course Notifications</button>
                        </div>
                    </div>

                    <br/>

                    <div className="list-group">
                        <h2 className="list-group-item list-group-item-secondary">Coming Up</h2>
                        <a href="#" className="list-group-item list-group-item-action wd-profilelink">View Calendar</a>
                        <a href="#" className="list-group-item list-group-item-action wd-profilelink">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
                        <a href="#" className="list-group-item list-group-item-action wd-profilelink">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
                        <a href="#" className="list-group-item list-group-item-action wd-profilelink">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
