var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "SION Is Taking Over.",
assets : {
large_image : "image",
large_text : "This Is The New Reality." // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Join Us" , url : "https://discord.gg/TTYaHnWFHf"},{label : "My Youtube",url : "https://www.youtube.com/channel/UCm2kE8GHM_vJDeW2f9Tfbzw"}]
}
})
})
client.login({ clientId : "appid" }).catch(console.error);
