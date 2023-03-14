import React, { useEffect, useState } from "react";
import jobseekerservices from "../../services/jobseekerservices";

export const ViewJobSeekerProfile = () => {
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

  const [educationtype, setEducationtype] = useState("");
  const [sscpercent, setSscpercent] = useState("");
  const [hscpercent, setHscpercent] = useState("");
  const [diplomapercent, setDiplomapercent] = useState("");
  const [degreepercent, setDegreepercent] = useState("");
  const [masterspercent, setMasterspercent] = useState("");
  const [sscyear, setSscyear] = useState("");
  const [hscyear, setHscyear] = useState("");
  const [diplomayear, setDiplomayear] = useState("");
  const [degreeyear, setDegreeyear] = useState("");
  const [mastersyear, setMastersyear] = useState("");
  
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    jobseekerservices
      .getEducation(id)
      .then((response) => {
        setEducationtype(response.data.educationtype);
        setSscpercent(response.data.sscpercent);
        setHscpercent(response.data.hscpercent);
        setDiplomapercent(response.data.diplomapercent);
        setDegreepercent(response.data.degreepercent);
        setMasterspercent(response.data.masterspercent);
        setSscyear(response.data.sscyear);
        setHscyear(response.data.hscyear);
        setDiplomayear(response.data.diplomayear);
        setDegreeyear(response.data.degreeyear);
        setMastersyear(response.data.mastersyear);
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
                <p class="fs-3">Personal Details</p>
                <div class="row g-3">
                  <div>
                    <label class="form-label">Job Seeker Id</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{jobseekerid}</div>
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
                    <label class="form-label">Mobile Number</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{mobilenumber}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Email Id</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{emailid}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Date of Birth</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{dob}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Age</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{age}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Gender</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{gender}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Address</label>
                    <div class="col-sm-9 fs-5">{address}</div>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper px-5 py-5">
        <div class="row">
          <div class="col-12">
            <div class="row mb-5 gx-5">
              <div class="col-xxl-8 mb-5 mb-xxl-0">
                <p class="fs-3">Educational Details</p>
                <div class="row g-3">
                  <div>
                    <label class="form-label">Eduaction Type</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{educationtype}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label mb-3">SSC Percentage</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{sscpercent}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">SSC Pasout Year</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{sscyear}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">HSC Percentage</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{hscpercent}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">HSC Pasout Year</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{hscyear}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Diploma Percentage</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{diplomapercent}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Diploma Pasout Year</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{diplomayear}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Degree Percentage</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{degreepercent}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Degree Pasout Year</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{degreeyear}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Master Degree Percentage</label>
                    <br></br>
                    <div class="col-sm-9 fs-5">{masterspercent}</div>
                    <hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Master Degree Pasout Year</label>
                    <div class="col-sm-9 fs-5">{mastersyear}</div>
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

export default ViewJobSeekerProfile;
