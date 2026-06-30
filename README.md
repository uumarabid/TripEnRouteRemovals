# Shifting Solutions

Full-stack marketing website for **Shifting Solutions** — professional nationwide UK removals (house, office, student, furniture, piano, and man & van).

Built with **React** (Vite), **Express**, and **TypeScript**, inspired by removals industry layouts with a distinct light theme (teal & amber).

## Features

- Multi-page site: Home, Services (6 detail pages), Coverage, FAQ, Blog, About, Contact
- Light UI with Tailwind CSS and Framer Motion
- **WhatsApp-first contact:** homepage phone and floating button open WhatsApp chat
- Contact form emails **info@shiftingsolutions.co.uk** via SMTP
- Nationwide UK positioning with regional coverage page

## Contact details (site-wide)

|                  |                                            |
| ---------------- | ------------------------------------------ |
| Phone / WhatsApp | 0800 772 0036                              |
| Email            | info@shiftingsolutions.co.uk               |
| Address          | 123 Mitcham Road, Tooting, London SW17 9PE |

## Prerequisites

- Node.js 18+ (20+ recommended)
- npm 8+

## Setup

1. **Install dependencies** (from repo root):

   ```bash
   npm install
   ```

2. **Configure the server** — copy the example env file and add SMTP credentials:

   ```bash
   cp server/.env.example server/.env
   ```

   Edit `server/.env`:

   ```env
   PORT=5000
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-smtp-user
   SMTP_PASS=your-smtp-password
   CONTACT_TO=info@shiftingsolutions.co.uk
   CONTACT_FROM="Shifting Solutions Website" <noreply@yourdomain.com>
   CLIENT_ORIGIN=http://localhost:5173
   ```

3. **Run development** (client + API):

   ```bash
   npm run dev
   ```

   - Frontend: [http://localhost:5173](http://localhost:5173)
   - API: [http://localhost:5000](http://localhost:5000) (proxied via Vite at `/api`)

## Scripts

| Command         | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| `npm run dev`   | Start Vite client and Express API with hot reload                           |
| `npm run build` | Build client (`client/dist`) and compile server                             |
| `npm start`     | Run production server (serves API + built client when `client/dist` exists) |

## Project structure

```
├── client/          # React + Vite + Tailwind
│   └── public/images/
├── server/          # Express API
│   └── src/routes/contact.ts
└── package.json     # npm workspaces
```

## API

- `GET /api/health` — health check
- `POST /api/contact` — contact / quote form (rate limited, Zod validated, sends email)

Example body:

```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "message": "Moving from London to Manchester in June.",
  "phone": "+44 7700 900000",
  "serviceType": "house"
}
```

## WhatsApp links

Phone CTAs use:

`https://wa.me/448007720036`

The floating bottom-right button shows **Contact us** and **WhatsApp** on hover.

## Images

Royalty-free placeholder images live in `client/public/images/`. Replace with your own branded photography for production.

## Production

```bash
npm run build
npm start
```

The Express server serves the built React app from `client/dist` when present, plus the `/api` routes.

## License

Private — Shifting Solutions.
