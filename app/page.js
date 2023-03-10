import Link from "next/link"

const getPosts = async () => {
    const api = await fetch(`${process.env.ADMIN_URL}/api/collections/posts/records`, {
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
        <h1>Read Straight From dUSKy's Dusky Desk 💙 </h1>
            <div className="post-container">
            {
                posts.map((post) => {
                    const {id, title, subtitle, created} = post

                    return(    
                        <Link style={{textDecoration: 'none'}} href={`/posts/${id}`}>
                            <article className="post">
                                <h3>{title}</h3>
                                <sub>{subtitle}</sub>
                                <p className="created">{created.slice(0, 10)}</p>
                            </article>
                        </Link>
                    )
                }
                )
            }
            </div>
        </>
    )
}