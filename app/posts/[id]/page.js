const getData = async ({id}) => {
    const api = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`, {
        next: {
            revalidate: 10,
        }
    })

    const res = api.json()

    return res
}

export default async function Post({params}){
    console.log(params.id)
    const data = await getData(params.id)
    console.log(data)

    return(
        <>
            {/* <h1>{data.title}</h1> */}
        </>
    )
}