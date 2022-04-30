// first we need to create a stage
var stage = new Konva.Stage({
  container: "editor", // id of editor <div>
  width: 500,
  height: 500,
  
});

// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

var triangle = new Konva.Shape({
  sceneFunc: function (context) {
    context.beginPath();
    context.moveTo(20, 50);
    context.lineTo(220, 80);
    context.quadraticCurveTo(150, 100, 260, 170);
    context.closePath();

    // special Konva.js method
    context.fillStrokeShape(this);
  },
  fill: "#00D2FF",
  stroke: "black",
  strokeWidth: 4,
});

// or new shorter method:
circle.to({
  duration: 1,
  fill: "green",
  x: 140,
  rotation: Math.PI * 2,
  opacity: 1,
  strokeWidth: 6,
});

triangle.draggable(true);

// add the shape to the layer
layer.add(circle);

layer.add(triangle);
// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();


