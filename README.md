Migaloo
=======
A Redis Live Monitor using Node.js

Quick Start
================================================================
install the dependencies:

npm install

edit the config file: migaloo.conf

{
  "dbpath": "",
  "servers": [
    {
      "host": "127.0.0.1",
      "port": "6380"
    },
    {
      .....
    } 
  ]
}

start migaloo

nohup node app.js > access.log 2>&1 &