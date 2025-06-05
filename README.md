# Fast React Pizza Co.

A modern pizza ordering web application built with React, TypeScript, Vite, Redux Toolkit, React Router, and Tailwind CSS.

🍕 **Order your favorite pizzas, track your order, and enjoy a seamless user experience!**

---

## Features

- User-friendly interface to browse and order pizzas
- Create a username to personalize your experience
- Browse a dynamic menu fetched from a remote API
- Add, update, or remove pizzas from your cart
- Place orders with optional priority (faster delivery)
- View real-time order status and estimated delivery time
- Responsive design with Tailwind CSS
- Robust state management with Redux Toolkit
- Form validation and helpful error messages

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd fast-react-pizza
   ```
2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

### Running the App

- **Development mode:**

  ```bash
  yarn dev
  # or
  npm run dev
  ```

  The app will be available at [http://localhost:5173](http://localhost:5173).

- **Production build:**

  ```bash
  yarn build
  # or
  npm run build
  ```

- **Preview production build:**
  ```bash
  yarn preview
  # or
  npm run preview
  ```

### Linting & Formatting

- **Lint code:**
  ```bash
  yarn lint
  # or
  npm run lint
  ```
- **Format code:**
  ```bash
  yarn format
  # or
  npm run format
  ```

---

## Project Structure

- `src/features/` — Main app features (menu, cart, order, user)
- `src/services/` — API calls to the pizza backend
- `src/ui/` — Reusable UI components
- `src/types/` — TypeScript types
- `src/utils/` — Utility functions

---

## Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **Vite** (for fast development)
- **Redux Toolkit** (state management)
- **React Router** (routing)
- **Tailwind CSS** (styling)
- **ESLint & Prettier** (code quality)

---

## API

This app uses the [React Fast Pizza API](https://react-fast-pizza-api.onrender.com/api) for menu and order management. No local backend setup is required.

---

## License

MIT
