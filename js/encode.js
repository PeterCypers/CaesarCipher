import { ALPHA_LOWER, ALPHA_UPPER } from "./constants.js";

export function encode(text, rotation) {
  // alert(`Encoding --- Text: ${text} & rotation: ${rotation} ${ALPHA_UPPER}`); //test
  let encoded = '';

  [...text].forEach((letter) => {
    // uppercase
    if(ALPHA_UPPER.includes(letter)){
      const indexUpper = ALPHA_UPPER.indexOf(letter);
      encoded += ALPHA_UPPER[(indexUpper + rotation) % 26];


      //lowercase
    }else if(ALPHA_LOWER.includes(letter)) {
      const indexLower = ALPHA_LOWER.indexOf(letter);
      encoded += ALPHA_LOWER[(indexLower + rotation) % 26];
    } else {
      encoded += letter;
    }
  });

  return encoded;
}