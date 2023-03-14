import React, { useEffect, useState } from "react";

export const ViewAllJobSeeker = () => {
  const [jobseeker, setJobSeekers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9009/admin/getalljobseeker")
      .then((res) => res.json())
      .then((result) => {
        setJobSeekers(result);
      });
  }, []);
  return (
    <>
      <div className="wrapper">
          <h2 class="fs-2 m-0 py-5 px-5">Job Seekers</h2>
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
                          <th className="text-dark">Jobseeker Id</th>
                          <th className="text-dark">First Name</th>
                          <th className="text-dark">Middle Name</th>
                          <th className="text-dark">Last Name</th>
                          <th className="text-dark">Mobile Number</th>
                          <th className="text-dark">Email Id</th>
                          <th className="text-dark">Date of Birth</th>
                          <th className="text-dark">Age</th>
                          <th className="text-dark">Gender</th>
                          <th className="text-dark">Address</th>
                        </thead>
                        <tbody>
                          {jobseeker.map((jobseeker) => (
                            <tr key={jobseeker.id}>
                              <td>{jobseeker.jobseekerid}</td>
                              <td>{jobseeker.fname}</td>
                              <td>{jobseeker.mname}</td>
                              <td>{jobseeker.lname}</td>
                              <td>{jobseeker.mobilenumber}</td>
                              <td>{jobseeker.emailid}</td>
                              <td>{jobseeker.dob}</td>
                              <td>{jobseeker.age}</td>
                              <td>{jobseeker.gender}</td>
                              <td>{jobseeker.address}</td>
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

export default ViewAllJobSeeker;
