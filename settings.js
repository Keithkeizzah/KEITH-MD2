/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUowZEtJT3BCQ1hJVWZDQk9kR2FpMkVHcTE0T054SVAxV25zQW0rSUNITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1dpbkl5eURMYzYrK1hVOFhLWDZlTEc1VVoxditMdGsxbmZ4U2tPd0JnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSENFQ2pGTnY2eTcyYmRjNzBpQTIvTWRSQ1lOc28rQXZ5RWxEVnBGbzBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGOGtnUUs1VHhUYlhQY1c1aVd2Sk9VRmpJRXpDZHMzQlArUW9vb2VGTm1zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHbWFoNzdKWnluVnNYSXJNcXRIOFAyTlBDTzRVZ2hQNCsxMUFxOWU5bk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCQ1Q1NHJQU21tM3RiTkd6SlNqeGxlaTU1d21EZ1Fnc0JSWXZEdHNZbDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBXOTVhdmRtZll4elY0TDNFQ2RJOGh3VDJQWmtuMVZ1dWxodmhoYkltdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidC9wUlJUK09GaVBnd2ROWTdEMkZjVVcwWVUyaHBjTmxUTEhjYUt6b0FuRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5GMHlSR1Nkb21yTjNMQXkrUWV2VytNa01LREFaOGczQ05JSUdZTGtqZ1lqcURNeEJTd01WUisxUC9LYVk1MmQwL2M5dW5RUGJjbXR5WE5zeXp3SUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJsV2lYTWV6NEJncU43Z09vNGVLRnZQSmZUM0IrKzhCbnBaMHBCUHFUK3hFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJITWdLSkxPclRnbWRrV3JTbDA0Z1FRIiwicGhvbmVJZCI6IjlmMDhlNTZiLWIyNGUtNGI0Zi04ZDM5LWM4ZDIzNDQ3ODAzZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaMWVYLy9BcDY2V0RKMFh4RWxNL1JOVncyNjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1h5WGFVRlhseldXU3J5d1lBaXNUdm45RHYwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNCQTY4NERKIiwibWUiOnsiaWQiOiI5MTYyNjAyNzM4NjM6MzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTcqAIFPKnOG0nMqZypzhtIDhtI0gS+G0nOG0jeG0gMqAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNell4ZjRIRU5yVi83a0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRWGMycmJYY1BDeGl6Vm9zRk1Lbnd6b1ZaeHpmY05zbkRJZVdaTHloWEE4PSIsImFjY291bnRTaWduYXR1cmUiOiJEZEVhSGdDWE4waVpKeDlFNktwUVVJbytTWExVTi9KME5PZEpXRFJqRXMzbENrdEVpaSs5L0ppZjg2VGoxcE1DVDY3OGYyLzFHd3FYUUdZekJ1b05CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWUU1ckFKaVZXR2U2VEVZRzBSWnhRWllnYlFHa3UvazJYSEpGc2hRN3dhclpTMFhLQlJSY1B6VnIvRU1IMTlIak43N0x5eHFrblJXMEltSkw5M2tEQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTYyNjAyNzM4NjM6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUYzTnEyMTNEd3NZczFhTEJUQ3A4TTZGV2NjMzNEYkp3eUhsbVM4b1Z3UCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjI0MjE1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIU3MifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '916260273863';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'Shubham-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
