export default async function handler(req, res) {
  const id = process.env.HOSTED_MANIFEST_ID; // set this in Vercel > Settings > Environment Variables
  const r = await fetch(
    `https://api.farcaster.xyz/miniapps/hosted-manifest/${01998292-2120-9760-43ef-aa2ae8ae6f2f}`,
    { headers: { accept: "application/json" }, cache: "no-store" }
  );
  if (!r.ok) {
    return res.status(502).json({ error: "Upstream hosted manifest not available" });
  }
  const json = await r.json();
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.status(200).send(JSON.stringify(json));
}
