import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jobproviderservices from "../services/jobproviderservices";

const Home = () => {
  const navigate = useNavigate();
  const navigateApplyForJob = () => {
    navigate("/ApplyForJob");
  };
  const [job, setJobs] = useState([]);
  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    jobproviderservices
      .getAllJobs()
      .then((response) => {
        setJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="recruiting-amaris1.gif"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-dark">Welcome to Jobs Adda</h1>
              <p className="text-dark">Let's Work Together</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="text-dark">Your Dream Job is Waiting Here</h2>
              <p className="text-dark">
                Trending Jobs and Daily Update on Vacancies
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="text-warning">Secure Your Future With Us</h2>
              <p>All Types of Jobs</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
      <h1 className="text-center mt-3">Latest Jobs</h1>
      <hr></hr>
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card shadow-2-strong mb-5">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-borderless mb-0">
                      <thead className="fs-5">
                        <tr>
                          <th className="text-dark">Job Titile</th>
                          <th className="text-dark">Job Location</th>
                          <th className="text-dark">Job Description</th>
                          <th className="text-dark">Post Date</th>
                          <th className="text-dark">Post Status</th>
                        </tr>
                      </thead>
                      <hr></hr>
                      <tbody>
                        {job.map((job) => (
                          <tr key={job.id}>
                            <td>{job.jobTitle}</td>
                            <td>{job.location}</td>
                            <td>{job.jobDescription}</td>
                            <td>{job.postDate}</td>
                            <td>{job.postStatus}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-warning px-3 ms-3"
                                onClick={navigateApplyForJob}
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
    </>
  );
};

export default Home;
