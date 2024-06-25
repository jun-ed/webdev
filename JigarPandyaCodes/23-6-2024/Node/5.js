// eiao fkmd cuoj vsro

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hendremahesh777@gmail.com",
    pass: "eiao fkmd cuoj vsro",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '<hendremahesh777@gmail.com>', // sender address
    to: "sahillad239@gmail.com", // list of receivers
    subject: "NODE EMAIL TESTING", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>SENDING EMAIL THROUGH NODE</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
