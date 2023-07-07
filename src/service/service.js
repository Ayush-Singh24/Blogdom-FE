import { ApiRoutes } from "@/utils/constants";

async function makePostRequest(url, data) {
  const response = await fetch(`http://localhost:5000${url}`, {
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

export class Service {
  static async signUp(data) {
    return await makePostRequest(ApiRoutes.UserSignUp, data);
  }
  static async login(data) {
    return await makePostRequest(ApiRoutes.UserLogin, data);
  }
}
