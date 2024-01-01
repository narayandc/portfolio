import emailjs from 'emailjs-com';

//email send via emailjs without using backend server
function sendEmail(form) {

    const userId = 'service_qf8zihl';
    const templeteId = 'template_6rlqlha';
    const API_KEY = 'VNKU4OlSRvH4WELi1';

    emailjs.sendForm(userId, templeteId, form, API_KEY)
        .then((response) => {
            console.log('Email sent successfully!', response);
            return true
        }, (error) => {
            console.error('Failed to send email', error);
            return false
        });
};

export default sendEmail;