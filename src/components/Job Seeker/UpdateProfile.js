import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jobseekerservices from "../../services/jobseekerservices";

export const UpdateProfile = () => {
  const [jobseekerid, setJobSeekerId] = useState("");
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

  const navigate = useNavigate();

  const id = window.sessionStorage.getItem("JobSeekerId");

  useEffect(() => {
    jobseekerservices
      .getJobSeekerById(id)
      .then((response) => {
        setJobSeekerId(response.data.jobseekerid);
        setFname(response.data.fname);
        setMname(response.data.mname);
        setLname(response.data.lname);
        setEmailid(response.data.emailid);
        setMobileNumber(response.data.mobilenumber);
        setDob(response.data.dob);
        setAge(response.data.age);
        setGender(response.data.gender);
        setAddress(response.data.address);
        setUserName(response.data.username);
        setPassword(response.data.password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const UpdateJobSeeker = (e) => {
    e.preventDefault();
    const jobseeker = {
      jobseekerid,
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

    if (id) {
      jobseekerservices
        .updateJobSeeker(jobseeker)
        .then((response) => {
          console.log(response.data);
          toast.success("Updated Successfully");
          navigate("/JobseekerHome");
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
        <h2 class="fs-2 m-0 py-5 px-5">Welcome {fname}</h2>
      </div>
      <div class="wrapper px-5 py-5">
        <form>
          <div class="row">
            <div class="col-12">
              <div class="row mb-5 gx-5">
                <div class="col-xxl-8 mb-5 mb-xxl-0">
                  <div class="row g-3">
                    <div>
                      <label class="form-label mb-3">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Middle Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={mname}
                        onChange={(e) => setMname(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Mobile Number</label>
                      <input
                        type="text"
                        class="form-control"
                        value={mobilenumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Email Id</label>
                      <input
                        type="text"
                        class="form-control"
                        value={emailid}
                        onChange={(e) => setEmailid(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Date of Birth</label>
                      <input
                        type="text"
                        class="form-control"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Age</label>
                      <input
                        type="text"
                        class="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Gender</label>
                      <input
                        type="text"
                        class="form-control"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">User Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label class="form-label">Password</label>
                      <input
                        type="text"
                        class="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="form-field py-4">
                    <input
                      type="submit"
                      value="Update"
                      className="register"
                      name="register"
                      onClick={(e) => UpdateJobSeeker(e)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
