import React from "react";

interface Post{
  id:number
  title: string
}

function Blog({posts}:{posts: Post[]}){
  return (
    <div>
      <ul>
        {posts?.map((p) => (
          <li key={p.id}>
            {
              p.title
            }gg
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps(){
  const postList: Post[] = []
  const res = await fetch('http://localhost:3000/api/blog')
  const posts = await res.json()
  return {
    props:{
      posts: posts,
    }
  }
}

export default Blog