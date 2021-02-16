import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./php/admin.php";
import "./php/connections.php";
import "./php/server.php";
import "./php/addDummyEmails.php";
import "./css/styles.scss";


render(<App />, document.getElementById("root"));
