function calculateRectangleArea(length, width) {
  let rectanglearea = length * width;
  return rectanglearea;
}

function calculateTriangleArea(base, height) {
  let trianglearea = base * height / 2;
  return trianglearea;
}

function calculateCircleArea(radius) {
  if (radius >= 0) {
    let circlearea = Math.PI * radius * radius;
    return circlearea;
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateTriangleArea(1.5, 2.5));
console.log(calculateCircleArea(1.5, 2.5));