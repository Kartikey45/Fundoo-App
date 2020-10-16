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

  displayNote() {
    let url = baseURL + "notes/getNotesList";
    return this.axiosService.get(url, true, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  trashNote(data) {
    let url = baseURL + "notes/trashNotes";
    return this.axiosService.post(url, data, true, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  archieveNote(data){
    let url = baseURL + "notes/archiveNotes";
    return this.axiosService.post(url, data, true, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateNote(data) {
    let url = baseURL + "notes/updateNotes";
    return this.axiosService.post(url, data, true, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateColor(data) {
    let url = baseURL + "notes/changesColorNotes";
    return this.axiosService.post(url, data, true, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new noteService();
