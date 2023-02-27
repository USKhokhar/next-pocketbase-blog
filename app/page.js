import Link from "next/link"

const getPosts = async () => {
    const api = await fetch('http://127.0.0.1:8090/api/collections/posts/records', {
        cache: 'no-cache'
    })

    const response = await api.json()

    return response.items
}

export default async function Home(){
    const posts = await getPosts()
    // posts.map((post) => console.log(post.title))
    return(
        <>
            <h1>Welcome to Home Page</h1>

            <div className="post-container">
            {
                posts.map((post) => {
                    const {id, title} = post

                    return(    
                        <Link href={`/posts/${id}`}>
                            <h5>{title}</h5>
                        </Link>
                    )
                }
                )
            }
            </div>
        </>
    )
}