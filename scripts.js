
const callbackOrigin = new URLSearchParams(window.location.search).get("callback")

document.querySelector("#content").textContent = `r u sure u want to go to ${callbackOrigin}`



function handleYes() {
    window.localStorage.setItem(`@r-u-sure#${callbackOrigin}`, 1)
//   window.location.href = callbackOrigin

}

function handleNo() {
  window.close();
}