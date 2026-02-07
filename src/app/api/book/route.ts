import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "asriidev@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, address, preferredDate, preferredTime, email, message } = body;

    if (!name?.trim() || !phone?.trim() || !address?.trim() || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Name, phone, address, preferred date, and preferred time are required." },
        { status: 400 }
      );
    }

    const html = `
      <h2>New Book a Service request – Cold Army</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Address:</strong> ${escapeHtml(address)}</p>
      <p><strong>Preferred date:</strong> ${escapeHtml(preferredDate)}</p>
      <p><strong>Preferred time:</strong> ${escapeHtml(preferredTime)}</p>
      <p><strong>Email:</strong> ${email ? escapeHtml(email) : "(not provided)"}</p>
      <p><strong>What do they need?</strong></p>
      <p>${message ? escapeHtml(message) : "(not provided)"}</p>
      <hr />
      <p><em>Sent from Cold Army website contact form.</em></p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Cold Army Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `Book a Service: ${escapeHtml(name)}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Book API error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send email." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m] ?? m);
}
