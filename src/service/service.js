import { ApiRoutes } from "@/utils/constants";
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

async function makePostRequest(url, data, signal) {
  const response = await fetch(
    `${BACKEND_URL}${url}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    },
    { signal }
  );
  const json = await response.json();
  return {
    status: response.status,
    ...json,
  };
}

async function makeGetRequest(url, signal) {
  const response = await fetch(
    BACKEND_URL + url,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
    { signal }
  );

  const json = await response.json();
  return {
    status: response.status,
    ...json,
  };
}

export class Service {
  static async signUp(data, signal) {
    return await makePostRequest(ApiRoutes.UserSignUp, data, signal);
  }
  static async login(data, signal) {
    return await makePostRequest(ApiRoutes.UserLogin, data, signal);
  }
  static async verifyToken(signal) {
    return await makeGetRequest(ApiRoutes.VerifyToken, signal);
  }
  static async allBlogs(signal) {
    return await makeGetRequest(ApiRoutes.AllBlogs, signal);
  }
  static async getBlog(url, signal) {
    return await makeGetRequest(ApiRoutes.Blog + url);
  }
  static async postBlog(data, signal) {
    return await makePostRequest(ApiRoutes.PostBlog, data, signal);
  }
  static async getUserBlogs(signal) {
    return await makeGetRequest(ApiRoutes.UserBlogs, signal);
  }
}
