export async function GetData() {

    try{

        const res= await fetch("https://api.pexels.com/v1/search?query=flowers&per_page=9", {
            headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY }})
        const data=await res.json()
        return data
    }
    catch(error){
        console.log(error)
    }
    
}