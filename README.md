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

Main Template Section 
<img width="1317" height="912" alt="Screenshot 2026-05-20 223152" src="https://github.com/user-attachments/assets/cc132c01-4740-42b8-a49a-76bdd7f1aa7c" />

Favorite Template Section
<img width="1312" height="911" alt="Screenshot 2026-05-20 223206" src="https://github.com/user-attachments/assets/ce27b651-10c7-4f2c-b154-4e62c3115ef7" />


## Author

- Name: T. CHETHAN
- Contact: chethanuni2002@gmail.com
=======

