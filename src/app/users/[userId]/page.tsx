import getUser from "@/lib/getUser";

type Params = {
    params: {
        userId : string
    }
}

export default async function UserPage({params}:Params) {
    const {userId} = params
    const userData = getUser(userId)
    const user = await userData
  return (
    <div>UserPage</div>
  )
}
// export async function generateStaticParams(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     // Generate static paths for all users
//     // let paths: string[] = [];
//     // data.forEach((user:User)=>{
//     //     paths.push(`/user/${user.id}`);
//     //     })
//     //     return {paths, fallback: false};
    

// }

export function generateStaticParams() {
    return [{ userId: '1' }, { userId: '2' }, { userId: '3' }]
  }
