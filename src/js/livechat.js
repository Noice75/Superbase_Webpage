import supabase from "../utils/initialize.js";
import { user } from "../utils/user.js";

console.log("DOM fully loaded and parsed");
fetch_live();

const messageInput = document.getElementById("message");
const sendMessageButton = document.getElementById("send-button");
const chatbox = document.getElementById("chatbox");

// Function to handle sending messages
async function handleSendMessage() {
  const messageText = messageInput.value.trim();
  console.log("Attempting to send message:", messageText);

  if (messageText) {
    try {
      const { data, error } = await supabase.rpc("insert_message", {
        user_id: user.id,
        message_text: messageText,
      });

      if (error) {
        console.error("Error sending message:", error);
      } else {
        messageInput.value = ""; // Clear input field after successful message send
        console.log("Message sent successfully:", data);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  } else {
    alert("Message cannot be empty.");
  }
}

// Initialize Supabase real-time subscription
supabase
  .channel("public:messages")
  .on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "messages",
    },
    (payload) => {
      console.log("New message received:", payload.new);
      // Display the message with the username
      displayMessage(payload.new);
    }
  )
  .subscribe();

// Function to display a new message in the chatbox
function displayMessage(data) {
  console.log(data);
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = `${data.username}: ${data.message}`; // Include username in the display
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the latest message
}

async function fetch_live() {
  try {
    const { data, error } = await supabase.rpc("fetch_live", {});
    if (error) {
      console.error("Error sending message:", error);
    } else {
      console.log("Fetch Live:", data);
    }
    for (let j = 0; j < Object.keys(data).length; j++) {
      displayMessage(data[j]);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

sendMessageButton.addEventListener("click", handleSendMessage);

// Optional: Add "Enter" key press event for message sending
messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSendMessage();
  }
});
