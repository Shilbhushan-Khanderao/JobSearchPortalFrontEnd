import axios from "axios";

export const JOBSEEKERLOGIN ="http://localhost:9009/jobseeker/login";
export const JOBSEEKERVIEWPROFILE = "http://localhost:9009/jobseeker/viewprofile/";
export const UPDATEJOBSEEKER = "http://localhost:9009/jobseeker/update";
export const GETALLJOBSEEKERS = "http://localhost:9009/admin/getalljobseeker";
export const UPDATEEDUCATION = "http://localhost:9009/jobseeker/updateeducation";
export const UDDATEEXPERIENCE = "http://localhost:9009/jobseeker/updateexp";
export const GETEDUACTION = "http://localhost:9009/jobseeker/geteducation/";
export const GETEXPERIENCE = "http://localhost:9009/jobseeker/getexperience/";
export const GETEXPERIENCEBYID = "http://localhost:9009/jobseeker/getexperiencebyid/";
export const GETEDUCATIONBYID="http://localhost:9009/jobseeker/geteducationbyid/";
export const DELETEEXPERIENCE ="http://localhost:9009/jobseeker/deleteexp?expid=";
export const APPLYFORJOB ="http://localhost:9009/jobseeker/apply";

class jobseekerservices {
    getAllJobSeeker() {
    return axios.get(GETALLJOBSEEKERS);
    }
  
    // deleteJobSeeker(jobseekerid) {x
    //   return axios.delete(DELETEADMIN + jobseekerid);
    // }
  
    updateJobSeeker(jobseeker) {
      return axios.put(UPDATEJOBSEEKER, jobseeker);
    }
  
    getJobSeekerById(jobseekerid) {
      return axios.get(JOBSEEKERVIEWPROFILE + jobseekerid);
    }

    updateEducation(education){
      return axios.put(UPDATEEDUCATION, education);
    }

    updateExperience(expid){
      return axios.put(UDDATEEXPERIENCE, expid);
    }

    getEducation(jobseekerid){
      return axios.get(GETEDUACTION + jobseekerid)
    }

    getExperience(jobseekerid){
      return axios.get(GETEXPERIENCE + jobseekerid)
    }

    getExperienceById(expid){
      return axios.get(GETEXPERIENCEBYID + expid)
    }

    getEduactionById(educationid){
      return axios.get(GETEDUCATIONBYID + educationid)
    }

    deleteJobSeekerExperience(expid){
      return axios.delete(DELETEEXPERIENCE + expid)
    }

    applyJob(applicationdetails){
      return axios.post(APPLYFORJOB, applicationdetails)
    }
  }

  export default new jobseekerservices();
  