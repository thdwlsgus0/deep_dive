function Circle(radius) {
  if (!(this instanceof Circle)) {
    return new Circle(radius);
  }
}
