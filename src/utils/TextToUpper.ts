export function TextToUpper(text: string) {
  var words = text.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    words[i] = w[0].toUpperCase() + w.slice(1);
  }

  return words.join(" ");
}
