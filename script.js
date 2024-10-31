// Funktion um das Popup zu öffnen
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Funktion um das Popup zu schließen
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Funktion um das Formular abzusenden
function submitForm(event) {
    event.preventDefault(); // Verhindert das Standard-Formularverhalten

    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    const personen_count = document.getElementById('personen_count').value;

    // E-Mail senden
    sendEmail(name, attendance, personen_count);

    // Bestätigungsnachricht anzeigen
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `${name}, vielen Dank für deine Antwort!`;
    confirmationMessage.style.color = '#28a745'; // Setzt die Textfarbe für die Bestätigung

    // Popup nach 2 Sekunden schließen
    setTimeout(closePopup, 2000);
    
    // Formular zurücksetzen
    document.getElementById('rsvpForm').reset();
}

// Funktion zum Senden der E-Mail über EmailJS
function sendEmail(name, attendance, personen_count) {
    const attendanceText = attendance === "yes" ? "nehmen teil" : "nehmen nicht teil";
    const YOUR_SERVICE_ID = 'service_wto6c2a';
    const YOUR_TEMPLATE_ID = 'template_k0xyphk';
    const YOUR_USER_ID = 'LvLuuoIs5XfPmCL_V';
    
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
        from_name: name,
        message: attendanceText,
        personen_count: personen_count
    }, YOUR_USER_ID)
    .then(function(response) {
        console.log('Erfolgreich gesendet', response.status, response.text);
    }, function(error) {
        console.log('Fehler beim Senden', error);
    });
}

// Cookie Banner Funktionen
function acceptCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
}

function rejectCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
}
