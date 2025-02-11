const randomPassword = (length: number = 32): string => {
  let n = "";
  let t =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789![]{}()%&*$#^<>~@|";
  for (let i = 0; i < length; i++)
    n += t.charAt(Math.floor(Math.random() * t.length));
  return n;
};

function getRandomColor() {
  let r = Math.floor(Math.random() * 128) + 128;
  let g = Math.floor(Math.random() * 128) + 128;
  let b = Math.floor(Math.random() * 128) + 128;

  let hexR = r.toString(16).padStart(2, "0");
  let hexG = g.toString(16).padStart(2, "0");
  let hexB = b.toString(16).padStart(2, "0");

  let backgroundColor = `#${hexR}${hexG}${hexB}`;

  let darkenFactor = 0.6;
  let textColorR = Math.floor(r * darkenFactor)
    .toString(16)
    .padStart(2, "0");
  let textColorG = Math.floor(g * darkenFactor)
    .toString(16)
    .padStart(2, "0");
  let textColorB = Math.floor(b * darkenFactor)
    .toString(16)
    .padStart(2, "0");
  let textColor = `#${textColorR}${textColorG}${textColorB}`;

  return {
    backgroundColor,
    color: textColor,
  };
}

function extractInitials(name: string) {
  const words = name.toUpperCase().split(" ");

  if (words.length === 1) {
    return words[0].slice(0, 2);
  } else if (words.length >= 2) {
    return words[0][0] + words[1][0];
  }
}

export { randomPassword, getRandomColor, extractInitials };
