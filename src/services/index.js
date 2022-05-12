import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
});

export default class Service {
  async login(body) {
    const response = await api.post("login", body);
    return response.data;
  }

  async validToken(token, callback) {
    const response = await api.get("auth", {
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
