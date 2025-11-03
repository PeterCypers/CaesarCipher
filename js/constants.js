export const ALPHA_UPPER = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
export const ALPHA_LOWER = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

const encodeToggle = document.getElementById("encodeToggle");
const encodeContainer = document.getElementById("encodeContainer");
const decodeContainer = document.getElementById("decodeContainer");
const encodeForm = document.getElementById("encodeForm");
const encodeTextArea = document.getElementById("encodeArea");
const encRot = document.getElementById("encodeRotations");
const encRes = document.getElementById("encodeResult");
const encText = document.getElementById("encodedText");
const decodeForm = document.getElementById("decodeForm");
const decodeTextArea = document.getElementById("decodeArea");
const decRot = document.getElementById("decodeRotations");
const decRes = document.getElementById("decodeResult");
const decText = document.getElementById("decodedText");
const minusBtn = document.getElementById("minusone_btn");
const plusBtn = document.getElementById("plusone_btn");

export { encodeToggle, encodeContainer, decodeContainer, encodeForm,
  encodeTextArea, encRot, encRes, encText, decodeForm, decodeTextArea,
  decRot, decRes, decText, minusBtn, plusBtn
}