function sendEmail() {
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
        
    }
    emailjs.send('service_2viov69', 'template_z8hctwr',parms).then(alert('Message Sent Successfully !!'))
}   