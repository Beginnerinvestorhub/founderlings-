import { NextResponse } from "next/server";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYVPJZo8ZJy6fLkPeGpAqU1m-gfCLGUDiOI8rsW1ryvOqpiAUrAed-BzUkuiqkpMbT0q98bPntSMLp/pub?output=csv";

export async function GET() {
  const res = await fetch(SHEET_CSV_URL);

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch sheet" }, { status: 500 });
  }

  const text = await res.text();
  const rows = text.trim().split("\n").filter((r) => r.trim() !== "");
  const count = Math.max(0, rows.length - 1);

  return NextResponse.json({ count });
}