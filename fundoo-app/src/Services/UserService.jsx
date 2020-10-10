import axiosService from "./axiosService";

const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api/" ;

class UserService {
  constructor() {
    this.axiosService = new axiosService();
  }

  login(data) {
    let url = baseURL + "user/login";
    return this.axiosService.post(url, data);
  }

  register(data) {
    let url = baseURL + "user/userSignUp";
    return this.axiosService.post(url, data);
  }

  forgetPass(data){
    let url = baseURL + "user/reset";
    return this.axiosService.post(url, data);
  }

  // addNote(data){
  //   let url = baseURL+'notes/addNotes';
  //   return this.axiosService.post(url,data);
  //   }

}

export default new UserService();