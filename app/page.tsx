
import { prisma } from './lib/prisma'

export default async function Home() {

  let users=await prisma.user.findMany();

  return (
    <main className='flex-col  my-3'>
      <h4>Users in sqlite database</h4>
      <ul>
        {users.map(u=>(
          <li key={u.id}>user: {u.username}</li>
        ))}
      </ul>
    </main>
  )
}
