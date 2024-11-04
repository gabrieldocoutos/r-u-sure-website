
const callbackOrigin = new URLSearchParams(window.location.search).get("callback")

document.querySelector("#content").textContent = `r u sure u want to go to ${callbackOrigin}`





function handleYes() {
    window.location.href = `${callbackOrigin}?rusure=allow`;
}

function handleNo() {
  window.close();
}