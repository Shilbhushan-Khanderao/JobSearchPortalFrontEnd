import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jobproviderservices from "../../services/jobproviderservices";

export const UpadateJobProviderProfile = () => {
  const [jobproviderid, setJobProviderId] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobileno, setMobileNumber] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
        setEmailid(response.data.emailid);
        setMobileNumber(response.data.mobileno);
        setUserName(response.data.username);
        setPassword(response.data.password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const UpdateJobProvider = (e) => {
    e.preventDefault();
    const jobprovider = {
      jobproviderid,
      fname,
      mname,
      lname,
      companyname,
      emailid,
      mobileno,
      username,
      password,
    };

    if (id) {
      jobproviderservices
        .updateJobProvider(jobprovider)
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
        <h2 class="fs-2 m-0 py-5 px-5"> Update Details</h2>
      </div>
      <section className="wrapper">
        <form className="form-right">
          <div className="row">
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Middle Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={mname}
                onChange={(e) => setMname(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label>Company Name</label>
            <input
              type="text"
              className="input-field"
              required
              value={companyname}
              onChange={(e) => setCompanyName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Email Id</label>
            <input
              type="text"
              className="input-field"
              required
              value={emailid}
              onChange={(e) => setEmailid(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Mobile Number</label>
            <input
              type="text"
              className="input-field"
              required
              value={mobileno}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Update"
              className="register"
              name="register"
              onClick={UpdateJobProvider}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpadateJobProviderProfile;
