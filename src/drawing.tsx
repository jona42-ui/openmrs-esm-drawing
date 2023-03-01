import React from "react";
import ReactDOM from "react-dom";
import { drawOnBody } from "./drawingCanvas";

const Drawing: React.FC = () => {
  React.useEffect(() => {
    drawOnBody();
  }, []);

  return <div id="drawing-canvas" />;
};

ReactDOM.render(<Drawing />, document.getElementById("root"));
