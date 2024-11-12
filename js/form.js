emailjs.init('cw-e0ltA2aPfvFsJC');

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
    // Limpiar los valores de input correctamente
    name.value = "";
    message.value = "";
    email_id.value = "";
  }, (err) => {
    alert("Mensaje no enviado");
    console.error("Error al enviar el mensaje: ", err); // Mostrar más detalles del error
  });
});