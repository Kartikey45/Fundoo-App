import axiosService from "./axiosService";

const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api/";

class noteService {
  constructor() {
    this.axiosService = new axiosService();
  }

  addNote(data) {
    let url = baseURL + "notes/addNotes";
    return this.axiosService.post(url, data, true, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  displayNote(){
    let url = baseURL + "notes/getNotesList";
    return this.axiosService.get(url, true, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new noteService();
