

export default async function getAboutDrNazar() {
    const res = await fetch("http://drnizer.admin.technomasrsystems.com/api/aboutDrNazar",{
      headers:{
          lang: "ar"
      }
  })
    if(!res.ok) throw new Error("Failed to Fetch Data")
  return res.json()
}
