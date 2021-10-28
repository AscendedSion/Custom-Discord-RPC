var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Details Here",
assets : {
large_image : "image",
large_text : "PlayingStatus" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "hi" , url : "spanner.com"},{label : "hello again",url : "example.com"}]
}
})
})
client.login({ clientId : "appid" }).catch(console.error);
