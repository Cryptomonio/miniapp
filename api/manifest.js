// Proxies your Warpcast Hosted Manifest to /.well-known/farcaster.json on your domain.
// Set HOSTED_MANIFEST_ID in Vercel > Project > Settings > Environment Variables.

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end("Method Not Allowed");

  const id = process.env.HOSTED_MANIFEST_ID;
  if (!id) {
    return res
      .status(500)
      .json({ error: "Missing env var HOSTED_MANIFEST_ID in Vercel settings" });
  }

  try {
    const upstream = await fetch(
      `https://api.farcaster.xyz/miniapps/hosted-manifest/${=01998292-2120-9760-43ef-aa2ae8ae6f2f}`,
      { headers: { accept: "application/json" }, cache: "no-store" }
    );

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      return res
        .status(502)
        .json({ error: "Hosted manifest not available", status: upstream.status, body: text });
    }

    const json = await upstream.json();
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.setHeader("cache-control", "no-store");
    return res.status(200).send(JSON.stringify(json));
  } catch (err) {
    return res.status(500).json({ error: "Fetch failed", detail: String(err) });
  }
}
