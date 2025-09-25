# Crypto Prediction Mini App (Top 100 + Search)

This build auto-loads the **top 100 coins** by market cap from CoinGecko and adds a **search box** to filter by name/symbol.
- No API keys required (CoinGecko public endpoints).
- Works as a Farcaster Mini App (embed tags + SDK included).

## Run locally
- Open in VS Code → install **Live Server** → right-click `index.html` → *Open with Live Server*.
- Start typing in the **Search** box to filter coins. Select a coin, set horizon/strike, and buy YES/NO with credits.
- After expiry, click **Settle** (uses CoinGecko historical prices).

## Deploy (Vercel)
- Push to a GitHub repo → **vercel.com → Add New Project** → import → deploy.
- Optional: Replace `YOUR_HOSTED_MANIFEST_ID` in `vercel.json` with your Hosted Manifest ID (Warpcast Developer Mode).
