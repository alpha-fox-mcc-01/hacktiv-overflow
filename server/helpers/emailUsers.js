function sendEmail(recipient, message, subject) {
	const nodemailer = require('nodemailer')

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'supervisor.superapp@gmail.com',
			pass: 'apayapasswordnya'
		} 
	});

	let mailOption = {
		from: 'hoverflownews@gmail.com',
		to: recipient,
		subject,
		html: message
	};
	transporter.sendMail(mailOption, (err, info) =>{
		if (err) throw err;
		console.log('email send ' + info.response);
	});
}

module.exports = sendEmail