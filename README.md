<<<<<<< HEAD
# fullstack-intern-task (Mini SaaS Template Store)

Full-stack app with auth, templates listing, and favorites.

## Tech Stack

- Frontend: React (Vite) + TailwindCSS
- Backend: Node.js + Express
- DB: SQLite
- Query Builder: Knex

## Setup

### 1) Backend (Server/)

```bash
cd Server
npm install
npm run migrate
npm run seed
npm run dev
```

Server runs at `http://localhost:3001`.

Environment file: `Server/.env`

### 2) Frontend (Client/)

```bash
cd Client
npm install
npm run dev
```

Frontend uses `Client/.env` (`VITE_API_BASE_URL=http://localhost:3001/api`).

## Features

- Register & Login (JWT + hashed passwords)
- Browse templates
- Add templates to favorites
- View favorites in `/favorites`
- Search + Category filter on `/templates`

## API

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/templates`
- `GET /api/templates/:id`
- `POST /api/favorites/:templateId` (auth)
- `GET /api/favorites` (auth)

## Author

- Name: T. CHETHAN
- Contact: chethanuni2002@gmail.com
=======
# Fullstack_Intern_Task
>>>>>>> df170287db88deb9d0e6fe910026cc56427bb5da
