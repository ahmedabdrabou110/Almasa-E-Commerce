import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<PayPalScriptProvider options={{
    "client-id":"AWLgD3RMaAuz7QyMqzujICXP3u0rmaXEwNroqIGQcGQYVpqE_tx3zXTN5PeBj_mvbWxPFMf7ZBd_Gmqt"
}}>
    <App />
</PayPalScriptProvider>)