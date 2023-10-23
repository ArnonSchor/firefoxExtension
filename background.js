// background.js

function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
  sendDataToServer(requestDetails);
}

function sendDataToServer(requestDetails) {
  const serverEndpoint = "http://localhost:3002/api/data";

  fetch(serverEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestDetails),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error during fetch operation:", error));
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  { urls: ["https://www.google.com/search*"] },
  ["blocking"]
);
