import ButtonLink from '@/src/components/ButtonLink'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="text-white p-4">
        <ul className="flex space-x-4 justify-center items-center">
          <li className='text-2xl mr-5 font-bold'>
            Next.js Demo
          </li>
          <li>
            <ButtonLink href="/client">Client Page</ButtonLink>
          </li>
          <li>
            <ButtonLink href="/server">Server Page</ButtonLink>
          </li>
          <li>
            <ButtonLink href="/static">Static Page</ButtonLink>
          </li>
          <li>
            <ButtonLink href="/protected">Protected Page</ButtonLink>
          </li>
        </ul>
      </nav>
      {children}
    </>
  )
}
