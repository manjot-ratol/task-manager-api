const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'manjotratol1@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = ( email, name ) => {
    sgMail.send({
        to: email,
        from: 'manjotratol1@gmail.com',
        subject: 'Its hard to see you going!',
        text: `Sorry ${name}, its hard to see you going, but we want to improve, so please let us know why you deleted your account.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}