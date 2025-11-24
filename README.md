# Template App (MERN, JWT)

A minimal **Template Builder** app using the MERN stack with JWT authentication.
This repository is designed for interviews: the codebase is small but realistic
and covers full‑stack concerns.

The domain is intentionally simple: a **Template** is just:

```ts
{
  name: string;
  fields: {
    label: string;
    type: "text" | "number";
  }[];
}
```

There is **no form filling** and **no submission**. The app focuses purely on defining
and saving the template structure.

## Features

- Email + password login (JWT-based)
- Authenticated endpoints
  - `GET /api/templates/default` – fetch the latest template
  - `POST /api/templates` – create a new template
- Single-page Template Editor (React):
  - Edit template name
  - Add / remove fields
  - Field types: `text`, `number`

## Tech Stack

- Backend: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt
- Frontend: React 18, Axios
- Auth: JWT access token stored in `localStorage`, attached via Axios interceptor

## Project Structure

```text
template-app/
  server/
    src/
      config/
        db.js
      models/
        User.js
        Template.js
      middleware/
        auth.js
      controllers/
        authController.js
        templateController.js
      routes/
        authRoutes.js
        templateRoutes.js
  client/
    src/
      api/
        client.js
        authApi.js
        templateApi.js
      context/
        AuthContext.js
      pages/
        LoginPage.js
        TemplatePage.js
      components/
        FieldEditor.js
      index.js
      App.js
```

## Backend Setup

```bash
cd server
npm install
```

Create `.env` in `server`:

```env
MONGO_URI=mongodb://localhost:27017/template_app
JWT_SECRET=change_me_in_real_life
PORT=5000
```

Seed at least one user manually (mongo shell / Compass / simple script), e.g.:

```js
{
  email: "test@example.com",
  passwordHash: "<bcrypt hash of 'password123'>"
}
```

Then run:

```bash
npm run dev
```

## Frontend Setup

The client `package.json` is minimal and assumes you will plug it into your
own tooling (CRA / Vite / webpack) that uses `src/index.js` as the entry.

```bash
cd client
npm install
# Then wire a bundler to use src/index.js
```

For interview usage, the expectation is **code reading and explanation**, not
necessarily running everything end‑to‑end.

## Intended Use (Interview)

Give this repo to a candidate and ask them to:

- Explain what the app does, end‑to‑end
- Describe the JWT authentication flow
- Walk through the Template data model (`Template`, fields)
- Show where API calls happen and trace the data flow front ↔ back
- Identify good practices and weak points
- Propose how they would extend it (versioning, more field types, RBAC, etc.)

See `interview_questions.md` for ready‑made questions and model answers.
