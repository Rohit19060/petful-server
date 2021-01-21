<h1 align="center"><a href="https://calm-badlands-17592.herokuapp.com">PetFul API</a></h1>

<h3 align="center">You can adopt pet and as a developer this is the app to showing Data Structures Concepts<h3>

## Table of Contents

- [Links](#links)
- [Available Scripts](#available-scripts)
- [Schema](#schema)
- [API Overview](#api-overview)
- [Built With](#built-with)
- [Future Updates](#future-updates)
- [Contact](#author)

## Links

- [Live View](https://petful-client-gold.vercel.app/)

- [Repo](https://github.com/Rohit19060/petful-client)

- [Api Endpoint](https://calm-badlands-17592.herokuapp.com)

- [Api Endpoint Repo](https://github.com/Rohit19060/petful-server)

## Available Scripts

In the project directory, you can run:

### `npm run start`

Start the server for serving or you can say simply run an express server on a defined port for listening. I am using node and the server is defined in server.js file.
Perform request to get a response from it.

### `npm run dev`

Run the server in development mode so if you perform and change in a file you don't need to terminate the server and start again, nodemon will handle that every time you save the file.

### `npm run migrate`

Migrate Scripts to run postgrator and for creating tables in database and if required we can undo them too by provided scripts.

### `npm run predeploy`

For running a command before deploying. this command will fix all the error before deploying the app to Heroku.

### `npm run deploy`

For deploying the API endpoint to Heroku

## Schema

### Pets

```js
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

### People

    # Peoples are statically added after that client add names randomly

## API Overview

```text

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

    For getting all the people including you if name provided

```js
// res.json
{
  people: Array;
}
```

### POST `/people`

    For adding you name in queue

```js
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
    Pets:Array;
}
```

### DELETE `/:type`

```JS
// req.params
{
   type:String
}
```

## Built With

- [Node](https://nodejs.org/en/) - Run-time environment
- [Express](https://expressjs.com/) - Web application framework

## Future Updates

- Add Login System
- User Can Request for pets hospitality

## Author

**Rohit Jain**

- [GitHub](https://github.com/rohit19060)
- [Email](mailto:rohitjain19060@gmail.com)
- [Website](https://kingtechnologies.in)

## 🤝 Support

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

Give a ⭐️ if you like this project!

## About

API Endpoint for PetFul, it is hosted on Heroku
the app is for showing queue data structure using the concept of PetFul, here queue represent the actual queue for pets adoption. This endpoint is protected by Cors so if you want to use this you need to clone it and host it on heroku or any other hosting provider.
