# FORTUNA GmbH – Website

A responsive React website inspired by the supplied reference screenshot, with an Express backend for the contact form.

## Requirements
- Node.js 20 LTS (or newer supported LTS)
- npm
- A hosting plan that supports Node.js for the full contact-form backend

## Run locally
1. Extract this folder.
2. Open a terminal in the project folder.
3. Run `npm install`
4. Copy `.env.example` to `.env` and configure SMTP (see below).
5. Run `npm run dev`
6. Open the Vite URL shown in the terminal (usually `http://localhost:5173`).

## Production build
```bash
npm install
npm run build
npm start
```
The Express server serves the built `dist` folder and exposes `/api/contact`.

## Configure email
Copy `.env.example` to `.env` and enter the SMTP settings from your email provider:
- `SMTP_HOST`: outgoing mail server
- `SMTP_PORT`: commonly 587
- `SMTP_SECURE`: `false` for STARTTLS on port 587; `true` for implicit TLS on port 465
- `SMTP_USER` and `SMTP_PASS`: SMTP credentials or app password
- `CONTACT_TO`: inbox that should receive website enquiries
- `CONTACT_FROM`: optional sender address permitted by your provider

Do not upload `.env` to public source control. If SMTP is not configured, the API intentionally reports that the form is not yet connected to email.

## Deployment
Deploy to a Node.js hosting provider:
1. Upload the project or connect the repository.
2. Set build command to `npm install && npm run build`.
3. Set start command to `npm start`.
4. Add environment variables from `.env.example` in the hosting dashboard.
5. Attach your domain and enable HTTPS.

For shared hosting that only supports static files/PHP, this Node backend will not run. You can host the frontend separately and connect the form to a hosted form endpoint or a PHP mail handler.

## Before publishing
Please replace demo contact details, project examples, and stock photography with the company's real information and licensed images. The phone number, email, address, project locations, and opening hours shown are placeholders from the visual concept, not verified business details. Add real legal notice and privacy policy pages before collecting customer data.
