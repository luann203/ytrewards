import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    
    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: "Stripe secret key not configured" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecretKey);
    const { priceId, clickId } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url:
        "https://www.watchtuberewards.live/thanks?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://www.watchtuberewards.live/cancel",
      metadata: {
        click_id: clickId || "",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}