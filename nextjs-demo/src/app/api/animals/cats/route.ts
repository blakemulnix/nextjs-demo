import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/src/auth/nextAuthConfig";
import { getServerSession } from "next-auth";

export async function GET(request: NextRequest, response: NextResponse) {
  const session = await getServerSession(authOptions);
  const data = [
    {
      "id": 1,
      "name": "Whiskers",
      "breed": "Siamese",
      "age": 3
    },
    {
      "id": 2,
      "name": "Mittens",
      "breed": "Tabby",
      "age": 2
    },
    {
      "id": 3,
      "name": "Fluffy",
      "breed": "Persian",
      "age": 5
    }
  ];  
  
  return Response.json({data, session});
}