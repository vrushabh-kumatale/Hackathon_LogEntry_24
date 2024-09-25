// import axios from "axios"
// import { useEffect, useState } from "react"
// import { toast } from "react-toastify"

// //import AdminNav from "./AdminNav"

// const Modules=()=>{
//     const [data,setData]=useState([])
//     const [course,setCourse]=useState([])
//     const [product,setProduct]=useState({
//         "moduleName":"",
//         "course_id":"",
//         "theoryHrs":"",
//         "labHrs":""        

//     })
//     useEffect(()=>{
//         loadData()
//         axios.get("http://localhost:8080/courses")
//         .then(resp=>{
//             console.log(resp.data)
//             setCourse(resp.data)
//         })
//     },[])
//     const loadData=()=>{
//         axios.get("http://localhost:8080/api/modules")
//         .then(resp=>{
//             console.log(resp.data)
//              setData(resp.data)
//         })
//     }
//     const handleInput=e=>{
//         setProduct({...product,[e.target.name]:e.target.value})
//     }

//     const handleDelete=(id)=>{
//         const result=window.confirm('Are you delete this module ?')
//         if(result){
//             axios.delete('http://localhost:8080/api/modules/'+id)
//             .then(resp=>{
//                 toast.success(resp.data)
//                 loadData()
//             })
//         }
//     }

    

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const formData=new FormData()                    
//         formData.append("moduleName",product.Modules)
//         formData.append("course_id",product.course_id)
//         formData.append("theoryHrs",product.theoryHrs)
//         formData.append("labHrs",product.labHrs)
//         console.log(product)
//         axios.post('http://localhost:8080/api/modules',formData)
//         .then(resp=>{
//             toast.success(resp.data)
//             setProduct({
//                 "moduleName":"",
//                 "course_id":"",
//                 "theoryHrs":"",
//                 "labHrs":""        
//             })
           
//         })
//         .catch(error=>{
//             toast.error(error)
//         })
//     }
//     return(
//         <>
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
//                     <dashboard />
//                 </div>
//                 <div className="col-sm-10">
//                     <h5 className="p-2 mb-3" style={{borderBottom: '2px solid green'}}>Available Course Modules</h5>
//                         <div className="row">
//                             <div className="col-sm-8">
                                
//                                 <table className="table table-bordered table-sm">
//                                 <thead>
//                                     <tr>
//                                     <th>Module ID</th>
//                                     <th>Module Name</th>
//                                     <th>Course</th>
//                                     <th>Theory Hour</th>
//                                     <th>Lab Hour</th>
//                                     </tr>
//                                 </thead>

//                {/* Mapping In table                   */}
                               
//                                 <tbody>
               
//                                     {data.map((x,index)=>(
//                                         <tr key={index}>
//                                             <td>{x.id}</td>
//                                           <td>{x.moduleName}</td>
//                                           <td>{x.course.coursename}</td>
//                                             <td>{x.theoryHrs}</td>
//                                             <td>{x.labHrs}</td>
//                                             <td><button onClick={(e)=>handleDelete(x.id)} className="btn btn-danger btn-sm">Delete</button></td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                                 </table>
//                             </div>
//                             <div className="col-sm-4">
//                                 <h5 className="p-2">Add Module</h5>
//                                 <form method="post">
//                                 <div className="form-group">
//                                     <label>Module Name *</label>
//                                     <input type="text" name="moduleName" value={product.moduleName} onChange={handleInput} required className="form-control" />
//                                 </div>
                                
//                         <div className="form-group">
//                                 <label>Theory Hour</label>
//                          <input type="text" pattern="[a-zA-Z ]+" required placeholder="Theory Hour" name="theoryHrs" value={product.theoryHrs} onChange={handleInput} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                                 <label>Lab Hour</label>
//                          <input type="text" pattern="[a-zA-Z ]+" required placeholder="Lab Hour" name="labHrs" value={product.labHrs} onChange={handleInput} className="form-control" />
//                         </div>
//                                 <div className="form-group">
//                                     <label>Course </label>
//                                     <select name="course_id" value={product.course_id} onChange={handleInput} required className="form-control">
//                                     <option value>Select Course</option> 
//                                     {course.map(x=>(
//                                         <>
//                                         <option value={x.id}>{x.courseName}</option>
//                                         </>
//                                     ))}         
//                                     </select>
//                                 </div>
//                                 <button onClick={handleSubmit} 
                                
//                                 className="btn btn-primary btn-sm ml-2 float-right">Save Module</button>
//                                 <a href="/modules" className="btn btn-danger btn-sm float-right">Cancel</a>
//                                 </form>
//                             </div>
//                             </div>
//                             </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Modules;



import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import './form-control.css'
import './form-group.css'

const Modules = () => {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const [product, setProduct] = useState({
    moduleName: "",
    course_id: "",
    theoryHrs: "",
    labHrs: ""
  });

  useEffect(() => {
    loadData();
    axios.get("http://localhost:8080/courses")
      .then(resp => {
        console.log(resp.data); // Verify course data here
        setCourse(resp.data);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to fetch courses");
      });
  }, []);

  const loadData = () => {
    axios.get("http://localhost:8080/api/modules")
      .then(resp => {
        console.log(resp.data);
        setData(resp.data);
      });
  };

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const result = window.confirm('Are you sure you want to delete this module?');
    if (result) {
      axios.delete(`http://localhost:8080/api/modules/${id}`)
        .then(resp => {
          toast.success(resp.data);
          loadData();
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/modules', product)
      .then(resp => {
        toast.success("Module saved successfully");
        setProduct({
          moduleName: "",
          course_id: "",
          theoryHrs: "",
          labHrs: ""
        });
        loadData();
      })
      .catch(error => {
        toast.error("Failed to save module");
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-10">
          <h5 className="p-2 mb-3" style={{ borderBottom: '2px solid green' }}>Available Course Modules</h5>
          <div className="row">
            <div className="col-sm-8">
              <table className="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Module ID</th>
                    <th>Module Name</th>
                    <th>Course</th>
                    <th>Theory Hour</th>
                    <th>Lab Hour</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((x, index) => (
                    <tr key={index}>
                      <td>{x.id}</td>
                      <td>{x.moduleName}</td>
                      <td>{x.course.courseName}</td>
                      <td>{x.theoryHrs}</td>
                      <td>{x.labHrs}</td>
                      <td>
                        <button onClick={() => handleDelete(x.id)} className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-sm-4">
              <h5 className="p-2">Add Module</h5>
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Module Name *</label>
                  <input
                    type="text"
                    name="moduleName"
                    value={product.moduleName}
                    onChange={handleInput}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Theory Hour</label>
                  <input
                    type="text"
                    name="theoryHrs"
                    value={product.theoryHrs}
                    onChange={handleInput}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Lab Hour</label>
                  <input
                    type="text"
                    name="labHrs"
                    value={product.labHrs}
                    onChange={handleInput}
                    required
                    className="form-control"
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
                <button type="submit" className="btn btn-primary btn-sm float-right">Save Module</button>
                <button type="button" className="btn btn-danger btn-sm float-right mr-2" onClick={() => setProduct({
                  moduleName: "",
                  course_id: "",
                  theoryHrs: "",
                  labHrs: ""
                })}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
