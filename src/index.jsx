import React from "react";
import ReactDOM from "react-dom/client";
import Dasawyisi from "./dasawyisi.js";
import Navbari from "./navbari.js";
import Mtavarinawili from "./mtavari-nawili.js";

class App extends React.Component {
    render() {
        return (
            <>
                <Dasawyisi />
                <Navbari />
                <Mtavarinawili />
            </>
        );
    }
}

var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />);
