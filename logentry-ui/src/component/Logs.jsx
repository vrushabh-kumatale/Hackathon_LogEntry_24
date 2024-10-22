import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
//import StaffNav from "./StaffNav";

const Logs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        axios.get("http://localhost:8080/logs/all")
            .then(resp => {
                setData(resp.data);
            })
            .catch(error => {
                toast.error("Failed to load logs.");
            });
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this log?");
        if (confirmDelete) {
            axios.delete(`http://localhost:8080/logs/${id}`)
                .then(resp => {
                    toast.success("Log deleted successfully!");
                    loadData();
                })
                .catch(error => {
                    toast.error("Failed to delete the log.");
                });
        }
    };

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
                <div className="row">
                   
                    <div className="col-sm-10">
                        <div className="card shadow mt-3">
                           
                            <div className="card-body">
                                <table className="table table-bordered table-hover">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Sr. No</th>
                                            <th>Course Name</th>
                                            <th>Module Name</th>
                                    
                                            <th>Date</th>
                                            <th>From Time</th>
                                            <th>To Time</th>
                                           
                                            {/* <th>Staff Name</th> New field */}
                                            <th>Status</th>   {/* New field */}
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((x, index) => (
                                            <tr key={x.id}>
                                                <td>{index + 1}</td>
                                                <td>{x.course.courseName}</td>
                                                <td>{x.module.moduleName}</td>
                                               
                                                <td>{x.date}</td>
                                                <td>{x.fromTime}</td>
                                                <td>{x.toTime}</td>
                                               
                                                {/* <td>{x.userid}</td> Render new staff ID field */}
                                                <td>{x.status}</td>   {/* Render new status field */}
                                                <td>
                                                    <button 
                                                        onClick={() => handleDelete(x.id)} 
                                                        className="btn btn-danger btn-sm">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Logs;
