import {Client} from '@stomp/stompjs';
import {WebSocket} from 'ws'

Object.assign(global, {WebSocket})


const client:any = new Client({
    brokerURL: 'localhost:8080/websocket',
    connectHeaders: {
        Authorization: `Bearer ${}`
    },
    onConnect: () => {
        client.subscribe('/topic/user/604/address', (message: { body: any; }) => 
        console.log(`recieved ${message.body}`))
        client.publish({destination: 'topic', body: 'big message'})
    },
    onStompError: () => {
        console.log('broker error!!!!')
    }
    
})
export default client
