async function get(url){
    let res = await fetch(url)
    return res.json()
}

export default get