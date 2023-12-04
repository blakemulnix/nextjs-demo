import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/src/auth/nextAuthConfig";
import { getServerSession } from "next-auth";

export async function GET(request: NextRequest, response: NextResponse) {
  const session = await getServerSession(authOptions);

  const data = [
    {
      "id": 1,
      "name": "Buddy",
      "breed": "Golden Retriever",
      "age": 2
    },
    {
      "id": 2,
      "name": "Max",
      "breed": "German Shepherd",
      "age": 3
    },
    {
      "id": 3,
      "name": "Daisy",
      "breed": "Labrador Retriever",
      "age": 1
    }
  ]
  
  return Response.json(data);
}