# Spell Study Guide

A web application designed for Harry Potter fans to explore, save, and study magical spells. Users can sign up, choose their Hogwarts house, and interact with spells using various features like pinning, wands, and more.

## 🚀 Features

- **User Authentication**:
  - Sign up, log in, and log out with email and password.
  - Select your Hogwarts house during signup.

- **Spell Exploration**:
  - Fetch spells from an external API.
  - Save spells to your profile for later study.

- **Spell Interaction**:
  - Add or remove wands to spells to track how many times you've studied a spell.
  - Pin important spells for quick access.
  - Delete spells from your profile.

- **Dynamic User Interface**:
  - Personalized profile with house-specific styling.
  - Responsive and user-friendly design.

## 🛠️ Technologies Used

- **Backend**:
  - Node.js and Express for server-side logic.
  - MongoDB (via Mongoose) for database management.
  - Passport.js for authentication (local strategy).

- **Frontend**:
  - EJS templating for dynamic HTML rendering.
  - Bootstrap for responsive design.
  - Font Awesome for icons.

- **Additional Tools**:
  - Fetch API for external spell data.
  - Flash messages for user feedback.


## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Credit

Modified from Scotch.io's auth tutorial
