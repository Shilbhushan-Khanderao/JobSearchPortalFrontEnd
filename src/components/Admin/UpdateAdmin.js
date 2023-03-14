import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import adminservices from "../../services/adminservices";

export const UpdateAdmin = () => {
  // const [admin, setAdmins] = useState("");
  const [adminid, setAdminid] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    adminservices
      .getAdminById(id)
      .then((response) => {
        setAdminid(response.data.adminid);
        setUsername(response.data.username);
        setPassword(response.data.password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const UpdateAdmin = (e) => {
    e.preventDefault();
    const admin = { username, password, adminid };

    if (id) {
      adminservices
        .updateAdmin(admin)
        .then((response) => {
          console.log(response.data);
          toast.success("Updated Successfully");
          navigate("/AdminProfile");
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
        <h2 class="fs-2 m-0 py-5 px-5">Update Admin Details</h2>
      </div>
      <section className="wrapper">
        <form className="form-right">
          <div className="row">
            <div className="mb-3">
              <label>User Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="text"
                className="input-field"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Update"
              className="register"
              name="register"
              onClick={(e) => UpdateAdmin(e)}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateAdmin;
