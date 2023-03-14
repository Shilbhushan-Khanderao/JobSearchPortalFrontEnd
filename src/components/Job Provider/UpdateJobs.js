
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jobproviderservices from "../../services/jobproviderservices";

export const UpdateJobs = () => {
  const [jobid,setJobId] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [totalVacancy, setTotalVacancy] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postStatus, setPostStatus] = useState("");
  
  const navigate = useNavigate();
  const uslocation = useLocation();
  const id = uslocation.state.id;


  useEffect(()=>{
    jobproviderservices
    .getJobById(id)
    .then((response)=>{
      setJobId(response.data.jobid);
      setJobTitle(response.data.jobTitle);
      setSalary(response.data.salary);
      setLocation(response.data.location);
      setJobCategory(response.data.jobCategory);
      setJobDescription(response.data.jobDescription);
      setTotalVacancy(response.data.totalVacancy);
      setPostDate(response.data.postDate);
      setPostStatus(response.data.postStatus);
    }).catch((error) => {
      console.log(error);
    });
  },[]);

  const UpdateJobs = (e)=>{
    e.preventDefault();
    const jobupdate ={
      jobid,jobTitle,salary,location,jobCategory,jobDescription,totalVacancy,postDate,postStatus
    };
    if (id) {
      jobproviderservices
        .updatePostedJobs(jobupdate)
        .then((response) => {
          console.log(response.data);
          toast.success("Updated Successfully");
          navigate("/JobProviderHome");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Updation Failed");
        });
    }
  };
  
  return (
    <>
    <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Update Jobs</h2>
      </div>
      <section className="wrapper">
        <form className="form-right">
          <div className="row">
            <div className="mb-3">
              <label>Job Titile</label>
              <input
                type="text"
                className="input-field"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Salary</label>
              <input
                type="text"
                className="input-field"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Job Location</label>
              <input
                type="text"
                className="input-field"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label>Job Category</label>
            <input
              type="text"
              className="input-field"
              required
              value={jobCategory}
              onChange={(e) => setJobCategory(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Job Description</label>
            <input
              type="text"
              className="input-field"
              required
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Total Vacancy</label>
            <input
              type="text"
              className="input-field"
              required
              value={totalVacancy}
              onChange={(e) => setTotalVacancy(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Post Date</label>
            <input
              type="text"
              className="input-field"
              required
              value={postDate}
              onChange={(e) => setPostDate(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Post Status</label>
            <input
              type="text"
              className="input-field"
              required
              value={postStatus}
              onChange={(e) => setPostStatus(e.target.value)}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Update Job"
              className="register"
              name="register"
              onClick={UpdateJobs}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateJobs;
