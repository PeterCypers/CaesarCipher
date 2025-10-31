import { encode } from "./encode.js";
import { decode } from "./decode.js";

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

function switchViews(isDecoding) {
  // Encode
  if(!isDecoding) {
    decodeContainer.classList.add("hidden");
    encodeContainer.classList.remove("hidden");
  }
  // Decode
  if(isDecoding){
    encodeContainer.classList.add("hidden");
    decodeContainer.classList.remove("hidden");
  }
}


function init() {
  encodeToggle.onchange = () => {
    switchViews(encodeToggle.checked);
  };

  encodeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = Number(encRot.value || 0);
    if (val < 0 || val > 25) {
      alert("Please pick a number in range [1-25]");
      return;
    }
    // don't use innerText or innerHTML
    // Always use .value for form elements (<input>, <textarea>, <select>).
    const encodeMessage = encodeTextArea.value;
    encRes.classList.remove("hidden");
    encText.innerText = encode(encodeMessage, val);
  });

    decodeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = Number(decRot.value || 0);
    if (val < 0 || val > 25) {
      alert("Please pick a number in range [1-25]");
      return;
    }
    const decodeMessage = decodeTextArea.value;
    decRes.classList.remove("hidden");
    decText.innerText = decode(decodeMessage, val);
  });

  encText.onclick = () => {
    navigator.clipboard.writeText(encText.innerText);
  };

  decText.onclick = () => {
    navigator.clipboard.writeText(decText.innerText);
  };
}

window.onload = init;