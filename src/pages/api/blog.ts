import { NextApiRequest, NextApiResponse } from "next";

interface Post{
  id:number
  title: string
}

export default function blog(
  req: NextApiRequest,
  res: NextApiResponse
){
  const postList: Post[] = []
  for(let index=0; index<10; index++){
    postList.push({
      id:index,
      title: "title" + index
    })
  }

  res.status(200).json(
postList
  )
}