export default async function getAllBranches() {
    const res = await fetch(
      "http://drnizer.admin.technomasrsystems.com/api/branch",
      {
        headers: {
          lang: "ar",
        },
      }
    );
    if (!res.ok) throw new Error("Failed to Fetch Data");
    return res.json();
  }
  