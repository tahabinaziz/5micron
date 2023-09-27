## Tech Stack
`Node.js, Express.js, Sequelize ORM, Postgres`

## Npm & Node Version
### node -v: 18.7.0 || npm -v: 8.15.0


## Step 1: Configure File
You can configure the credentials w.r.t your machine environment: `config folder -> config.json -> change username, password, databasename`

## Step 2: Install Packages
`npm install`

## Step 3: Sequelize commands
Run the commands sequentially.

### For creation of Database
`npx sequelize-cli db:create`

### Creation of Database Table
`npx sequelize-cli model:generate --name Sensors  --attributes serial:string,swVersion:string,temperature:string,date:string,gps:string`

### Migrations
`npx sequelize-cli db:migrate`

## Step 4: Start Server
Use this command to start the server:`npm start`
