import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();

  const data = await db.collection("newwebtoons").find({}).limit(10).toArray();
  res.status(200).json({ data });
}
