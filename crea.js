(function() {
    emailjs.init("KHoz3yRHjcLvjvTkN"); // USAR  TU CLAVE PUBLICA
   
})();

document.getElementById('parent-survey').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('parent-name').value,
        kids: document.getElementById('parent-kids').value,
        interest: document.getElementById('parent-interest').value,
        improvements: document.getElementById('parent-improvements').value,
        comments: document.getElementById('parent-comments').value,
    };

    emailjs.send('service_0uqk14m', 'template_eiliqgk', templateParams)
        .then(function(response) {
            alert('Encuesta enviada exitosamente!');
            document.getElementById('parent-survey').reset(); // Reiniciar el formulario después de enviar
        }, function(error) {
            alert('Error al enviar la encuesta: ' + JSON.stringify(error));
        });
});