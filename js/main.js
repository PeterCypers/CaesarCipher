import { encode } from "./encode.js";
import { decode } from "./decode.js";

import { encodeToggle, encodeContainer, decodeContainer, encodeForm,
  encodeTextArea, encRot, encRes, encText, decodeForm, decodeTextArea,
  decRot, decRes, decText, minusBtn, plusBtn
} from "./constants.js";

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
    minusBtn.classList.remove("hidden");
    plusBtn.classList.remove("hidden");
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

  // no checks needed for these buttons, invalid values handled in the form-control
  minusBtn.onclick = () => {
    const val = Number(encRot.value || 0);
    encRot.value = val -1;
  };

  plusBtn.onclick = () => {
    const val = Number(encRot.value || 0);
    encRot.value = val +1;
  }

  encText.onclick = () => {
    navigator.clipboard.writeText(encText.innerText);
  };

  decText.onclick = () => {
    navigator.clipboard.writeText(decText.innerText);
  };
}

window.onload = init;