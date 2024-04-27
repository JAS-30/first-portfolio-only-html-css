//for emailJS

function sendMail(){
params = {
    
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    
}
emailjs
.send('service_aswef4y', 'template_yjrsvjr',params )
.then(
   
(response) => {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("message").value = '';
      },
      (error) => {
        console.log('FAILED...', error);
      },
);
 
}


