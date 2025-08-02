import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const body = await req.json();
  
  const client = await clientPromise;
  const db = client.db("shortlink");
  const collection = db.collection("urls");

  // Check if the endpoint exists
  const doc = await collection.findOne({ endpoint: body.endpoint });
  if (doc) {
    return Response.json({ success: false, message: "Short URL exists"})
  }
  
  await collection.insertOne({
    url: body.url,
    endpoint: body.endpoint
  });

  return Response.json({ success: true, message: "URL shortened" });
}
