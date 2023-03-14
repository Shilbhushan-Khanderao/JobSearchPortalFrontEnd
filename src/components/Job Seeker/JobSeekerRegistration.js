import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const JobSeekerRegistration = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate =useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    const student = {
      fname,
      mname,
      lname,
      emailid,
      mobilenumber,
      dob,
      age,
      gender,
      address,
      username,
      password,
    };
    if (fname.length === 0) {
      toast.error("Please Enter First Name");
    } else if (mname.length === 0) {
      toast.error("Please Enter Middle Name");
    } else if (lname.length === 0) {
      toast.error("Please Enter Last Name");
    } else if (emailid.length === 0) {
      toast.error("Please Enter Emial Id");
    } else if (mobilenumber.length === 0) {
      toast.error("Please Enter Mobile Number");
    } else if (dob.length === 0) {
      toast.error("Please Enter Date Of Birth");
    } else if (age.length === 0) {
      toast.error("Please Enter Age");
    } else if (gender.length === 0) {
      toast.error("Please Enter Gender");
    } else if (address.length === 0) {
      toast.error("Please Enter Address");
    } else if (username.length === 0) {
      toast.error("Please Enter User Name");
    } else if (password.length === 0) {
      toast.error("Please Enter Password");
    } else {
      fetch("http://localhost:9009/jobseeker/addjobseeker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        toast.success("Registration Successful !")
        navigate("/JobSeekerLogin")
      });
    }
  };
  return (
    <><div className="wrapper">
    <h2 class="fs-2 m-0 py-5 px-5">Job Seeker Registration</h2>
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
              value={mobilenumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Date Of Birth</label>
            <input
              type="text"
              className="input-field"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Age</label>
            <input
              type="text"
              className="input-field"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Gender</label>
            <input
              type="text"
              className="input-field"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="input-field"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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

export default JobSeekerRegistration;
