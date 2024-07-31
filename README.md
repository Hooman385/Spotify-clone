# Full Stack Spotify Clone with Next.js 14 App Router: React, Tailwind, Supabase, PostgreSQL, Stripe & TypeScript

Tutorial Followed: Code With Antonio - [Full Stack Spotify Clone](https://www.youtube.com/watch?v=2aeMRB8LL4o)  


Key Features:

- Song upload
- Stripe integration
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites system
- Playlists / Liked songs system
- Advanced Player component
- Stripe recurring payment integration
- POST, GET, and DELETE routes in route handlers (app/api)
- Fetch data in server React components by directly accessing the database
- Cancelling Stripe subscriptions

## Prerequisites
Node version 14.x

## Clone the repository
```
git clone https://github.com/nayak-nirmalya/spotify-clone.git
```
## Install the packages
```
npm install
```
## Set up the .env file
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Setup Database and Storage in [Supabase](https://supabase.com/)

## Available commands
| Command                  | Description                   |
|------------------------|-------------------------|
| `dev`                    | 4242 4242 4242 4242     |
| `build`                 | Starts a building final version for production         |
| `start`        | Run final production build version|
| `stripe:login`        | Login to Stripe from stripe-cli|
| `stripe:listen`	        | Listen to Webhooks for Stripe Events|


> **Note:** In order to subscribe and have a successful test payment in Stripe, the card number should be 4242 4242 4242 4242, and the expiry date should be a future date. If a postal code is needed, you can easily Google one or use 1234 AB for the Netherlands.

