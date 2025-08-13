export function trancateText(text, length) {
  if (text < length) return text;
  else {
    return text.slice(0, length) + "...";
  }
}
