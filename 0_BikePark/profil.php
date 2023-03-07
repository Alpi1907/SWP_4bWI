<?php
session_start();

if (!isset($_SESSION['email'])) {
    header("Location: anmelden.php");
    exit;
}

// Hier geht es weiter zur Profilseite
?>
