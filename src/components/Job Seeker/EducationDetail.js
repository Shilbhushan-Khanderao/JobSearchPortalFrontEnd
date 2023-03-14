import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jobseekerservices from "../../services/jobseekerservices";

export const EducationDetail = () => {

  const [educationid, setEducationid]= useState("");
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
      .getEducation(id)
      .then((response) => {
        setEducationid(response.data.educationid);
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
        <h2 class="fs-2 m-0 py-5 px-5">Education Details</h2>
      </div>
      <div class="wrapper px-5 py-5">
        <div class="row">
          <div class="col-12">
            <div class="row mb-5 gx-5">
              <div class="col-xxl-8 mb-5 mb-xxl-0">
                <div class="row g-3">
                  <div>
                    <label class="form-label">Education Id</label><br></br>
                    <div class="col-sm-9 fs-5">{educationid}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label mb-3">Education Type</label><br></br>
                    <div class="col-sm-9 fs-5">{educationtype}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">SSC Percentage</label><br></br>
                    <div class="col-sm-9 fs-5">{sscpercent}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">SSC Pasout Year</label><br></br>
                    <div class="col-sm-9 fs-5">{sscyear}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">HSC Percentage</label><br></br>
                    <div class="col-sm-9 fs-5">{hscpercent}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">HSC Pasout Year</label><br></br>
                    <div class="col-sm-9 fs-5">{hscyear}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Diploma Percentage</label><br></br>
                    <div class="col-sm-9 fs-5">{diplomapercent}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Diploma Pasout Year</label>
                    <div class="col-sm-9 fs-5">{diplomayear}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Degree Percentage</label><br></br>
                    <div class="col-sm-9 fs-5">{degreepercent}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Degree Pasout Year</label>
                    <div class="col-sm-9 fs-5">{degreeyear}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Master Degree Percentage</label><br></br>
                    <div class="col-sm-9 fs-5">{masterspercent}</div><hr></hr>
                  </div>
                  <div>
                    <label class="form-label">Master Degree Pasout Year</label>
                    <div class="col-sm-9 fs-5">{mastersyear}</div><hr></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default EducationDetail;
