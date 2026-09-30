import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { inquiries } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, budget, timeline, message } = body ?? {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please add a short description of your project (at least 10 characters)." },
        { status: 400 },
      );
    }

    const db = getDb();
    const [inserted] = await db
      .insert(inquiries)
      .values({
        name: name.trim(),
        email: email.trim(),
        phone: typeof phone === "string" ? phone.trim() || null : null,
        projectType: typeof projectType === "string" ? projectType : null,
        budget: typeof budget === "string" ? budget : null,
        timeline: typeof timeline === "string" ? timeline : null,
        message: message.trim(),
      })
      .returning({ id: inquiries.id });

    return NextResponse.json({ ok: true, id: inserted.id });
  } catch (err) {
    console.error("Inquiry insert failed:", err);
    return NextResponse.json(
      { error: "We couldn't submit the inquiry right now. Please call or text instead." },
      { status: 500 },
    );
  }
}
