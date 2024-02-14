export function add(a: number, b: number): number {
  return a + b;
}
export const test = (x: number, y: number) => {
  if (typeof x !== "number" || typeof y !== "number") {
    x = Number(x);
    y = Number(y);
  }
  if (x >= 100) {
    x = x / 2;
  }
  return x + y;
};

export const sub = (x: number, y: number): number => {
  return x - y;
};
export const mul = (add: number, sub: number) => {
  return add * sub;
};
export const nextInteger = (x: number): number => {
  return x + 1;
};
export const firstElement = (arr: Array<number>) => {
  return arr[0];
};
export const wordmatch = (arr: Array<string>, findstr: string) => {
  return arr.includes(findstr);
};
export const concat = (arr: Array<string>) => {
  return arr.join();
};
