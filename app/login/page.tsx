import React, { Suspense } from 'react'
import LoginForm from '../../components/LoginForm'
import Loader from '@/components/Loader'

export default function Page() {
  return (
    <main className="relative h-screen w-full isolate overflow-hidden">
      <Suspense fallback={<Loader />}>
        <LoginForm />
      </Suspense>
    </main>
  )
}
