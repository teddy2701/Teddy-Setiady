import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "public",
    "cvTeddySetiady.pdf"
  );
  const fileContents = fs.readFileSync(filePath);

  return new NextResponse(fileContents, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=cvTeddySetiady.pdf",
    },
  });
}
