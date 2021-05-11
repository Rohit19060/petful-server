<p align="center">
  <a href="https://petful-client.rohit19060.vercel.app/" title="PetFul API">
    <img src="https://kingtechnologies.in/assets/images/logo.png" width="80px" alt="PetFul API"/>
  </a>
</p>
<h1 align="center">🌟 PetFul API 🌟</h1>
<p align="center">API Endpoint for PetFul is hosted on Heroku. The app is for showing queue data structure using the concept of PetFul, here the queue represents the actual queue for pets adoption. This endpoint is protected by Cors so if you want to use this you need to clone it and host it on Heroku or any other hosting provider.</p>

<p align="center">
<a href="https://github.com/Rohit19060/petful-api/blob/master/LICENSE" title="License">
<img src="https://img.shields.io/github/license/Rohit19060/petful-api?label=License&logo=Github&style=flat-square" alt="PetFul API License"/>
</a>
<a href="https://github.com/Rohit19060/petful-api/fork" title="Forks">
<img src="https://img.shields.io/github/forks/Rohit19060/petful-api?label=Forks&logo=Github&style=flat-square" alt="PetFul API Forks"/>
</a>
<a href="https://github.com/Rohit19060/petful-api/stargazers" title="Stars">
<img src="https://img.shields.io/github/stars/Rohit19060/petful-api?label=Stars&logo=Github&style=flat-square" alt="PetFul API Stars"/>
</a>
<a href="https://github.com/Rohit19060/petful-api/issues" title="Issues">
<img src="https://img.shields.io/github/issues/Rohit19060/petful-api?label=Issues&logo=Github&style=flat-square" alt="PetFul API Issues"/>
</a>
<a href="https://github.com/Rohit19060/petful-api/pulls" title="Pull Requests">
<img src="https://img.shields.io/github/issues-pr/Rohit19060/petful-api?label=Pull%20Requests&logo=Github&style=flat-square" alt="PetFul API Pull Requests"/>
</a>
<a href="https://github.com/Rohit19060/petful-api" title="Repo Size">
<img src="https://img.shields.io/github/repo-size/Rohit19060/petful-api?label=Repo%20Size&logo=Github&style=flat-square" alt="PetFul API Repo Size"/>
</a>
<a href="https://discord.gg/2wpHNSjwm2" title="Join King Tech's Community">
<img src="https://img.shields.io/discord/737854816402800690?color=%236d82cb&label=Join%20Community&logo=discord&logoColor=%23FFFFFF&style=flat-square" alt="Join discord community for PetFul API"/>
</a>
</p>

<p align="center" title="PetFul API"><img src="./assets/images/main.png" alt="PetFul API"/></p>

<h2 align="center">🌐 Links 🌐</h2>
<p align="center">
    <a href="https://github.com/Rohit19060/petful-client" title="PetFul Repo">📂 Repo</a>
    ·
    <a href="https://petful-client.rohit19060.vercel.app/" title="Visit">✨ Live View</a>
    ·
    <a href="https://calm-badlands-17592.herokuapp.com" title="Petful API">🛳 API</a>
    ·
    <a href="https://github.com/Rohit19060/petful-api" title="Petful API Repo">📂 API Repo</a>
    ·
    <a href="https://github.com/Rohit19060/petful-api/issues/new/choose" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>

## 🚀 Features

- **You can Adopt Pet**

- **Queue Demonstration**

- **Nice UI**

## 🦋 Prerequisite

- Basic Understanding of [Node](https://nodejs.org/ "Node")

- Basic Understanding of [NPM](https://www.npmjs.com/ "NPM")

- Basic Understanding of [Express](https://expressjs.com/ "Express")

- Basic Understanding of [Postgrator](https://www.npmjs.com/package/postgrator "Postgrator")

## 🛠️ Installation Steps

1. Clone the repository

```Bash
git clone https://github.com/Rohit19060/petful-api.git
```

2. Change the working directory

```Bash
cd petful-api
```

3. Install Dependencies

```Bash
npm i
```

4. Run the app using terminal

```Bash
npm start
```

**🎇 You are Ready to Go!**

## ❗ Available Commands

In the project directory, you can run:

```Bash
npm run start
```

Start the server for serving or you can say simply run an express server on a defined port for listening. I am using node and the server is defined in server.JavaScript file. Perform a request to get a response from it.

```Bash
npm run dev
```

Run the server in development mode so if you perform and change in a file you don't need to terminate the server and start again, nodemon will handle that every time you save the file.

```Bash
npm run migrate
```

Migrate Scripts to run postgrator and for creating tables in the database and if required we can undo them too by provided scripts.

```Bash
npm run predeploy
```

Migrate Scripts to run postgrator and for creating tables in the database and if required we can undo them too by provided scripts.

```Bash
npm run deploy
```

For deploying the API endpoint to Heroku

## Schema

### Pets

```JavaScript
{
    age: {
        type:Number,
    },
    breed: {
        type:String,
    },
    description: {
        type:String,
    },
    gender: {
        type:String,
    },
    imageURL: {
        type:String,
    },
    name: {
        type:String,
    },
    story: {
        type:String,
    },
}
```

## API Overview

```Text
├── /people
│   ├── GET
│   │   └── /
│   ├── POST
│   │   └── /
│   └── Delete
│       └── /
├── /pets
    ├── GET
    │    └── /
    └── Delete
        └── /:type
```

### GET `/people`

For getting all the people including you if the name provided

```JavaScript
// res.json
{
  people: Array;
}
```

### POST `/people`

For adding you name in queue

```JavaScript
// req.body
{
  person: String;
}

// res.json
{
  person: String;
}
```

### DELETE `/people`

For deleting one people from the queue as they adopted the pet

### GET `/pets`

```JS
// res.json
{
    Pets: Array;
}
```

### DELETE `/:type`

```JS
// req.params
{
   type: String
}
```

## 👷 Built with

- [Node](https://nodejs.org/en/ "Node"): Run-time environment

- [Express](https://expressjs.com/ "Express"): Web application framework

## 📂 Directory Structure

> [`server.js`](https://github.com/Rohit19060/petful-api/blob/main/server.js "Petful"): Main Entry file

> [`store.js`](https://github.com/Rohit19060/petful-api/blob/main/store.js "Database"): This file has all the data i.e. file as database

> [`modules`](https://github.com/Rohit19060/petful-api/tree/main/modules "Modules"): This Directory contains all the files. This app follows a modular approach.

## 🎊 Future Updates

- [ ] Add Login System

- [ ] User Can Request for pets hospitality

## 🧑🏻 Author

**Rohit Jain**

- 🌌 [Profile](https://github.com/Rohit19060 "Rohit Jain")

- 🏮 [Email](mailto:rohitjain19060@gmail.com?subject=Hi%20from%20Petful "Hi!")

- 🦁 [Website](https://kingtechnologies.in "Welcome")

<h2 align="center">🤝 Support</h2>

<h3 align="center">🎀 Contributions (<a href="https://guides.github.com/introduction/flow" title="GitHub flow">GitHub Flow</a>), 🔥 issues, and 🥮 feature requests are most welcome!</h3>

<h3 align="center">💙 If you like this project, Give it a ⭐ and Share it with friends!</h3>
<h3 align="center">💰 Donations Links</h3>
<p align="center">
<a href="https://www.paypal.me/kingrohitJ" title="PayPal"><img src="https://kingtechnologies.in/assets/images/paypal.png" alt="PayPal"/></a>
<a href="https://www.buymeacoffee.com/rohitjain" title="Buy me a Coffee"><img src="https://kingtechnologies.in/assets/images/coffee.png" alt="Buy me a Coffee"/></a>
<a href="https://ko-fi.com/rohitjain" title="Ko-fi"><img src="https://kingtechnologies.in/assets/images/kofi.png" alt="Ko-fi"/></a>
</p>

<p align="center">Made with React & ❤️ in India</p>
