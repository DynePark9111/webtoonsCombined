export function capitalize(word: string | undefined | string[]) {
  if (typeof word === "string") {
    return word[0].toUpperCase() + word.slice(1);
  }
  return undefined;
}
