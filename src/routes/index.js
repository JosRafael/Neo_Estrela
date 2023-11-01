import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

import App from "./app.routes";
import Auth from "./auth.routes";
import Pro from "./pro.routes";

import Loading from "../components/Loading";

export default function Index() {
  const { user, logged, loading } = useContext(AuthContext);

  if (!loading) {
    if (user && logged) {
      if (user.pro === 1) {
        return <Pro />;
      } else {
        return <App />;
      }
    } else {
      return <Auth />;
    }
  }

  return <Loading />;
}
