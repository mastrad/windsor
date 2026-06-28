import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  
  if (!token) {
    return NextResponse.json(
      { success: false, error: "Token is missing" },
      { status: 400 }
    );
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json(
      { success: true, email: decoded.email, plan: decoded.plan },
      { status: 200 }
    );
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return NextResponse.json(
        { success: false, error: "Token has expired" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Invalid token" },
      { status: 400 }
    );
  }
}