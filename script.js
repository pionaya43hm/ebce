(function() {
    emailjs.init("KHoz3yRHjcLvjvTkN"); // USAR TU CLAVE PUBLICA AQUI
})();

function sendSurvey(formId) {
    const form = document.getElementById(formId);
    const templateParams = {
        name: form.querySelector('[id$="-name"]').value,
        kids: form.querySelector('[id$="-kids"]') ? form.querySelector('[id$="-kids"]').value : '',
        subjects: form.querySelector('[id$="-subjects"]') ? form.querySelector('[id$="-subjects"]').value : '',
        level: form.querySelector('[id$="-level"]') ? form.querySelector('[id$="-level"]').value : '',
        age: form.querySelector('[id$="-age"]') ? form.querySelector('[id$="-age"]').value : '',
        improvements: form.querySelector('[id$="-improvements"]').value,
        comments: form.querySelector('[id$="-comments"]').value,
    };

    emailjs.send('service_0uqk14m', 'template_eiliqgk', templateParams)
        .then(function(response) {
            alert('Encuesta enviada exitosamente!');
            form.reset(); // Reiniciar el formulario después de enviar
        }, function(error) {
            alert('Error al enviar la encuesta: ' + JSON.stringify(error));
        });
}

document.getElementById('student-survey')?.addEventListener('submit', function(event) {
    event.preventDefault();
    sendSurvey('student-survey');
});

document.getElementById('teacher-survey')?.addEventListener('submit', function(event) {
    event.preventDefault();
    sendSurvey('teacher-survey');
});