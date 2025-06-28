# Alatree Venture NFT Marketplace

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a modern NFT marketplace featuring collectible purchases, a daily raffle, and user authentication, powered by Supabase and Stripe.

## Features

- **User Authentication**: Secure sign-in and sign-up using Supabase Auth.
- **NFT Collectibles Marketplace**: Browse, view, and purchase digital collectibles (NFTs).
- **My Collectibles**: Logged-in users can view all NFTs they have purchased, with a special card UI indicating ownership.
- **Stripe Integration**: Secure payments for collectibles using Stripe Checkout. Purchases are only recorded after successful payment via Stripe webhooks.
- **Daily Raffle Widget**: Logged-in users can join a daily raffle to win exclusive NFTs. The widget is fixed to the right side of the main page and includes a live countdown, entry count, and prize info.
- **Supabase Backend**: All data (users, collectibles, purchases, raffle entries) is managed via Supabase tables with Row Level Security (RLS) for user privacy and security.
- **Responsive UI**: Modern, mobile-friendly design using Tailwind CSS.

## Backend (Supabase) Usage

- **Authentication**: Uses Supabase Auth for user management.
- **Database Tables**:
  - `collectibles`: Stores NFT data (id, title, description, price, image_url, created_at).
  - `purchases`: Stores which user bought which collectible. Enforces RLS so users only see their own purchases.
  - `raffle_entries`: Stores each user's entry into the daily raffle (one entry per user per day).
- **Row Level Security (RLS)**: Ensures users can only access their own data in `purchases` and `raffle_entries`.
- **Stripe Webhook**: Listens for successful payments and inserts purchase records into Supabase.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the `my-app` directory with the following:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Database Setup

Create the following tables in Supabase:

- **collectibles**: (id uuid PK, title text, description text, price numeric, image_url text, created_at timestamptz)
- **purchases**: (id uuid PK, user_id uuid, collectible_id uuid, created_at timestamptz)
- **raffle_entries**: (id uuid PK, user_id uuid, created_at timestamptz)

**RLS Example Policy for purchases:**
```sql
CREATE POLICY "Users can view their own purchases"
ON purchases
FOR SELECT
USING (user_id = auth.uid());
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
