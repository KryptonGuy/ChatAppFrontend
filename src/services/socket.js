import socketIOClient from "socket.io-client";
const serverEndpoint = "http://kryptonguy.me:8080";
export const socket = socketIOClient(serverEndpoint, {
    transports: ['websocket']
});