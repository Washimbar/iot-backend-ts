Here’s a complete `README.md` file for your **NestJS IoT backend project** with:

* Project setup instructions
* `.env` for development and production
* How to run and test the API
* How to manage roles & permissions

---

## 📘 `README.md` — IoT Backend with Granular RBAC

````markdown
# 🏠 IoT Backend - NestJS (Room > Device > Actuator/Sensor)

This is a scalable IoT backend system built with [NestJS](https://nestjs.com/) following a modular architecture. It supports **granular RBAC**, structured as:

> `Room` > `Device` > `Actuator` / `Sensor`

---

## 🚀 Features

- Modular structure: `rooms`, `devices`, `sensors`, `actuators`, `auth`, `users`, `permissions`
- Granular Role-Based Access Control (RBAC)
- JWT authentication
- Config-driven environment
- Ready for REST APIs and WebSockets/MQTT

---

## 📦 Installation

```bash
# 1. Clone the repo (if applicable)
git clone https://github.com/your-username/iot-backend.git
cd iot-backend

# 2. Install dependencies
npm install

# 3. Copy the env file and configure it
cp .env.example .env
````

---

## 🔐 Environment Variables

### `.env.example`

```env
# Server
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=super_secret_key
JWT_EXPIRES_IN=1d

# Database
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=iot_db

# Optional CORS
CORS_ORIGIN=http://localhost:3001
```

> 🛠️ For production, create a `.env.production` and set `NODE_ENV=production`

---

## 🛠️ Running the App

### Development

```bash
npm run start:dev
```

### Production

```bash
npm run build
npm run start:prod
```

---

## 🧪 API Testing

You can use:

* [Postman](https://www.postman.com/)
* [Thunder Client (VS Code)](https://www.thunderclient.com/)
* Swagger (optional)

### Sample Endpoints

| Method | URL                     | Description            |
| ------ | ----------------------- | ---------------------- |
| POST   | `/auth/login`           | Login & get token      |
| GET    | `/rooms`                | List all rooms         |
| GET    | `/devices/:roomId`      | Devices in a room      |
| POST   | `/actuators/:id/toggle` | Toggle actuator (auth) |

> 🧠 Most routes are protected by JWT + RBAC Guard

---

## 👤 RBAC Structure

### Roles

* `admin`: full access
* `manager`: control devices, assign permissions
* `user`: read-only access to assigned devices

### Permissions Table Example

| userId | resourceType | resourceId | actions      |
| ------ | ------------ | ---------- | ------------ |
| 1      | room         | abc123     | read,control |
| 2      | device       | dev789     | read         |
| 3      | actuator     | act321     | control      |

---

## 🧱 Folder Structure

```bash
src/
├── main.ts
├── app.module.ts
├── config/
├── common/              # Guards, decorators, etc.
├── database/
│   └── entities/
├── interfaces/
└── modules/
    ├── rooms/
    ├── devices/
    ├── actuators/
    ├── sensors/
    ├── auth/
    ├── users/
    └── permissions/
```

---

## 🧪 Running Tests

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e
```

---

## 📄 License

MIT

---

## 🙋‍♂️ Need Help?

Open an issue or contact [yourname@yourdomain.com](mailto:yourname@yourdomain.com).

```

---

## ✅ Bonus: Add `.env` files to `.gitignore`

Be sure your `.env` files are **not committed**:

### `.gitignore`
```

.env
.env.\*

```

---

Would you like:
- Swagger UI auto-generated?
- Docker setup for Postgres + backend?
- Preconfigured Postman collection?

```
