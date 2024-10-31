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

    // Hier wird eine E-Mail an die feste Adresse gesendet (dieser Teil muss auf einem Server implementiert werden)
    // Zum Beispiel: sendEmail(name, attendance);

    // Bestätigungsnachricht anzeigen
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `${name}, vielen Dank für deine Antwort!`;
    confirmationMessage.style.color = '#28a745'; // Setzt die Textfarbe für die Bestätigung

    // Popup nach 2 Sekunden schließen
    setTimeout(closePopup, 2000);
    
    // Formular zurücksetzen
    document.getElementById('rsvpForm').reset();
}

// Cookie Banner Funktionen
function acceptCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
}

function rejectCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
}
