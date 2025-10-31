import { ALPHA_LOWER, ALPHA_UPPER } from "./constants.js";

export function decode(text, rotation) {
  // alert(`Decoding --- Text: ${text} & rotation: ${rotation}`); //test
  let decoded = '';
  // reverse() mutates (reverses array in-place, modifying the original)
  const REVERSE_LOWER = [...ALPHA_LOWER].reverse(); // 1st method: spread shallow copy
  const REVERSE_UPPER = ALPHA_UPPER.slice().reverse(); // 2nd method: slice shallow copy

  [...text].forEach((letter) => {
    // uppercase
    if(ALPHA_UPPER.includes(letter)){
      const indexUpper = REVERSE_UPPER.indexOf(letter);
      decoded += REVERSE_UPPER[(indexUpper + rotation) % 26];


      //lowercase
    }else if(ALPHA_LOWER.includes(letter)) {
      const indexLower = REVERSE_LOWER.indexOf(letter);
      decoded += REVERSE_LOWER[(indexLower + rotation) % 26];
    } else {
      decoded += letter;
    }
  });

  return decoded;
}