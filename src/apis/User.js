import { env } from "./enviorinment";
import axios from "axios";

const baseurl = `${env.HOST}/accounts`;
const TOKEN_NAME = "_u_t";

// Get Token
function getToken() {
  return localStorage.getItem(TOKEN_NAME);
}
// Remove Token
export function clearToken() {
  return localStorage.removeItem(TOKEN_NAME);
}

// Set authentication Token
export function setToken(token) {
  localStorage.setItem(TOKEN_NAME, token);
}

// Checks if user is Logged In
export const isLoggedIn = () => {
  if (getToken()) {
    return true;
  }
  return false;
};

// returns the user instance
export const getUser = () => {
  return fetch(`${baseurl}/get-user`, {
    method: "get",
    headers: {
      "x-auth-token": getToken(),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

// Register a new User
export const register = (name, email, password, ref) => {
  let body;
  //   let ref = localStorage.getItem("ref");
  if (ref !== "" && ref !== null && ref !== undefined) {
    console.log(ref);
    body = JSON.stringify({ name, email, password, ref });
  } else {
    body = JSON.stringify({ name, email, password });
  }
  return fetch(`${baseurl}/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

// Login a User
export const login = (email, password) => {
  return fetch(`${baseurl}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

// Verify Mail
export const verifyMail = (phrase) => {
  return fetch(`${baseurl}/verify-mail`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phrase }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

export const forgetPassword = () => {};

export const changePassword = () => {};

export const resendMail = (userid) => {
  axios.post(`${baseurl}/resend-mail`, userid);
};
