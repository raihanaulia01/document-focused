/* eslint-disable require-jsdoc */
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        // runApp();
    }
});

const lockedText = document.querySelector(".locked-text");
const resetLockButton = document.querySelector(".reset-lock-btn");
let pageLocked = false;

function onVisibilityChange() {
    if (document.visibilityState === "visible") {
        if (!pageLocked) {
            lockedText.innerHTML = "Not Locked";
            lockedText.classList.remove("red");
        }
    } else {
        pageLocked = true;
        lockedText.innerHTML = "Page Locked!";
        lockedText.classList.add("red");
    }
}

document.addEventListener("visibilitychange", onVisibilityChange);

resetLockButton.addEventListener("click", () => {
    pageLocked = false;
    lockedText.innerHTML = "Not Locked";
    lockedText.classList.remove("red");
});
