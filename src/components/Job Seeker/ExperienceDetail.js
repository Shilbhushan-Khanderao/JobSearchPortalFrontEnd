import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import jobseekerservices from "../../services/jobseekerservices";

export const ExperienceDetail = () => {
  const navigate = useNavigate();
  const [jsexperience, setJsExperience] = useState([]);
  useEffect(() => {
    getExperience();
  }, []);

  const navigateUpdateJsExperience = (expid) => {
    navigate("/UpdateExperience", { state: { id: expid } });
  };
  const jsexpid = window.sessionStorage.getItem("JobSeekerId");

  const getExperience = () => {
    jobseekerservices
      .getExperience(jsexpid)
      .then((response) => {
        setJsExperience(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteExperience = (expid)=>{
    jobseekerservices
    .deleteJobSeekerExperience(expid)
    .then((response)=>{
      console.log("Getting");
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
    });
  }

  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Experience Details</h2>
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
                            <th className="text-dark">Experience Id</th>
                            <th className="text-dark">Company Name</th>
                            <th className="text-dark">Company Sector</th>
                            <th className="text-dark">Job Title</th>
                            <th className="text-dark">Job Location</th>
                            <th className="text-dark">
                              Job Duration in Months
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {jsexperience.map((jsexperience) => (
                            <tr key={jsexperience.expid}>
                              <td>{jsexperience.expid}</td>
                              <td>{jsexperience.companyname}</td>
                              <td>{jsexperience.companysector}</td>
                              <td>{jsexperience.jobtitle}</td>
                              <td>{jsexperience.location}</td>
                              <td>{jsexperience.duration}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning btn-sm px-3 ms-3"
                                  onClick={() =>
                                    navigateUpdateJsExperience(
                                      jsexperience.expid
                                    )
                                  }
                                >
                                  Update
                                  <i className="fas fa-times"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm px-3 ms-3"
                                  onClick={() => deleteExperience(jsexperience.expid)}
                                >
                                  Delete
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

export default ExperienceDetail;
