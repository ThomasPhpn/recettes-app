# Récupérer le nom du conteneur MySQL
$DB_CONTAINER = docker ps --filter "name=db" --format "{{.Names}}"

# Vérifier si MySQL tourne
if (-not $DB_CONTAINER) {
    Write-Host "❌ Le conteneur MySQL ne tourne pas !"
    exit 1
}

# Créer un dossier db_backups s'il n'existe pas
if (-not (Test-Path "db_backups")) {
    New-Item -ItemType Directory -Path "db_backups"
}

# Sauvegarde de la base de données
Write-Host "Sauvegarde effectuée avec succès !"
docker exec $DB_CONTAINER mysqldump -u root -prootpassword wordpress | Out-File -Encoding utf8 "db_backups/backup.sql"

Write-Host "✅ Sauvegarde effectuée avec succès !"
