const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (alpha = new WAConnection()) => {
    alpha.logger.level = 'warn'
    alpha.version = [2, 2119, 6] 
    console.log(banner.string)
    alpha.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the qr'))
    })

    fs.existsSync('./session.json') && alpha.loadAuthInfo('./session.json')
    alpha.on('connecting', () => {
        start('2', 'Subscribe YT ZEEONE OFC')
    })
    alpha.on('open', () => {
        success('2', 'Connected')
    setTimeout( () => {
	    	console.log(color(`⚪ SUBSCRIBE YOUTUBE ZEEONE OFC`, 'aqua'))
	    	}, 1000)    		    	     	
         	}) 
         await alpha.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(alpha.base64EncodedAuthInfo(), null, '\t'))

    alpha.on('chat-update', async (message) => {
        require('./index.js')(alpha, message)
    })
    alpha.on('CB:Blocklist', json => {                                                                  
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })
    
	alpha.on('group-participants-update', async (anu) => {
		try {
		  falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Alphabot", 
"caption": `Made With ❤️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)
}}}
			const mdata = await alpha.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
				try {
                    var pp_group = await alpha.getProfilePicture(anu.jid)
	            } catch (e) {
	                var pp_group = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
	            }
				ini_user = alpha.contacts[num]
				group_info = await alpha.groupMetadata(anu.jid)
                ini_img = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=e966d3aac613b61dabd35cc6&img1=${ppimg}&img2=${pp_group}&background=${setting.img}&username=${ini_user.notify}&member=${mdata.participants.length}&groupname= ${mdata.subject}`)
                welkam = `Hi @${num.split('@')[0]}\n`
				welkam += `◪ Welcome in group:\n`
				welkam += `├─ ${group_info.subject}\n`
				welkam += `├─ Please introduce yourself\n`
				welkam += `├─ ❏ Name:\n`			
				welkam += `├─ ❏ Age: \n`
				welkam += `├─ ❏ Country: \n`
				welkam += `├─ ❏ Gender:\n`
				welkam += `└─ ❏ Number: ${num.replace('@s.whatsapp.net', '')}\n`
				welkam += `We hope you enjoy~~\n`
				alpha.sendMessage(mdata.id, ini_img, MessageType.image, {quoted: falfa,caption: welkam, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				ini_gua = alpha.contacts[num]
				group_info = await alpha.groupMetadata(anu.jid)
				try {
					ppimg = await alpha.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
				let buff = await getBuffer(ppimg)
				ini_out = `Bye bye🥳 @${num.split('@')[0]} Please donate if you want to come back here again`
				alpha.sendMessage(mdata.id, buff, MessageType.image, {quoted : falfa,caption: ini_out, contextInfo: {"mentionedJid": [num]}})
		
			} else if (anu.action == 'promote') {
			const mdata = await alpha.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `*PROMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}`
			alpha.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted : falfa})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await alpha.groupMetadata(anu.jid)
			try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `*DEMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}`
			alpha.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num]}, quoted: falfa})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

alpha.on('group-update', async (anu) => {
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `Made With ❤️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await alpha.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
})
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
