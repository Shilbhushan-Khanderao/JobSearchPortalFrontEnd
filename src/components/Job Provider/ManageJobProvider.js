import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ManageJobProvider = () => {

  const navigate = useNavigate();
  const id = window.sessionStorage.getItem("JobProviderId");

  const deleteJobProvider = (id) => {
    axios.delete("http://localhost:9009/jobprovider/delete?jobproviderid=1").then(
      (response) => {
        toast.success("Job Provider Deleted !");
        navigate("/");
      },
      (error) => {
        toast.error("Deletion Fails!");
      }
    );
  };

  return (
    <>
      <div id="page-content-wrapper">
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Manage Profile</h2>
      </div>

        <div class="container-fluid px-4">
          <div class="row g-3 my-2">
            <div class="col-md-3">
              <div class="p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-dark">Update Profile</h3>
                  <a
                    href="UpadateJobProviderProfile"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    Update
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-danger shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-light">Delete Profile</h3>
                  <button
                                  type="button"
                                  className="btn btn-dark active"
                                  onClick={deleteJobProvider}
                                >
                                  Delete
                                  <i className="fas fa-times"></i>
                                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageJobProvider;
