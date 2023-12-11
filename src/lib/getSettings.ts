

export default async function getSettings() {
    const res = await fetch(`http://drnizer.admin.technomasrsystems.com/api/settings`,{
        headers:{
            lang: "ar"
        }
    })
    if(!res.ok) throw new Error("Failed to Fetch Data")
  return res.json()
}
