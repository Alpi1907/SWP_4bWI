# Annahme: Eine Liste von Parkplätzen mit ihren Status (frei/besetzt)
parkplatz_liste = [
    {"name": "Parkplatz 1", "status": "frei"},
    {"name": "Parkplatz 2", "status": "frei"},
    {"name": "Parkplatz 3", "status": "frei"},
    # Weitere Parkplätze hier hinzufügen...
]

# Funktion zur Überprüfung der Parkplatzverfügbarkeit
def pruefe_parkplatzverfuegbarkeit():
    verfuegbare_parkplaetze = []
    for parkplatz in parkplatz_liste:
        if parkplatz["status"] == "frei":
            verfuegbare_parkplaetze.append(parkplatz["name"])
    return verfuegbare_parkplaetze

# Beispielaufruf der Funktion zur Überprüfung der Parkplatzverfügbarkeit
verfuegbare_parkplaetze = pruefe_parkplatzverfuegbarkeit()

# Ausgabe der verfügbaren Parkplätze
if len(verfuegbare_parkplaetze) > 0:
    print("Folgende Parkplätze sind verfügbar:")
    for parkplatz in verfuegbare_parkplaetze:
        print(parkplatz)
else:
    print("Es sind keine Parkplätze verfügbar.")