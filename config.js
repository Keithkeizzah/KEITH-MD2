//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "keizzakeith@gmail.com";
global.location = "Migori.Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Keithkeizzah/KEITH-MD2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8f30391e98707c9344db0.jpg";
global.devs = "254748387615";
global.sudo = process.env.SUDO || "254748387615";
global.owner = process.env.OWNER_NUMBER || "254748387615";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://keithweb-85c830c44249.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR08rNjRUdDVrYUtvM1FyN2NDWDhOVEhTbkNUZ0hHNlFxanBiYzBqc0MwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVdySDlvZFdFbGlHazRKQ0QvUWZQZ2lmeVR3VWxIYmJDQWRLRUpOLzJodz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR2xDUFFNb0xHU0p6blo4NXNWU0Q5SitwSzZET21EaGpLSVpBQXpuUDBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRDR6ejNOQkZnZUF0QVBScUREOTZRMnFLMXY5Qi9WY21LckhhVVkzeFV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHZVIwMG5IckJYZW04R0N1UlU2T3BSa1k2MEVaUDNWWkNzc3ErdFgyR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxtSFJMMk4yTUs2dGMva3Z2VlovQ0h3WTNPelZLWUR1WlhyUUtEd3E5a289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURkamVrdnNVb3NWZlpsSmZSN2QyM3FVaFJEWmdwUnpnRytZQnpEQUZGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVZQcnREMDBsTldaM2M1bWJiVnZLTk4vd3QvRjZGNkRmWTcvYkVjWlh6WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRVNWprSml4QzllMU1iMmpRdEFKaWdKSVhUZU1DNEc0Z2dmYXMzbXMxSlR4NXU0eE1zbjRJUTJhYk5FRWNwbG1ubHAwYTlwdnFYTWVuY2phZDFveWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6IkY2OFlRL3dpN1BSU0x2dG9LMmFiNDBBcHZ6M25OZmE3TmVSdXBUZldWSWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ild1Tk1xRmVUUlRDQkJ3a29ISDBiUEEiLCJwaG9uZUlkIjoiNGJlMzk5OTEtZGM1NS00NGY3LTg3NDMtMzM1ZjRmZDI4YWQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5KaEFqTE1qbHp4b0p2dlloQnp6RGZUbE9OST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1d2JZOWpMYkpiOEVwYVZHQkN3Qis0U2tBdjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRExUTk5MQjUiLCJtZSI6eyJpZCI6IjI1NDcyMDI1NDc5Nzo2MEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGZqNHJrRUVMaWFuN1VHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK1RXMUY4NWxJZ0ZCZHpCbXNwUFFBclNJZ0tlZk9veURjMlNPQmtLTHlTYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicWR3dld5MU5BK25kTXBQblZvODdyV0x3N3hkMGZmbnhYeEhDT0lzSVVZclFTa3ZuOUNielltYkpScGFXOSt3ZFVQUTc2bWhoaGJNaWpUek9RNE1pQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjFNK1M0ZEZueTE5WHRWSWZsU3ZGRytoaUltamtwUTRZL2ZIcTMzelJOamVwZG5xL2xZeUR6NHRJbmdpMUxYN1ZGKzF4WEZZa004cTBDbDlHa3R6QWdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzIwMjU0Nzk3OjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZrMXRSZk9aU0lCUVhjd1pyS1QwQUswaUlDbm56cU1nM05ramdaQ2k4a24ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIyNzMwOTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUVoIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " 𝐊𝐄𝐈𝐓𝐇 𝐌𝐃",
  author: process.env.PACK_AUTHER || "𝐊𝐄𝐈𝐓𝐇",
  packname: process.env.PACK_NAME || "👁",
  botname: process.env.BOT_NAME || "𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "keithkeizzah",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KEITH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
