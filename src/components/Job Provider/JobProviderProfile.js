import React, { useEffect, useState } from "react";
import jobproviderservices from "../../services/jobproviderservices";

export const JobProviderProfile = () => {
  const [jobproviderid, setJobProviderId] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobileno, setMobileNumber] = useState("");

  const id = window.sessionStorage.getItem("JobProviderId");

  useEffect(() => {
    jobproviderservices
      .getJobProviderById(id)
      .then((response) => {
        setJobProviderId(response.data.jobproviderid);
        setFname(response.data.fname);
        setMname(response.data.mname);
        setLname(response.data.lname);
        setCompanyName(response.data.companyname);
        setMobileNumber(response.data.mobileno);
        setEmailid(response.data.emailid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Welcome {fname}</h2>
      </div>
      <div class="wrapper px-5 py-5">
        <div class="row">
          <div class="col-12">
            <div class="row mb-5 gx-5">
              <div class="col-xxl-8 mb-5 mb-xxl-0">
                <div class="row g-3">
                  <div>
                    <label class="form-label">Job Provider Id</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{jobproviderid}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label mb-3">First Name</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{fname}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Middle Name</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{mname}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Last Name</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{lname}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Company Name</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{companyname}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Mobile Number</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{mobileno}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Email Id</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{emailid}</div>
                    <hr></hr>
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

export default JobProviderProfile;
