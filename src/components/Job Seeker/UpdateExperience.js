import React, { useEffect, useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jobseekerservices from "../../services/jobseekerservices";

export const UpdateExperience = () => {

  const [expid, setExpid] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [companysector, setCompanysector] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  
  const jobseekerid = window.sessionStorage.getItem("JobSeekerId");

  const navigate = useNavigate();
  const jslocation = useLocation();
  const id = jslocation.state.id;

  useEffect(() => {
    jobseekerservices
      .getExperienceById(id)
      .then((response) => {
        setExpid(response.data.expid);
        setCompanyname(response.data.companyname);
        setCompanysector(response.data.companysector);
        setJobtitle(response.data.jobtitle);
        setLocation(response.data.location);
        setDuration(response.data.duration);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const UpdateExperience = (e) => {
    e.preventDefault();
    const experience = {
      expid,
      companyname,
      companysector,
      jobtitle,
      location,
      duration,
      jobseeker:{
        jobseekerid
      }
    };

    if (id) {
      jobseekerservices
        .updateExperience(experience)
        .then((response) => {
          console.log(response.data);
          toast.success("Updated Successfully");
          navigate("/Experience");
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
        <h2 class="fs-2 m-0 py-5 px-5">Update Experience Details</h2>
      </div>
      <section className="wrapper">
        <form className="form-right">
          <div className="row">
            <div className="mb-3">
              <label>Experience id</label>
              <input
                type="text"
                className="input-field"
                required
                value={expid}
                onChange={(e) => setExpid(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Company Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={companyname}
                onChange={(e) => setCompanyname(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Company Sector</label>
              <input
                type="text"
                className="input-field"
                required
                value={companysector}
                onChange={(e) => setCompanysector(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label>Job Title </label>
            <input
              type="text"
              className="input-field"
              required
              value={jobtitle}
              onChange={(e) => setJobtitle(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="input-field"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Duration </label>
            <input
              type="text"
              className="input-field"
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Update"
              className="register"
              name="register"
              onClick={UpdateExperience}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateExperience;
