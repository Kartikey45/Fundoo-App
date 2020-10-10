import axios from "axios";
//const axios = require('axios').default;

export default function axiosService() {}

// axiosService.prototype.post = function (url, data) {
//   return axios.post(url, data);
// };

axiosService.prototype.post = function (url, data, isHeaderRequire=false, header) {
  // return axios.post(url, data, {
  //   headers: {
  //     Authorization: localStorage.getItem("token"),
  //   },
  // });
  return axios.post(url, data, isHeaderRequire && header);
};

axiosService.prototype.get = function (url, isHeaderRequire=false, header){
  return axios.get(url, isHeaderRequire && header);
}

axiosService.prototype.delete = function (url, data, isHeaderRequire=false, header){
  return axios.get(url, data, isHeaderRequire && header);
}