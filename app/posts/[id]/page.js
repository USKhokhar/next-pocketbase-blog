

async function getPost(id){
    const api = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`, {
        next: { revalidate: 10 },
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const data = await api.json()

    return data
}

export default async function Post({params}){



    const post = await getPost(params.id)
    // console.log(params.id)
    console.log(post.content)
    
    return(
        <section className="blog-container">
            <h2>{post.title}</h2>
            <sub>{post.subtitle}</sub>
            <p className="created">Created On : {post.created.slice(0, 10)}</p>
            <p className="created">Last Updated : {post.updated.slice(0, 10)}</p>

            <div className="content" 
                dangerouslySetInnerHTML={{
                    __html: post.content
                }}
            />
        </section>
    )
}