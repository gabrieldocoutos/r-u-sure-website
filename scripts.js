
const callbackOrigin = new URLSearchParams(window.location.search).get("callback")

document.querySelector("#content").textContent = `r u sure u want to go to ${callbackOrigin}`





function handleYes() {
    const channel = new BroadcastChannel('my_bus');

// Send a message on "my_bus".
channel.postMessage('This is a test message.');
channel.close();

  window.location.href = callbackOrigin
  channel.close();

}

function handleNo() {
  window.close();
}