import axios from "axios";

export const GETALLJOBS = "http://localhost:9009/job/getalljobs";
export const JOBPROVIDERLOGIN = "http://localhost:9009/jobprovider/login";
export const DELETEJOBS ="http://localhost:9009/jobprovider/deletejobpost?jobid=";
export const GETALLJOBPROVIDERS="http://localhost:9009/admin/getalljobprovider";
export const VIEWJOBPROVIDERPROFILE="http://localhost:9009/jobprovider/viewprofile/";
export const UPDATEJOBPROVIDER ="http://localhost:9009/jobprovider/update";
export const UPDATEPOSTEDJOBS ="http://localhost:9009/jobprovider/editjobpost";
export const GETJOBBYID = "http://localhost:9009/job/searchjob/";
export const DELETEJOBPROVIDER="http://localhost:9009/jobprovider/delete?jobproviderid=";

class jobproviderservices {
  getAllJobProvider(){
    return axios.get(GETALLJOBPROVIDERS);
  }
  
  getAllJobs() {
    return axios.get(GETALLJOBS);
  }

  deleteJobs(jobid) {
    return axios.delete(DELETEJOBS + jobid);
  }

  getJobProviderById(jobproviderid){
    return axios.get(VIEWJOBPROVIDERPROFILE + jobproviderid);
  }

  updateJobProvider(jobprovider){
    return axios.put(UPDATEJOBPROVIDER, jobprovider);
  }

  updatePostedJobs(jobupdate){
    return axios.put(UPDATEPOSTEDJOBS, jobupdate);
  }

  getJobById(jobid){
    return axios.get(GETJOBBYID + jobid);
  }

  deleteJobProvider(jobproviderid){
    return axios.delete(DELETEJOBPROVIDER + jobproviderid)
  }

}

export default new jobproviderservices();
