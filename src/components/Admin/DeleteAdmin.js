import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const DeleteAdmin = ({ admin }) => {
  const deleteAdmin = (id) => {
    axios.delete("http://localhost:9009/admin/delete?adminid=1").then(
      (response) => {
        toast.success("Admin Deleted !");
      },
      (error) => {
        toast.error("Admin Not Deleted !");
      }
    );
  };

  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Admin List</h2>
      </div>
      <section className="intro">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card shadow-2-strong">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th className="text-dark">Job Id</th>
                            <th className="text-dark">User Name</th>
                            <th className="text-dark">Password</th>
                          </tr>
                        </thead>
                        <tbody>
                          {admin.map((admin) => (
                            <tr key={admin.id}>
                              <td>{admin.adminid}</td>
                              <td>{admin.username}</td>
                              <td>{admin.password}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning btn-sm px-3 ms-3"
                                >
                                  Update
                                  <i className="fas fa-times"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm px-3 ms-3"
                                  onClick={deleteAdmin}
                                >
                                  Delete
                                  <i className="fas fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteAdmin;
