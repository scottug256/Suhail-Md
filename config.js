const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "256707521863"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI|| "mongodb+srv://moriceug:ykneyPF1867D9903@clustermorice.sqdmjyk.mongodb.net/?retryWrites=true&w=majority"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "256707521863" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan="https://replit.com/@SuhailTechInfo/Secktor-Bot?v=1";
global.gurl= process.env.GURL   || "https://youtube.com/c/SuhailTechInfo";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.website =process.env.GURL|| "https://github.com/SuhailTechInfo/Suhail-Md" ; 
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "256707521863";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256707521863";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "1",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.6",
  caption:process.env.CAPTION || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ™*\n*ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ* • 𝟭𝟰/𝟭𝟮/𝟮𝟬𝟮𝟯" ,// ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "MORICEUG",
  packname: process.env.PACK_NAME || "@JUMOTA256 ",
  botname: process.env.BOT_NAME   || "MORICE",
  ownername:process.env.OWNER_NAME|| "moriceug

  sessionName:process.env.SESSION_ID|| "SUHAIL_14_00_02_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib09uZkVWeVhGaTF6RTczZ2VaMjNFNFhsU01YdHFOKzdWbEJpY0Q0WW9sRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdUN2grdVp0TlQ4YTR1eTArQUM5ZmtqU3YxTkxXN091cGc1di9TaU5Id1U9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0taVzY0S0NUdE9mMjVRaDdwM1FVVHRtQlJJYXhraDNKWERRcTYzWm1Idz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImtQUHJJVndvUWJQcHN5WXIwMnlXbFM0S0gxZm92MzBrOXVFbnZ3YmZyMzg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0ZTb0NZc0JDdEk0bjJlWDFFSkhNRmFTY3Q2T2h1U3IzUU9Ud29XdEVrOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlh4MFVNUWlhTFJKRXNBNTNvWUlGQ0NOcHRPUFIxVWxGUlFHR0dKSWhHMG89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJQzRzZ25keTVxV25TKzF6REViQ2JreGlVT29hVVRub0FCMVo0azZuazJ3PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicVJHM0JSQ2FqT1BJR0s2dGFHRVhRVVh4MTFrTWtpZlBDaThzajYxUWpYdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI3UngxTVZwZzl0YmM2OGJXWXMva05jVkorekVOWXR4MkJqMExLSy83ZVh0UURYZVYxbFRRZlpROXc4NXZXcHNhdGpzSFUrU2hmMlFQbmpDNzZCZUxqZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjQ0LFwiYWR2U2VjcmV0S2V5XCI6XCJxWWpTNjlpbmhxcDRsVmZvb1BCUnd1ZktQeXlvYjlYQ3A1SDR6SHhGOGNJPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwidXNfZkg5eXpTQU93M05EbVdDV3dIUVwiLFwicGhvbmVJZFwiOlwiYjkxNjA3YTktNjA2Yy00Y2I0LTg3NzktYmZhMGFlNjMyN2ExXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJqa0toeTRsOXpCaENUUDZTd3VycXNDWkpEem89XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInFUdUFhdWpZekVuYkNZQkVVcVI4Z2xlSHZ1dz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUCtxM004RkVPSzl6YTRHR0FFPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwidUJhcG9rUjQ2dExRUVpkbXFHZTZSRkt0Q202akVGT3BYbmZ2c241UG9BTT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImVORmpOSXZGWjhsb0hDckNuelc2WVNPb0k4Kyt6WHNYU2JsQzROY05CM29EekRXSGRTcmlkWVYwa0N3RytNa21tbzlTb0RVWE16R3dvZEhuN05CZUFRPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiTlYvL2ZGTW9LQ3E1WjVUUmJRS1BLZU1KbWhTTUloWFgrdVNFMW01WWJhYjlkcHRLZWFkbEhuZ3YxVFdjVmRHb1JMY28zTW9nTkpGNXY1UldMTGJ3aUE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI1NjcwNzUyMTg2MzoxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjE0NjQwNzMxNTAwNTYzODoxQGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI1NjcwNzUyMTg2MzoxQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmJnV3FhSkVlT3JTMEVHWFpxaG51a1JTclFwdW94QlRxVjUzNzdKK1Q2QURcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MzUxMjA3fSIKfQ==
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
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
