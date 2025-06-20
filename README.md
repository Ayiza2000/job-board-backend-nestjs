

# 🏢 Job Board API (NestJS)

Backend service implementing a Job Board with JWT authentication, job CRUD, and PostgreSQL or SQLite support.

---

## 📌 Features

- CRUD operations for jobs (`id`, `title`, `description`, `location`, `createdAt`)
- Input validation with DTOs (`class-validator`)
- JWT authentication (login via `admin` / `changeme`)
- Secure endpoints with `JwtGuard`
- CORS enabled for frontend integration
- Switchable database backing:
  - **SQLite** (simple local dev)
- Configurable via environment variables

---

## ⚙️ Prerequisites

- Node.js 18+
- npm or yarn
- For PostgreSQL option: Docker & Docker Compose (optional)

---

## 🏗️ Setup & Run

### 1. Install dependencies

```bash
cd backend
npm install
