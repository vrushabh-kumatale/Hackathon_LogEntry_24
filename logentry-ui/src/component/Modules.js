
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";
import './form-control.css';
import './form-group.css';

const Modules = () => {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const [product, setProduct] = useState({
    moduleName: "",
    course_id: "",
    theoryHrs: "",
    labHrs: ""
  });

 // const navigate = useNavigate();

  useEffect(() => {
    loadData();
    axios.get("http://localhost:8080/courses")
      .then(resp => {
        setCourse(resp.data);
      })
      .catch(err => {
        toast.error("Failed to fetch courses");
      });
  }, []);

  const loadData = () => {
    axios.get("http://localhost:8080/modules")
      .then(resp => {
        setData(resp.data);
      });
  };

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const result = window.confirm('Are you sure you want to delete this module?');
    if (result) {
      axios.delete(`http://localhost:8080/modules/${id}`)
        .then(resp => {
          toast.success(resp.data);
          loadData();
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/modules', product)
      .then(resp => {
        toast.success("Module saved successfully");
        setProduct({
          moduleName: "",
          course_id: "",
          theoryHrs: "",
          labHrs: ""
        });
        loadData();
       // navigate("/dashboard");
      })
      .catch(error => {
        toast.error("Failed to save module");
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <h5 className="p-2 mb-3 text-white bg-dark text-center" style={{ borderBottom: '2px solid green' }}>
            Available Course Modules
          </h5>
          <table className="table table-striped table-hover table-bordered table-responsive">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Module ID</th>
                <th>Module Name</th>
                <th>Course Name</th>
                <th>Theory Hour</th>
                <th>Lab Hour</th>
                <th>Delete Button</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{x.id}</td>
                  <td>{x.moduleName}</td>
                  <td>{x.course.courseName}</td>
                  <td>{x.theoryHrs}</td>
                  <td>{x.labHrs}</td>
                  <td>
                    <button 
                      onClick={() => handleDelete(x.id)} 
                      className="btn btn-danger btn-sm rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-sm-12 col-md-4">
          <h5 className="p-2 text-white bg-primary text-center rounded">Add Module</h5>
          <form method="post" onSubmit={handleSubmit} className="p-3 bg-light rounded">
            <div className="form-group">
              <label>Module Name *</label>
              <input
                type="text"
                name="moduleName"
                value={product.moduleName}
                onChange={handleInput}
                required
                className="form-control"
                placeholder="Enter Module Name"
              />
            </div>
            <div className="form-group">
              <label>Theory Hour</label>
              <input
                type="number"
                name="theoryHrs"
                value={product.theoryHrs}
                onChange={handleInput}
                required
                className="form-control"
                placeholder="Enter Theory Hours"
              />
            </div>
            <div className="form-group">
              <label>Lab Hour</label>
              <input
                type="number"
                name="labHrs"
                value={product.labHrs}
                onChange={handleInput}
                required
                className="form-control"
                placeholder="Enter Lab Hours"
              />
            </div>
            <div className="form-group">
              <label>Course *</label>
              <select
                name="course_id"
                value={product.course_id}
                onChange={handleInput}
                required
                className="form-control"
              >
                <option value="">Select Course</option>
                {course.map((x) => (
                  <option key={x.id} value={x.id}>{x.courseName}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-success btn-lg btn-block mt-3">Save</button>
            <button 
              type="button" 
              className="btn btn-warning btn-lg btn-block mt-2" 
              onClick={() => setProduct({
                moduleName: "",
                course_id: "",
                theoryHrs: "",
                labHrs: ""
              })}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modules;

