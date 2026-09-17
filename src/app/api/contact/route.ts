import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function escapeCSV(field: string): string {
  if (field.includes(",") || field.includes('"') || field.includes("\n")) {
    return `"${field.replace(/"/g, '""')}"`;
  }
  return field;
}

export async function POST(request: Request) {
  try {
    let data: Record<string, unknown> = {};
    try {
      data = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format in request." },
        { status: 400 }
      );
    }

    const { website, name, phone, email, city, service, message } = data as {
      website?: string;
      name?: string;
      phone?: string;
      email?: string;
      city?: string;
      service?: string;
      message?: string;
    };

    // Honeypot check for bots
    if (website && website.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Thank you for contacting us!",
      });
    }

    const trimmedName = (name || "").trim();
    const trimmedPhone = (phone || "").trim();
    const trimmedEmail = (email || "").trim();
    const trimmedCity = (city || "Delhi").trim();
    const trimmedService = (service || "Not sure yet").trim();
    const trimmedMessage = (message || "").trim();

    if (!trimmedName || !trimmedPhone) {
      return NextResponse.json(
        { success: false, error: "Please share your name and phone number." },
        { status: 400 }
      );
    }

    if (trimmedEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid email address." },
          { status: 400 }
        );
      }
    }

    // Save lead to CSV file
    const csvPath = path.join(process.cwd(), "leads.csv");
    const timestamp = new Date().toISOString().replace("T", " ").substring(0, 19);
    const row = [
      timestamp,
      trimmedName,
      trimmedPhone,
      trimmedEmail,
      trimmedCity,
      trimmedService,
      trimmedMessage,
    ]
      .map(escapeCSV)
      .join(",") + "\n";

    if (!fs.existsSync(csvPath)) {
      const header = "Timestamp,Name,Phone,Email,City,Service,Message\n";
      fs.writeFileSync(csvPath, header + row, "utf-8");
    } else {
      fs.appendFileSync(csvPath, row, "utf-8");
    }

    return NextResponse.json({
      success: true,
      message:
        "Thanks — your message is in. Our team will reach out shortly.",
    });
  } catch (err: unknown) {
    console.error("Error saving lead:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
