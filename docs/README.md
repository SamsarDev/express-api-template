# Api with NodeJS

### Instalacion del proyecto
#### Steps

1. <code>npm init -y</code>
2. <code>npm i express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet</code>
3. <code>npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D</code>

### Configuracion package.json

- __build__: <code>babel src --out-dir build</code>
- __dev__: <code>nodemon src/index.js --exec babel-node</code>
- __start__: <code>node build/index.js</code>

