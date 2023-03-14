import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ApplyForJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [totalVacancy, setTotalVacancy] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postStatus, setPostStatus] = useState("");

  const navigate =useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    const student = {jobTitle,salary,location,jobCategory,jobDescription,totalVacancy,postDate,postStatus};
    if (jobTitle.length === 0) {
      toast.error("Enter Job Title");
    } else if (salary.length === 0) {
      toast.error("Please Enter Salary");
    } else if (location.length === 0) {
      toast.error("Enter Job Location");
    } else if (jobCategory.length === 0) {
      toast.error("Enter Emial Id");
    } else if (jobDescription.length === 0) {
      toast.error("Enter Mobile Job Description");
    } else if (totalVacancy.length === 0) {
      toast.error("Enter Total Vacancy");
    } else if (postDate.length === 0) {
      toast.error("Enter Post Date");
    } else if (postStatus.length === 0) {
      toast.error("Enter Post Status");
    } else {
      fetch("http://localhost:9009/jobprovider/addjobpost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        toast.success("Job Posted Successfully !");
        navigate("/ViewAllPostedJobs")
      });
    }
  };
  return (
    <>
    <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Apply For Job</h2>
      </div>
      <section className="wrapper">
        <form className="form-right">
          <div className="row">
            <div className="mb-3">
              <label>Job Title</label>
              <input
                type="text"
                className="input-field"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Job Description </label>
              <input
                type="text"
                className="input-field"
                required
                value={jobDescription}
                onChange={(e) => setjobDescription(e.target.value)}
              ></input>
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
          <div className="mb-3">
            <label>Job Salary</label>
            <input
              type="text"
              className="input-field"
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
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
              value="Apply"
              className="register"
              name="register"
              onClick={handleClick}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default ApplyForJob;
