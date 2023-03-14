import axios from "axios";
import React, { useState } from "react";
import { JOBSEEKERLOGIN } from "../../services/jobseekerservices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const JobSeekerLogin = () => {
  const [jobseekerid, setJobSeekerId] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    if (username.length === 0) {
      toast.warning("Enter User Name");
    } else if (password.length === 0) {
      toast.warning("Enter Password");
    } else {
      const postdata = {
        username,
        password,
      };
      axios.post(JOBSEEKERLOGIN, postdata).then((response) => {
        const result = response.data;
        console.log(result["data"]);
        console.log(result["status"]);

        if (result["status"] === "success") {
          toast.success("Login Successful !")
          
          const { jobseekerid, username, password } = result["data"];
          sessionStorage["JobSeekerId"] = jobseekerid;
          sessionStorage["JobSeekerUname"] = username;
          sessionStorage["JobSeekerPass"] = password;
          navigate("/JobSeekerHome");
        } else {
          toast.error("Login Failed !");
        }
      });
    }
  }
  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Job Seeker Login</h2>
      </div>
      <section className="wrapper">
        <form className="form-right">
          <div className="mb-3">
            <label>User Name</label>
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <p className="text-left">
            Click
            <a href="JobSeekerRegistration"> Here </a>
            to Register
          </p>
          <div className="form-field">
            <input
              type="submit"
              value="Login"
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

export default JobSeekerLogin;
