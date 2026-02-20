import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://n8n.srv1140010.hstgr.cloud/webhook/track-click";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false }, { status: res.status });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
