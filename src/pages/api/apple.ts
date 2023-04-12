import { NextApiRequest, NextApiResponse } from "next";

export default function apple(
  req: NextApiRequest,
  res: NextApiResponse
){
  res.status(200).json({ name: 'apple' })
}