"use server";


import { connectToDB } from "@/lib/db";
import Post from "@/models/post.model";

import { NextResponse } from "next/server";





export async function GET(req: Request) {
  try {
    await connectToDB();

    // Parse filter from search params
    const { searchParams } = new URL(req.url);
    const filter = searchParams.get("filter");

    let query = {};
    switch (filter) {
      case "newest":
        break;
      case "most_viewed":
        break;
      case "uncommented":
        query = { comments: { $size: 0 } };
        break;
      default:
        break;
    }

  query = { ...query, isApproved: true };
  const posts = await Post.find(query);

  const response = NextResponse.json(posts);
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
  } catch (error) {
    console.log("[FETCH ALL_POSTS ERROR]", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}