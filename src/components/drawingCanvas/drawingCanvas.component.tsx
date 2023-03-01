import React, { useState } from "react";
import { fabric } from "fabric";
import { TextInput, TextArea, Checkbox, Select } from "carbon-components-react";
import "./drawingCanvas.css";

const DrawingCanvas = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [patient, setPatient] = useState<string>("");
  const [showGrid, setShowGrid] = useState<boolean>(false);

  const handleCreateDrawing = () => {
    if (canvas) {
      const svgData = canvas.toSVG();
      // Serialize the drawing data and save it to the server
      console.log("Serialized SVG data: ", svgData);
    }
  };

  const handleCanvasInit = (element: HTMLCanvasElement) => {
    const newCanvas = new fabric.Canvas(element, {
      isDrawingMode: true,
      width: 800,
      height: 600,
      backgroundColor: "#fff",
    });
    setCanvas(newCanvas);
    // Add grid to the canvas
    if (showGrid) {
      const gridSize = 10;
      const grid = new fabric.Grid({
        gridOnTop: true,
        stroke: "#ccc",
        strokeWidth: 0.5,
        width: newCanvas.width,
        height: newCanvas.height,
        gridSize,
      });
      newCanvas.add(grid);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handlePatientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPatient(event.target.value);
  };

  const handleShowGridChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowGrid(event.target.checked);
  };

  return (
    <div className="drawing-canvas">
      <canvas ref={(c) => handleCanvasInit(c as HTMLCanvasElement)} />
      <div className="drawing-canvas-controls">
        <div className="drawing-canvas-fields">
          <TextInput
            id="drawing-title"
            labelText="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <TextArea
            id="drawing-description"
            labelText="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <Select
            id="drawing-patient"
            labelText="Patient"
            onChange={handlePatientChange}
            value={patient}
            defaultText="Select a patient"
            className="drawing-canvas-select"
          >
            <option value="1">Patient 1</option>
            <option value="2">Patient 2</option>
            <option value="3">Patient 3</option>
          </Select>
          <Checkbox
            id="drawing-show-grid"
            labelText="Show grid"
            checked={showGrid}
            onChange={handleShowGridChange}
          />
        </div>
        <button
          className="drawing-canvas-create-btn"
          onClick={handleCreateDrawing}
        >
          Create Drawing
        </button>
      </div>
    </div>
  );
};

export default DrawingCanvas;
