

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
        <>
        <h1>
            {post.title}
        </h1>
        <h4>{post.subtitle}</h4>
        <p className="created-post-page">Created On: {post.created.slice(0, 10)}</p>
        <p className="updated">Last Updated: {post.updated.slice(0, 10)}</p>
        <div className="content" 
            dangerouslySetInnerHTML={{
                __html: post.content
            }}
        />
        </>
        
    )
}