import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  console.log(body);

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  // check if the shortURL exits and also checking if user have already add some url and he try to change it.
  const doc = await collection.findOne({ shorturl: body.shorturl });

  if(doc){
    return Response.json({
      success: false,
      error: true,
      message: "URL already exists!",
    });
  }

  const result = collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });
  return Response.json({
    success: true,
    error: false,
    message: "url generated successfully",
  });
}