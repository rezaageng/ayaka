const Canvas = require("canvas")
const Discord = require("discord.js")

const background = "https://i.imgur.com/lHOV1fj.png"

const dim = {
    width: 1200,
    height: 675,
}

const Avatar = {
    size: 256,
    x: 480,
    y: 170,
}

Canvas.registerFont("./assets/fonts/coolvetica rg.otf", {
    family: "Coolvetica Rg",
})
Canvas.registerFont("./assets/fonts/MochiyPopOne-Regular.ttf", {
    family: "Mochiy Pop One",
})

const generateImage = async (member) => {
    const regex =
        /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({
        format: "png",
        dynamic: false,
        size: Avatar.size,
    })

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    const bgImg = await Canvas.loadImage(background)
    ctx.drawImage(bgImg, 0, 0)

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
    ctx.fillRect(0, 0, dim.width, dim.height)

    const avImg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(
        Avatar.x + Avatar.size / 2,
        Avatar.y + Avatar.size / 2,
        Avatar.size / 2,
        0,
        Math.PI * 2,
        true
    )
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avImg, Avatar.x, Avatar.y)
    ctx.restore()

    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    ctx.font = "70px 'Coolvetica Rg'"
    ctx.fillText("WELCOME", dim.width / 2, 130)

    username.match(regex)
        ? (ctx.font = "50px 'Mochiy Pop One'")
        : (ctx.font = "60px 'Coolvetica Rg'")
    ctx.fillText(`${username}#${discrim}`, dim.width / 2, 500)

    ctx.font = "40px 'Coolvetica Rg'"
    ctx.fillText("Have a nice day :D", dim.width / 2, 550)

    const attachement = new Discord.MessageAttachment(
        canvas.toBuffer(),
        "welcome.png"
    )
    return attachement
}

module.exports = generateImage
