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
global.sudo = process.env.SUDO || "245720254797";
global.owner = process.env.OWNER_NUMBER || "254748387615";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "yes";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://keithweb-85c830c44249.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFiQWVrME5Lb0pmWmY1RG83anlzQmdNa0ZxdWI1SW8zZDZtdXA0MnFFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEI4Y0hLREQ0Q1M1MXpObmlIRkE2bXBPMmNZN3Q5M0UwdHFvU3llTXFCUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTnZ4K3RjbFFGTE9PcENSTjdTUXJKK1Evek83T21yNnNoQ3R3czdJRG1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5Y3lpWWluMHRFa3lUbGJRd08vWGtDVWFMK3pBemxHSlo2RGc5RFllbVdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEbGR0Y0tDZi9aYXhTR0pPdXhPK1Y1cEZEQVhUV3ZPbVNQVEpMWFdZMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZQQWd5MzZ0eDhlTlRic0tST2R0Z1RDY09Rc1JJWFNrSkxjeXBwdWJkSHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9DZGdDR25oUGUrU2Vjayt2akh0YnZUWHlLZHR1VTIvakYrT0VrZ3YzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhTTlNPK2Q3YW5tS1d2REgrRHlwLyt3YlEvR0tFdWx1THcxaUcwbXBIYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdCM2VUMk1aM0J6bUNHY1VKTzMyMUYyN3p4UUdtbzlmYnNpYk8yazJTOHo0K0hqZkVtUU1QOWJvZ2FhMHRTQ0srVEl4Mm9xamdKSy9WY25sU09SWUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJwRVdLRmhZN3Bkd09aMDRycHpmbHdKSUsvanAvM1RGbVJwckE5UnJXTk1jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6R0hkLTFIUFMxR0tqaENxbk84WWR3IiwicGhvbmVJZCI6ImEzMzNkYjg0LWJkZDgtNDZiYi04NTNhLWFlMGFjM2Y3ZDQ0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyTHNRak1Scldod2E5U1BTK2xlU1NxMFoyY3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3NJTXlESkcrZjVXN1d6aisrNWFQMW1Bd1VRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRTREI0WDRNIiwibWUiOnsiaWQiOiIyNTQ3MjAyNTQ3OTc6MzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liVHBvVUZFTm01a2JRR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndpYVJsVFpVeGRRd3RiMVVmZFBIMXZtUnJpazhLWmhKdUROWUg3S09kVVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJIek5IUnZ3bGJiL2xHaGc0bGZndXdDWnQvNWxwanl1K3lJR3pQR3dENGRJOHpZOTZGK2h6emRpaFIzcVdpMU1RTkxETHA0M1VkMjFRVDNmUS9Zc0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOYTcwRVlTSVJaaEpVVXVnT2FsSzJQeE1Sb01IMUQ4MGRLNUJ2Rm9sSUdVWHNDRFAyUWZETngxZ2JVTGxxbllWci9rdmcwZ1ZwRFBsbVQxeTE2QldDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcyMDI1NDc5NzozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjSW1rWlUyVk1YVU1MVzlWSDNUeDliNWthNHBQQ21ZU2JneldCK3lqblZGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTUwNTY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxUOCJ9"
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
