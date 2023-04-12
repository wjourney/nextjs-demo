import { NextApiRequest, NextApiResponse } from "next";

export default function fruit(
  req: NextApiRequest,
  res: NextApiResponse
){
  res.status(200).json({ name: 'apple' + req.query.id })
}