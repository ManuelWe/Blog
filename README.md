# Blog
Project for Web Engeneering 2.
##### Developed by Jan-Nicolai Geistler and Manuel Wetzel.
\
_**If bcrypt module wont install:**_
```bash
npm install -g --production windows-build-tools
```
\
On our Blog webpage you can read articles and comments. If you want to post an article or comment you have to create an account first.
Only the User who created an article or comment is able to delete him. 
## Backend

### Start server
```bash
node server
```

Server is listening on localhost:3000\
Backend specification can be viewed and tested via localhost:3000/docs 

### Gulp

#### Validate js sources and gulpfile
```bash
gulp validate
```
 
#### Execute backend unit tests
```bash
gulp test
```
 
#### Create backend documentation
```bash
gulp doc
```

#### Validate, test and document
```bash
gulp
```


## Frontend

### Start angular in development mode
```bash
ng serve
```

Server is listening on localhost:4200

### Gulp

#### Validate ts sources and gulpfile
```bash
gulp validate
```
 
#### Execute frontend unit tests and E2E tests
(Backend should run)
```bash
gulp test
```
 
#### Create frontend documentation
```bash
gulp doc
```

#### Build Angular
```bash
gulp build
```

#### Validate, test, document and build
(Backend should run)
```bash
gulp
```
