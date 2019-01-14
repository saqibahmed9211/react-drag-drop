import * as React from "react";
import * as ReactDom from "react-dom";
import {HelloComponent} from "./component/hello";

ReactDom.render(
    <HelloComponent/>,
    document.getElementById("root")
)