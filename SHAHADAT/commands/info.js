const os = require("os");
const moment = require("moment-timezone");
const fs = require("fs-extra");
const axios = require("axios");

module.exports.config = {
 name: "info",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU",
 description: "Advanced Bot Information",
 commandCategory: "system",
 usages: "",
 cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
 try {
 const { threadID } = event;
 
 let threadPrefix = global.config.PREFIX;
 try {
 if (global.data && global.data.threadData && global.data.threadData.get) {
 const threadData = global.data.threadData.get(String(threadID));
 if (threadData && threadData.PREFIX) threadPrefix = threadData.PREFIX;
 }
 } catch (e) {}

 const { commands, events } = global.client;
 const globalPrefix = global.config.PREFIX || "/";
 const botName = global.config.BOTNAME || "SHiLa BOT";
 const ownerName = global.config.AuthorName || "Tmk valobashi Na";
 const ownerUID = (global.config.ADMINBOT || [])[0] || "N/A";
 const authorImg = global.config.AuthorImgur || global.config.AnthorPhoto|| null;

 const uptime = process.uptime();
 const hours = Math.floor(uptime / 3600);
 const minutes = Math.floor((uptime % 3600) / 60);
 const seconds = Math.floor(uptime % 60);

 let ping = "N/A";
 try {
 if (event.timestamp) ping = Date.now() - event.timestamp;
 } catch (e) {}

 let totalUsers = 0;
 let totalThreads = 0;
 try {
 if (global.data && global.data.allUserID) totalUsers = global.data.allUserID.length;
 if (global.data && global.data.allThreadID) totalThreads = global.data.allThreadID.length;
 } catch (e) {}

 const memoryUsage = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
 const totalMemory = (os.totalmem() / 1024 / 1024).toFixed(0);
 const now = moment().tz("Asia/Dhaka");

 const msg = `╔═══════════════════════╗
║ 🌟 BOT INFORMATION 🌟
╠═══════════════════════╣
║ 🤖 Bot Name : ${botName}
║ 👑 Owner Name : ${ownerName}
║ 🏷 Thread Prefix : ${threadPrefix}
║ 📦 Total Commands : ${commands ? commands.size : 0}
║ 🧩 Total Events : ${events ? events.size : 0}
║ 🛡 Bot Admin Count : ${(global.config.ADMINBOT || []).length}
║ 🏓 Ping : ${ping}ms
║
║ 💻 Platform : ${os.platform()}
║ 🧠 Node Version : ${process.version}
║ 🗂 CPU Architecture : ${os.arch()}
║ 📡 Memory Usage : ${memoryUsage}MB / ${totalMemory}MB
║ 🧮 Process ID : ${process.pid}
║
║ 👥 Total Users : ${totalUsers}
║ 👥 Total Groups : ${totalThreads}
║ ⏳ Uptime : ${hours}h ${minutes}m ${seconds}s
║ 📆 Date : ${now.format("DD/MM/YYYY")}
║ 🕒 Time : ${now.format("HH:mm:ss")}
║ 🌍 Timezone : Asia/Dhaka
║
║ Status : Bot Online & Running
╚═══════════════════════╝`;

 if (!authorImg) return api.sendMessage(msg, threadID);

 const imgPath = __dirname + "/cache/authorinfo.jpg";
 
 try {
 const response = await axios({
 method: 'GET',
 url: authorImg,
 responseType: 'arraybuffer',
 timeout: 15000,
 headers: {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
 }
 });

 fs.writeFileSync(imgPath, Buffer.from(response.data, 'binary'));

 api.sendMessage(
 {
 body: msg,
 attachment: fs.createReadStream(imgPath)
 },
 threadID,
 () => {
 try { fs.unlinkSync(imgPath); } catch (e) {}
 }
 );

 } catch (imgError) {
 api.sendMessage(msg, threadID);
 }

 } catch (error) {
 api.sendMessage("Error call boss SAHU", event.threadID);
 }
};
