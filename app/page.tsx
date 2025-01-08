import { Post } from "@/app/lib/types";
import Link from "next/link";

export default async function Home() {
  const data = await fetch('http://localhost:3001/api/v1/posts')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post: Post) => (
        <div key={post.title}>{post.content}
          <Link href={`posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </ul>
  )
}
