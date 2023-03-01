import "@testing-library/jest-dom/extend-expect";


import React from "react";
import { render, cleanup } from "@testing-library/react"
import DrawingCanvas from "./components/drawingCanvas/drawingCanvas.component";

describe(`<Drawing />`, () => {
  afterEach(cleanup);
  it(`renders without dying`, () => {
    render(<DrawingCanvas />);
  });
});
