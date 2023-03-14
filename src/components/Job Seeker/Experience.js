import React from "react";

export const Experience = () => {
  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Manage Experience Details</h2>
      </div>
      <div id="page-content-wrapper">
        <div class="container-fluid px-4">
          <div class="row g-3 my-2">
            <div class="col-md-3">
              <div class="p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-dark">Experience Details</h3>
                  <a
                    href="ExperienceDetail"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-white">Add Experience</h3>
                  <a
                    href="AddExperiance"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
