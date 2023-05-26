<br />
<p align="center">
  <div align="center">
    <img height="150" src="./docs/readme/logo.svg" alt="kairshop" border="0"/>
  </div>
  <h3 align="center">Kairshop (E-Commerce App)</h3>
  <p align="center">
    <a href="https://github.com/ikkair/kairshop-fe-new"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://kairshop-fe-ikkair.vercel.app/">View Demo</a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisite](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [Related Project](#related-project)

# About The Project

Kairshop is an E-Commerce website to make it easier for users to buy clothes online, users can view, search, and buy clothes as desired, this website also has features to manage products that have been uploaded by each seller.

## Built With

These are the libraries used for building this frontend

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Sweetalert2](https://sweetalert2.github.io)
- [Axios](https://axios-http.com)
- [Redux](https://redux.js.org)

# Getting Started

## Prerequisites

You'll need these programs installed before proceeding to installation

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)

This project requires [kairshop-backend](https://github.com/ikkair/kairshop) to function properly, follow the steps provided in the readme to install and run the backend API

## Installation

Follow this steps to run the server locally

1. Clone this repository

```sh
git clone https://github.com/ikkair/kairshop-fe-new.git kairshop-fe
```

2. Change directory to blanja-frontend

```sh
cd kairshop-fe
```

3. Install all of the required modules

```sh
npm install
```

4. Create and configure `.env` file in the root directory, example env are provided in [.env.example](./.env.example)

```env
REACT_APP_API_BACKEND=[ Backend URL ]
```

5. Run this command to run the server

```sh
npm start
```

- Run this command to build this website into production ready

```sh
npm build
```

# Screenshots

<table>
 <tr>
    <td><img width="350px" src="./public/docs/Kairshop Landing Page.jpg" border="0" alt="Landing Page" /></td>
    <td> <img width="350px" src="./public/docs/Kairshop Login.jpg" border="0"  alt="Login" /></td>
  </tr>
   <tr>
    <td>Landing Page</td>
    <td>Login</td>
  </tr>
   <tr>
    <td><img width="350px" src="./public/docs/Kairshop Register.jpg" border="0" alt="Register" /></td>
    <td><img width="350px" src="./public/docs/Kairshop Checkout.jpg" border="0" alt="Checkout" /> </td>
  </tr>
   <tr>
    <td>Register</td>
    <td>Checkout</td>
  </tr>
  <tr>
    <td><img width="350px" src="./public/docs/Kairshop Checkout Modal.jpg" border="0" alt="Checkout Confirm" /> </td>
     <td><img width="350px" src="./public/docs/Kairshop MyProduct.jpg" border="0" alt="My Product" /></td>
  </tr>
   <tr>
    <td>Checkout Confirm</td>
     <td>My Product</td>
  </tr>
  <tr>
    <td><img width="350px" src="./public/docs/Kairshop MyProduct Create Product.jpg" border="0" alt="Create Product" /> </td>
     <td><img width="350px" src="./public/docs/Kairshop Mybag.jpg" border="0" alt="My Bag" /></td>
  </tr>
   <tr>
    <td>Create Product</td>
     <td>My Bag</td>
  </tr>
</table>

# Related Project

:rocket: [`Frontend Kairshop`](https://github.com/ikkair/kairshop-fe-new)

:rocket: [`Backend Kairshop`](https://github.com/ikkair/kairshop)

:rocket: [`Demo Kairshop`](https://kairshop-fe-ikkair.vercel.app/)
