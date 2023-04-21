// Connect to server using WebSocket
const ws = new WebSocket("ws:enos.itcollege.ee/~mgoroz/edukoht:3000");

// Listen for incoming messages
ws.onmessage = function(event) {
	const message = event.data;
	addMessageToList(message);
};

// Add a message to the list
function addMessageToList(message) {
	const messageList = document.getElementById("message-list");
	const li = document.createElement("li");
	li.innerText = message;
	messageList.appendChild(li);
}
