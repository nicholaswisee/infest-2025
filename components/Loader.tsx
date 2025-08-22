import React from 'react'

function Loader() {
  return (
    <div className="relative h-screen w-full isolate overflow-hidden flex items-center justify-center">
      <div className="text-center">
        <h1 className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-4xl mb-6">
          Dashboard
        </h1>
        <div className="w-12 h-12 border-4 border-white/20 border-t-purple-400 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/80 text-lg">Loading...</p>
      </div>
    </div>
  )
}

export default Loader