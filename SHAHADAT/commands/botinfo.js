module.exports.config = {
 name: "botinfo",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU",
 description: "Advanced Bot Information",
 commandCategory: "system",
 cooldowns: 10,
 usePrefix: true
};

module.exports.run = async function ({ api, event }) {

 const request = require("request");
 const fs = require("fs-extra");
 const moment = require("moment-timezone");
 const os = require("os");

 const conf = global.config || {};

 const botName = conf.BOTNAME || "SHiLa BOT";
 const ownerName = conf.AuthorName || "Tmk Valobashi Na";
 const prefix = conf.PREFIX || "/";

 const uptime = process.uptime();
 const hours = Math.floor(uptime / 3600);
 const minutes = Math.floor((uptime % 3600) / 60);
 const seconds = Math.floor(uptime % 60);

 const totalUsers = global.data.allUserID.length || 0;
 const totalThreads = global.data.allThreadID.length || 0;

 const memoryUsage = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
 const nodeVersion = process.version;
 const platform = os.platform();

 const timeNow = moment.tz("Asia/Dhaka").format("DD/MM/YYYY • HH:mm:ss");

 const startTime = Date.now();

 api.sendMessage("⏳ Checking bot status...", event.threadID, async (err, info) => {

 const ping = Date.now() - startTime;

 const body = `This is ${botName} ✅ 
 
🤖 BOT NAME : ${botName} 
🔰 PREFIX : ${prefix} 
📦 VERSION : ${module.exports.config.version} 
 
⏳ UPTIME : ${hours}h ${minutes}m ${seconds}s 
⚡ PING : ${ping}ms 
💾 RAM : ${memoryUsage} MB 
🖥 PLATFORM : ${platform} 
🟢 NODE JS : ${nodeVersion} 
 
👥 TOTAL USERS : ${totalUsers} 
💬 TOTAL GROUPS : ${totalThreads} 
 
📅 TIME : ${timeNow} 
✅ STATUS : Running Successfully 
 
👑 OWNER : ${ownerName}`;

 const imageUrl = "https://i.imgur.com/gSW285Z.gif";

 const cacheDir = __dirname + "/cache";
 const filePath = cacheDir + "/botinfo.gif";

 if (!fs.existsSync(cacheDir)) {
 fs.mkdirSync(cacheDir, { recursive: true });
 }

 request(encodeURI(imageUrl))
 .pipe(fs.createWriteStream(filePath))
 .on("close", () => {

 api.sendMessage(
 {
 body,
 attachment: fs.createReadStream(filePath)
 },
 event.threadID,
 () => {
 if (info && info.messageID) {
 api.unsendMessage(info.messageID);
 }
 fs.unlinkSync(filePath);
 }
 );

 })
 .on("error", () => {
 api.sendMessage(body, event.threadID, () => {
 if (info && info.messageID) {
 api.unsendMessage(info.messageID);
 }
 });
 });

 });
};
