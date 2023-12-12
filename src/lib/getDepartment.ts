

export default async function getDepartments() {
    const res = await fetch("http://drnizer.admin.technomasrsystems.com/api/department",{
      headers:{
          lang: "ar"
      }
  })
    if(!res.ok) throw new Error("Failed to Fetch Data")
  return res.json()
}
