const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "onljsk@gmail.com",
        pass : "ybicbfwagejastzy"
    },
});

async function main() {
    const info = await transporter.sendMail({
        from : '<onljsk@gmail.com>',
        to : "junedshaikh782@gmail.com",
        subject : "Sending Email using Node.js",
        text : "That was easy!",
        html : "<b>That was easy! send from juned</b>",
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);