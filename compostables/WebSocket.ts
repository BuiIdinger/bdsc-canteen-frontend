import { ref } from "vue"
import { LoadingScreen } from "~/compostables/LoadingScreen"
import { Log } from "~/compostables/Log"

export namespace WebSocket {
  export const connection = ref();
  export const messageQueue: Array<string> = [];

  export const connect = (): void => {
    connection.value = new window.WebSocket("ws://localhost");

    connection.value.onopen = (event: any) => {
      LoadingScreen.visible.value = false;

      // Send the message queue
      messageQueue.forEach((message) => {
        WebSocket.send(message);
      });

      Log.info("WebSocket connected");
    };
  
    connection.value.onerror = (error: any) => {
      console.error("WebSocket error:", error);
    };
  
    connection.value.onclose = (event: any) => {
      console.log("WebSocket connection closed:", event);
    };
  
    connection.value.onmessage = (event: any) => {
      console.log("Message from server:", event.data);
    };
  }

  export const send = (message: Object): void => {
    if (!connection.value) {
      messageQueue.push(JSON.stringify(message));
      return;
    }

    connection.value.send(JSON.stringify(message));
  }


} // namespace WebSocket