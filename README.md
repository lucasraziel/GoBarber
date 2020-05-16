<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://user-images.githubusercontent.com/26093830/81298384-16577a00-904b-11ea-8bd1-af5590094375.PNG" alt="Project logo" style="border-radius:50%"></a>
</p>

<h3 align="center">gobarber-Server</h3>






---

<p align="justify">
This software is a demonstration for scheduling appointments for a barber shop.
<br>
<div align="center">
<img width="640px" h src="https://user-images.githubusercontent.com/26093830/81298378-148db680-904b-11ea-8c18-96fc9ba1391e.PNG" alt="webpage"/>
<img width="640px"  src="https://user-images.githubusercontent.com/26093830/81298381-15bee380-904b-11ea-8df7-b98f27a15423.PNG" alt="webpage"/>
<img width="300px"  src="https://user-images.githubusercontent.com/26093830/81298426-27a08680-904b-11ea-955e-52b8d85ac6ca.jpeg"/>
<img width="300px"  src="https://user-images.githubusercontent.com/26093830/81298431-28391d00-904b-11ea-987b-deccd8821b5a.jpeg"/>
<img width="300px"  src="https://user-images.githubusercontent.com/26093830/81298434-28d1b380-904b-11ea-8c05-e6b3fd67455a.jpeg"/>
<img width="300px"  src="https://user-images.githubusercontent.com/26093830/81298438-28d1b380-904b-11ea-9da9-761b3fa4cde3.jpeg"/>
</div>
It is separated among three projects

 - [Backend](https://github.com/lucasraziel/GoBarber)
 - [Web](https://github.com/lucasraziel/gobarber-webv1)
 - [Mobile](https://github.com/lucasraziel/gobarber-mobilev1)
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Acknowledgments](#acknowledgement)
- [Author](#author)

## 🧐 About <a name = "about"></a>

This is a demonstration for appintments for a barber shop. The web version is for
the professional. He is goint to see his appointments in this environment.
The mobile version is for the clients. He will be able to schedule his appintments with
his mobile.

There is a demo version of this web app in the following link

[Demonstration](https://gobarber.lucasrego.com)

Unfortunately, there is no a demonstration versio for mobile.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

You will need to have installe in your machine NodeJs, Redis, Postgresql and MongoDB. You should also have
an environment ready for react-native.

### Installing

#### Backend

To install the backend, these are the steps required:

You should start postresql, with a new database ready for it (the name is of you choice).

You should also start redis and mongodb server.


```
git clone https://github.com/lucasraziel/GoBarber.git gobarber-server

cd gobarber-server

yarn

```

It is also required to setup the environment. The .env.example file must be renamed to
.env and must have its data complete according to your environment.


```
yarn sequelize db:migrate

yarn dev

yarn queue
```

The yarn queue command is only required if you wish that the application sends their emails.


#### Web

The web environment must be installed in this manner:

```
git clone https://github.com/lucasraziel/gobarber-webv1.git gobarber-web

cd gobarber-web

yarn

```

You must, then, edit src/services/api.js and edit the file to adjust your server
configuration

```
yarn start
```

#### Mobile

To install the react-native environment, It is a good idea to follow these instructions
(it is in brazilian portuguese) [instructions](https://react-native.rocketseat.dev/).

The src/services/api.js must be editted in the same way that was in web environment.

```
git clone https://github.com/lucasraziel/gobarber-mobilev1.git gobarber-mobile

cd gobarber-mobile

yarn

react-native run-android

react-native run-ios

```

The ios test will be only possible in mac OS.




## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [React-Native](https://reactnative.dev/) - Mobile Framework


# Author <a name = "author"></a>

Lucas Rego [GitHub](https://github.com/lucasraziel) [Resume](https://lucasrego.com)



