<?php
// Verbindung zur Datenbank herstellen
$dbhost = "localhost";
$dbuser = "dein_benutzername";
$dbpass = "dein_passwort";
$dbname = "deine_datenbank";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Daten vom Registrierungsformular abrufen
$vorname = $_POST['vorname'];
$nachname = $_POST['nachname'];
$email = $_POST['email'];
$passwort = $_POST['passwort'];

// Daten in die Datenbank einfügen
$sql = "INSERT INTO benutzer (vorname, nachname, email, passwort) 
        VALUES ('$vorname', '$nachname', '$email', '$passwort')";

if (mysqli_query($conn, $sql)) {
    echo "Registrierung erfolgreich!";
} else {
    echo "Fehler: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
