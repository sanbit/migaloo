Migaloo
=======
A Redis Live Monitor using Node.js

## Installation

Make sure you have node installed,then 

```bash
npm install
```

## Edit the config file

```json
{
  "dbpath": "",
  "servers": [
    {
      "host": "127.0.0.1",
      "port": "6380"
    }
  ]
}
```


## Startup the application

```bash
nohup node app.js > access.log 2>&1 &
```
