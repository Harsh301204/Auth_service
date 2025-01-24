## Auth MicroService 

- Starting with Initializing npm and some common packages required to setup Basic Server
```
npm init 
npm install express
npm install body-parser
npm install dotenv
```
- Setting up basic server and creating some folders that will be used 
- Now Generating Database using sequelize 
```
npx sequelize db:create
```
- Adding Users table in our Auth_DB using sequelize 
```
npx sequelize model:generate --name User --attributes email:string,password:string
```
- Now Doing some changes in model and migration file as per requirement 