<?php
session_start();

// Verbindung zur Datenbank herstellen
$dbhost = "localhost";
$dbuser = "dein_benutzername";
$dbpass = "dein_passwort";
$dbname = "deine_datenbank";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Anmeldedaten abrufen
$email = $_POST['email'];
$passwort = $_POST['passwort'];

// Anmeldedaten überprüfen
$sql = "SELECT * FROM benutzer WHERE email = '$email' AND passwort = '$passwort'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
    // Anmeldung erfolgreich
    $_SESSION['email'] = $email;
    header("Location: profil.php");
} else {
    // Anmeldung fehlgeschlagen
    echo "Fehler: Falsche Anmeldedaten.";
}

mysqli_close($conn);
?>
