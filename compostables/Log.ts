import { WebSocket } from "~/compostables/WebSocket"

export namespace Log {
  export const info = (message: string): void => {
    const now: Date = new Date();
    const output = "[INFORMATION] " + now.toString() + " " + message;
    console.info(output);
  }

  export const warn = (message: string): void => {
    const now: Date = new Date();
    const output = "[WARNING] " + now.toString() + " " + message;
    console.warn(output);
    WebSocket.send(message);
  }

  export const error = (message: string): void => {
    const now: Date = new Date();
    const output = "[ERROR] " + now.toString() + "" + message;
    console.error(output);
    WebSocket.send(message);
  }
} // namespace Log