import { store } from "./auth.service";

export default function authHeader() {
  const Token = JSON.parse(store.getItem("Token"));

  if (Token && Token) {
    return { Authorization: "Bearer " + Token };
  } else {
    return {};
  }
}
