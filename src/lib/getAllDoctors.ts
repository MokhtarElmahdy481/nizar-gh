export default async function getAllDoctors() {
  const res = await fetch(
    "http://drnizer.admin.technomasrsystems.com/api/doctore",
    {
      headers: {
        lang: "ar",
      },
    }
  );
  if (!res.ok) throw new Error("Failed to Fetch Data");
  return res.json();
}
