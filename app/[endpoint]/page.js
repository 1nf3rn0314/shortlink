import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const endpoint = (await params).endpoint;
  
  const client = await clientPromise;
  const db = client.db("shortlink");
  const collection = db.collection("urls");

  const doc = await collection.findOne({ endpoint: endpoint });
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
}
