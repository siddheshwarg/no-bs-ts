interface Coordinates {
  x: number;
  y: number;
}
function parseCoordinate(str: string): Coordinates;
function parseCoordinate(obj: Coordinates): Coordinates;
function parseCoordinate(x: number, y: number): Coordinates;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinates {
  let coord: Coordinates = {
    x: 0,
    y: 0,
  };
  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinates),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate("x:12,y:22"));
