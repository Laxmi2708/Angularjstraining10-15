# AngularJS eCommerce Application

This is a simple eCommerce application built using AngularJS and TypeScript. The application features a homepage that displays a list of products, a login and registration page, and a product details page where users can add products to their cart.

## Project Structure

```
angularjs-ecommerce-app
├── src
│   ├── app.ts
│   ├── index.html
│   ├── controllers
│   │   ├── app.controller.ts
│   │   ├── product.controller.ts
│   │   ├── login.controller.ts
│   │   └── register.controller.ts
│   ├── services
│   │   └── product.service.ts
│   ├── views
│   │   ├── home.html
│   │   ├── product-details.html
│   │   ├── login.html
│   │   └── register.html
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Create a new directory for the project and navigate into it.
2. Run `npm init -y` to create a package.json file.
3. Install the necessary dependencies using:
   ```
   npm install angular @types/angular typescript lite-server --save
   ```
4. Create the directory structure as outlined above.
5. Create the TypeScript files and HTML files as specified.
6. Configure `tsconfig.json` to compile TypeScript files.
7. Add a script in `package.json` to start the live server:
   ```json
   "scripts": {
       "start": "lite-server"
   }
   ```
8. Run `npm start` to launch the application in the browser.

## Features

- **Homepage**: Displays a list of products (e.g., laptops).
- **Login Page**: Allows users to log in to their accounts.
- **Registration Page**: Enables new users to create an account.
- **Product Details Page**: Users can view detailed information about a product and add it to their cart.

## Usage

After setting up the project and running the application, navigate to `http://localhost:3000` in your browser to view the application. You can browse products, log in, register, and view product details.