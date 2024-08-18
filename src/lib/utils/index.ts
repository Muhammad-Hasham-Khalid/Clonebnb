export function takeFirst<T>(arr: T[]): T | undefined {
  return arr.at(0);
}

export function takeLast<T>(arr: T[]): T | undefined {
  return arr.at(-1);
}
