'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Protected() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in!
        {JSON.stringify(session, null, 2)}
      </>
    )
  }
  return (
    <>
      Not signed in!
    </>
  )
}