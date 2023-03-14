import axios from "axios";
export const GETALLADMIN = "http://localhost:9009/admin/getalladmin";
export const ADDADMIN = "http://localhost:9009/admin/addAdmin";
export const ADMINLOGIN = "http://localhost:9009/admin/login";
export const DELETEADMIN = "http://localhost:9009/admin/delete?adminid=";
export const UPDATEADMIN = "http://localhost:9009/admin/update";
export const GETADMIN = "http://localhost:9009/admin/viewprofile/";

class adminservices {
  getAllAdmins() {
    return axios.get(GETALLADMIN);
  }

  deleteAdmin(adminid) {
    return axios.delete(DELETEADMIN + adminid);
  }

  updateAdmin(admin) {
    return axios.put(UPDATEADMIN, admin);
  }

  getAdminById(adminid) {
    return axios.get(GETADMIN + adminid);
  }
}

export default new adminservices();
