import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export default class Service {

  getBaseURL(){
    return api.getUri();
  }

  async login(body) {
    const response = await api.post("/login", body);
    return response.data;
  }

  async listUsers() {
    const response = await api.get("/user-list");

    return response;
  }

  async registerUser(requestingId, body, headers){
    const response = await api.post(`/user-create/${requestingId}`, body, { headers: headers });
    return response;
  }

  async editUser(requestingId, targetId, body, headers) {
    const response = await api.patch(`/user-update/${requestingId}/${targetId}`, body, { headers: headers });
    return response;
  }

  async deleteUser(requestingId, targetId, headers){
    const response = await api.delete(`/delete-user/${requestingId}/${targetId}`, { headers: headers })
    return response;
  }

  async validToken(token, callback) {
    const response = await api.get("/auth", {
      headers: {
        accessToken: token,
      },
    });
    const data = response.data;

    if (data.hasOwnProperty("error")) {
      callback();
      return false;
    } else {
      return true;
    }
  }
}
