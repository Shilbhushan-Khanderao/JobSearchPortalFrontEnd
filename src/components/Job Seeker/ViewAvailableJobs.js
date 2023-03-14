import React, { useEffect, useState } from "react";
import jobproviderservices from "../../services/jobproviderservices";
import jobseekerservices from "../../services/jobseekerservices";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ViewAvailableJobs = () => {
  const [jpjobs,setJpJobs] = useState([]);
  
  const jobseekerid=window.sessionStorage.getItem("JobSeekerId");
  const jobid=jpjobs.jobid;

  const ApplyForJob = () => {
    const applicationdetails={
      jobseeker:{
        jobseekerid
    },
    job:
    {
      jobid
    }
    }
    jobseekerservices
    .applyJob(applicationdetails)
    .then((response) => {
     toast.success("Successfully Applied!")
    })
    .catch((error) => {
      console.log(error);
      toast.error("Application Failed !")
    });
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    jobproviderservices
      .getAllJobs()
      .then((response) => {
        setJpJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Available Jobs</h2>
      </div>

      <section className="intro">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card shadow-2-strong">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th className="text-dark">Job Id</th>
                            <th className="text-dark">Job Titile</th>
                            <th className="text-dark">Salary</th>
                            <th className="text-dark">Job Location</th>
                            <th className="text-dark">Job Category</th>
                            <th className="text-dark">Job Description</th>
                            <th className="text-dark">Total Vacancies</th>
                            <th className="text-dark">Post Date</th>
                            <th className="text-dark">Post Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jpjobs.map((jpjobs) => (
                            <tr key={jpjobs.jobid}>
                              <td>{jpjobs.jobid}</td>
                              <td>{jpjobs.jobTitle}</td>
                              <td>{jpjobs.salary}</td>
                              <td>{jpjobs.location}</td>
                              <td>{jpjobs.jobCategory}</td>
                              <td>{jpjobs.jobDescription}</td>
                              <td>{jpjobs.totalVacancy}</td>
                              <td>{jpjobs.postDate}</td>
                              <td>{jpjobs.postStatus}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning px-3 ms-3"
                                  onClick={ApplyForJob}
                                >
                                  Apply
                                  <i className="fas fa-times"></i>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewAvailableJobs;
