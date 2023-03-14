import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const JobProviderRegistration = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobileno, setMobileNumber] = useState("");
  
  const navigate =useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    const student = {
      fname,
      mname,
      lname,
      emailid,
      mobileno,
      companyname,
      username,
      password,
    };
    if (fname.length === 0) {
      toast.error("Please Enter First Name");
    } else if (mname.length === 0) {
      toast.error("Please Enter Middle Name");
    } else if (lname.length === 0) {
      toast.error("Please Enter Last Name");
    } else if (companyname.length === 0) {
      toast.error("Please Enter Last Name");
    } else if (emailid.length === 0) {
      toast.error("Please Enter Emial Id");
    } else if (mobileno.length === 0) {
      toast.error("Please Enter Mobile Number");
    } else if (username.length === 0) {
      toast.error("Please Enter User Name");
    } else if (password.length === 0) {
      toast.error("Please Enter Password");
    } else {
      fetch("http://localhost:9009/jobprovider/addjobprovider", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        toast.success("Registration Successful !")
        navigate("/JobProviderLogin")
      });
    }
  };
  return (
    <>
    <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Job Provider Registration</h2>
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
          <div className="mb-3">
            <label>Set User Name</label>
            <input
              type="text"
              className="input-field"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>

          <div className="mb-3">
            <label>Set Password</label>
            <input
              type="password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Register"
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

export default JobProviderRegistration;
