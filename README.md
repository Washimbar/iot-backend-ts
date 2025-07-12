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
git clone https://github.com/Washimbar/iot-backend-ts
cd iot-backend-ts

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
│
├── config/                        # Environment and config files
│   ├── config.module.ts
│   ├── database.config.ts
│   ├── jwt.config.ts
│   └── swagger.config.ts
│
├── common/                        # Shared logic across app
│   ├── decorators/
│   │   ├── roles.decorator.ts
│   │   └── permissions.decorator.ts
│   ├── guards/
│   │   ├── jwt-auth.guard.ts
│   │   └── roles.guard.ts
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── interceptors/
│   │   └── logging.interceptor.ts
│   ├── pipes/
│   │   └── validation.pipe.ts
│   └── utils/
│       └── helper.util.ts
│
├── database/
│   ├── entities/                  # Cross-module shared entities (if needed)
│   │   └── base.entity.ts
│   ├── migrations/
│   └── seeders/
│
├── interfaces/
│   ├── jwt-payload.interface.ts
│   ├── user.interface.ts
│   └── permission.interface.ts
│
├── modules/
│   ├── rooms/
│   │   ├── rooms.module.ts
│   │   ├── rooms.controller.ts
│   │   ├── rooms.service.ts
│   │   ├── entities/
│   │   │   └── room.entity.ts
│   │   └── dto/
│   │       ├── create-room.dto.ts
│   │       └── update-room.dto.ts
│   │
│   ├── devices/
│   │   ├── devices.module.ts
│   │   ├── devices.controller.ts
│   │   ├── devices.service.ts
│   │   ├── entities/
│   │   │   └── device.entity.ts
│   │   ├── dto/
│   │   │   ├── create-device.dto.ts
│   │   │   └── update-device.dto.ts
│   │   └── policies/
│   │       └── device-access.guard.ts
│   │
│   ├── actuators/
│   │   ├── actuators.module.ts
│   │   ├── actuators.controller.ts
│   │   ├── actuators.service.ts
│   │   ├── entities/
│   │   │   └── actuator.entity.ts
│   │   └── dto/
│   │       ├── create-actuator.dto.ts
│   │       └── update-actuator.dto.ts
│   │
│   ├── sensors/
│   │   ├── sensors.module.ts
│   │   ├── sensors.controller.ts
│   │   ├── sensors.service.ts
│   │   ├── entities/
│   │   │   └── sensor.entity.ts
│   │   └── dto/
│   │       ├── create-sensor.dto.ts
│   │       └── update-sensor.dto.ts
│   │
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── entities/
│   │   │   └── user.entity.ts
│   │   └── dto/
│   │       ├── create-user.dto.ts
│   │       └── update-user.dto.ts
│   │
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── jwt.strategy.ts
│   │   ├── local.strategy.ts
│   │   └── dto/
│   │       ├── login.dto.ts
│   │       └── register.dto.ts
│   │
│   └── permissions/
│       ├── permissions.module.ts
│       ├── permissions.service.ts
│       ├── rbac.guard.ts
│       ├── permissions.controller.ts
│       └── entities/
│           └── permission.entity.ts
│
├── tasks/                         # Scheduled jobs / cron tasks
│   └── device-health-check.task.ts
│
├── ws-gateway/                    # WebSocket or MQTT Gateway (optional)
│   ├── ws.module.ts
│   └── device.gateway.ts
│
└── test/                          # Unit and e2e tests
    ├── app.e2e-spec.ts
    └── jest-e2e.json

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
