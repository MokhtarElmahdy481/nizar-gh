

export default async function getAboutUs() {
    const res = await fetch("http://drnizer.admin.technomasrsystems.com/api/aboutUs",{
      headers:{
          lang: "ar"
      }
  })
    if(!res.ok) throw new Error("Failed to Fetch Data")
  return res.json()
}
