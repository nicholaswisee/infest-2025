import React, { Suspense } from 'react'
import LoginForm from '../../components/LoginForm'

export default function Page() {
  return (
    <main className="relative h-screen w-full isolate overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  )
}
