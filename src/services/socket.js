import socketIOClient from "socket.io-client";
const serverEndpoint = "https://kryptonguy.me";
export const socket = socketIOClient(serverEndpoint, {
    transports: ['websocket']
});