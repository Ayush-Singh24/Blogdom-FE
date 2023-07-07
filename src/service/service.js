import { ApiRoutes } from "@/utils/constants";
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";
async function makePostRequest(url, data) {
  const response = await fetch(`${BACKEND_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  const json = await response.json();
  return {
    status: response.status,
    ...json,
  };
}

async function makeGetRequest(url) {
  const response = await fetch(BACKEND_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const json = await response.json();
  return {
    status: response.status,
    ...json,
  };
}

export class Service {
  static async signUp(data) {
    return await makePostRequest(ApiRoutes.UserSignUp, data);
  }
  static async login(data) {
    return await makePostRequest(ApiRoutes.UserLogin, data);
  }
  static async verifyToken() {
    return await makeGetRequest(ApiRoutes.VerifyToken);
  }
}
