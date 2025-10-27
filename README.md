# tickets-app2

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

TicketApp (Vue.js)

TicketApp is a responsive, accessible, and secure Ticket Management System built with Vue.js.
It allows users to sign up, log in, and manage tickets (Create, View, Edit, Delete) in a visually consistent interface.

This project is part of a multi-framework challenge, implemented in React, Vue.js, and Twig, each following the same layout, features, and design rules.

🧱 Features
🌐 1. Landing Page

Welcoming hero section with wavy SVG background and decorative circles.

Clear Call-to-Action buttons: Login and Get Started.

Fully responsive layout (mobile → tablet → desktop).

Consistent footer on all pages.

🔐 2. Authentication

Login and Signup pages with form validation.

Inline and toast error messages for invalid inputs or existing users.

Simulated authentication using localStorage and session token:

Token key: ticketapp_session

User storage key: ticketapp_users

Logout clears session and redirects to Landing Page.

📊 3. Dashboard

Displays ticket summary:

Total tickets

Open

In Progress

Closed

Navigation to the Ticket Management screen.

Protected route, only accessible with a valid session.

🎟 4. Ticket Management (CRUD)

Create, View, Edit, and Delete tickets.

Real-time form validation.

Success/error toasts for user feedback.

Status color coding:

🟢 open → Green

🟠 in_progress → Amber

⚪ closed → Gray

Data saved in localStorage.

🎨 Design Consistency Rules
Element	Rule
Max Width	1440px, centered horizontally
Hero Section	Wavy SVG background
Decorative Shapes	At least two circles across site
Boxes	Rounded corners + shadow
Responsive	Works across mobile, tablet, and desktop
Colors	Open (Green), In Progress (Amber), Closed (Gray)
Accessibility	Semantic HTML, focus states, sufficient contrast
♿ Accessibility Features

Semantic structure (<main>, <section>, <article>, <header>, <footer>).

Fully responsive design.

Toast notifications for feedback.

🧩 Project Structure
ticketapp-vue/
├── src/
│   ├── components/
│   │   ├── Footer.vue
│   │   └── ProtectedRoute.vue
│   ├── views/
│   │   ├── LandingPage.vue
│   │   ├── LoginPage.vue
│   │   ├── SignupPage.vue
│   │   ├── Dashboard.vue
│   │   └── TicketManagement.vue
│   ├── assets/
│   │   └── styles/
│   │       ├── general.css
│   │       ├── LandingPage.css
│   │       ├── Dashboard.css
│   │       ├── TicketManagement.css
│   │       └── Auth.css
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
└── package.json

⚙️ Setup & Run Instructions
1️⃣ Clone the Repository
git clone https://github.com/yourusername/ticketapp-vue.git
cd ticketapp-vue

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run serve


App runs on → http://localhost:5175
