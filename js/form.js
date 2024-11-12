emailjs.init('8Bp9YlTNSZvTdjGmw');

    document.getElementById('form').addEventListener('submit', function (event) {
      event.preventDefault();
      
      const serviceID = 'service_nuym0gl';
      const templateID = 'template_45d3wim';

      const name = document.getElementById("name");
      const message = document.getElementById("message");
      const email_id = document.getElementById("email");
      
      emailjs.send(serviceID, templateID, {
        from_name: name.value,
        message: message.value,
        email_id: email_id.value
      })
      .then((response) => {
        alert("Mensaje Enviado");
        name.innerHTML = "";
        message.innerHTML = "";
        email_id.innerHTML = "";
      }, (err) => {
        alert("Mensaje no enviado");
      });
    });
  