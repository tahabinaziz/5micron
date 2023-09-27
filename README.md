# Npm & Node Version
### node -v: 18.7.0 || npm -v: 8.15.0

# Configure File
### config -> config.json -> change username, password, databasename

# Start Server:
### npm start


# Sequelize commands
## For creation of Database
`npx sequelize-cli db:create`

## Creation of Table
`npx sequelize-cli model:generate --name Sensors  --attributes serial:string,swVersion:string,temperature:string,date:string,gps:string`

## Migrations
`npx sequelize-cli db:migrate`