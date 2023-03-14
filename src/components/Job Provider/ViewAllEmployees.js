import React, { useEffect, useState } from "react";

export const ViewAllEmployees = () => {
  const [employer, setJobProviders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9009/admin/getalljobprovider")
      .then((res) => res.json())
      .then((result) => {
        setJobProviders(result);
      });
  }, []);
  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Employees</h2>
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
                            <th className="text-dark">Employee Id</th>
                            <th className="text-dark">First Name</th>
                            <th className="text-dark">Middle Name</th>
                            <th className="text-dark">Last Name</th>
                            <th className="text-dark">Mobile Number</th>
                            <th className="text-dark">Email Id</th>
                          </tr>
                        </thead>
                        <tbody>
                          {employer.map((jobprovider) => (
                            <tr key={jobprovider.id}>
                              <td>{jobprovider.jobproviderid}</td>
                              <td>{jobprovider.fname}</td>
                              <td>{jobprovider.mname}</td>
                              <td>{jobprovider.lname}</td>
                              <td>{jobprovider.mobileno}</td>
                              <td>{jobprovider.emailid}</td>
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

export default ViewAllEmployees;
