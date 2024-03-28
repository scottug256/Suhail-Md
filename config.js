const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "256761565724"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI|| "mongodb+srv://moriceug:ykneyPF1867D9903@clustermorice.sqdmjyk.mongodb.net/?retryWrites=true&w=majority"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "256761565724" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan="https://replit.com/@SuhailTechInfo/Secktor-Bot?v=1";
global.gurl= process.env.GURL   || "https://youtube.com/c/SuhailTechInfo";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.website =process.env.GURL|| "https://github.com/SuhailTechInfo/Suhail-Md" ; 
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "256761565724";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256761565724";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "1",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.6",
  caption:process.env.CAPTION || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ™*\n*ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ* • 𝟭𝟰/𝟭𝟮/𝟮𝟬𝟮𝟯" ,// ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "MORICEUG",
  packname: process.env.PACK_NAME || "@MORICEDESIGNZ ",
  botname: process.env.BOT_NAME   || "MORICE",
  ownername:process.env.OWNER_NAME|| "moriceug

  sessionName:process.env.SESSION_ID|| "==SESSION_14_28_03_28_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NLV3o2WGFSN1ZOZHpOT0ZySzBYMndmdkRXRzg3b1IxUDZXTERwRjBrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWThxVXpPbldyd3c4ZktFQ1VuZ3Z3MjByRVRpdHFTWWNTYjJnT3hCMkRrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUHlwSmVmUjdjMXQzL1psSzdlcmQwVXJaSVpkUnFLZmNGWUJkcWc3Qm5ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0eFFDVm44cU5ETmZWNkhhcFM4bWRaWDNuZVF6TGtySHJlWDBJVVBPN2xVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFINGpVVmFDaUVWcW1QRzlzMUxkWnBEUHVvc09nUjRvMXMzK0ZRZUhyR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5IeUFTMTF3aEE0UmRIeG1vTGRYYlF2Um1NN2VDY0VWYkhhbDhiTVZVeEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Z0UHpmMXpmTzUyOUZydmxkOTJIWVhMZzVFUTNUbTVGY3JqbXlHUGRYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1lvTlBtUjBzcWQveG9OcjBpaEw2VXJRNXFyZnZQWXBOWkVJOVRxN1BCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im91Qnk5b0FrWDFJRHlGNWV4cVJoOXBUSlRFOTNSSVdqYTUrVjl3NXVsTFU0K09nbHNBM3ZPRWlEOTJtRjI1V2x5WWVGTHRFTGFqZjZpMjF1NjdNaENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJkQW1yMytkWXQ2T21PczhHdE5wNmZpV1B2dWkvUi9mRmZId0JteHpPbDdJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc2MTU2NTcyNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRDY4RDJBQTIzM0Q1RjIyNURBMDg5QkIwMjk3RDFFMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzExNjM2MTAzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3NjE1NjU3MjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkUyMTgzRUQ5ODE1NzVFRDdDMzE1QjFENjJFRUQwNjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxMTYzNjEwOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2NzYxNTY1NzI0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEwRTE2OTk3NjA2NTY2QzNBNjM3MDg2RUVENDUzNkZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTE2MzYxMTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc2MTU2NTcyNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5OUE4RjA1RjBBQkI5NTk1NEJERkJDRkMxNkUwMDlCMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzExNjM2MTE3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3NjE1NjU3MjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUExRjQ4RjQ4Mjk4OUYwNjYwRTE4RENFMDVBOUM4OEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxMTYzNjExN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWFkwLWpzWTRTci1Va1gwZ0Q0UXNRZyIsInBob25lSWQiOiIzYzRhZmUwNy0wNDRmLTQ5NDgtYTBlYS1mMTRkMzMzZDAwN2QiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGNCN2RaL2dIeGpMbjVoRytPOXRtQm4rbHNvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJsdHc1OU94N3IvZEZFc1pON2oyNjlacGY4az0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSQVA1OUI3TCIsIm1lIjp7ImlkIjoiMjU2NzYxNTY1NzI0OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTU9SSUNFIERFU0lHTlogTFREIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNM2M3TDhERUlMOWxiQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxNW41UVFUT1kxK2FKWm9Ybk9aM3pOQ0NxZUozcC8yNGNtdUVVcmsyNUZFPSIsImFjY291bnRTaWduYXR1cmUiOiJxRUpGZDFhK1JOSE9oMVJYQkgxcGUzakl1OVFLNWlHaGJXSzNWOUJHQSt0TkR3ZTU1Tm5XYzRYRy84R2JlaUxDNTlNTS9YNURZM3ZXdG84aUhxM1VDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYStuUXg1T3hlMTRvdjd4YXJSNnAreXFsRDQ5T2xGWU93Nm1hMndWWnhKR25wa0lhYjFzd0NjSmp6d2tDSEhGa2YvaDV6U0QyVE1xdzFzLzRmNHlpQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NjE1NjU3MjQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhdVorVUVFem1OZm1pV2FGNXptZDh6UWdxbmlkNmY5dUhKcmhGSzVOdVJSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzExNjM2MTAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU3UCJ9
  ",
  userImages:process.env.USER_IMAGES|| "",
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || "3",
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "true", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "true",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "recording", "typing", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "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",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "true",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
