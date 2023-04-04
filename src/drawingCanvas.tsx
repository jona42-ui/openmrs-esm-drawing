import { fabric } from "fabric";

export function drawOnBody() {
  const canvas = document.createElement("canvas");
  canvas.id = "drawing-canvas";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";

  document.body.appendChild(canvas);

  const canvasObject = new fabric.Canvas("drawing-canvas", {
    isDrawingMode: true,
  });

  canvasObject.freeDrawingBrush.color = "black";
  canvasObject.freeDrawingBrush.width = 2;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasObject.renderAll();
  });
}
