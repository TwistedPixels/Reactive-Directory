import axios from "axios";
// import userData from "../json/userData.json";

export default {
  // Gets all users
  getUsers: function() {
    // return axios.get("https://jsonplaceholder.typicode.com/users");
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
//  let users = userData;
//   console.log(users)
//     return users;
  }
};
