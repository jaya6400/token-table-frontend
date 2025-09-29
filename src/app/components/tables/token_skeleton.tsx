'use client'

import React from 'react'

export default function TokenSkeleton() {
  return (
    <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-200 animate-pulse">
      <div className="w-10 h-10 bg-gray-200 rounded-full" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-24 bg-gray-200 rounded" />
        <div className="h-2 w-16 bg-gray-200 rounded" />
      </div>
      <div className="w-32 space-y-2 text-right">
        <div className="h-3 w-20 bg-gray-200 rounded ml-auto" />
        <div className="h-2 w-10 bg-gray-200 rounded ml-auto" />
      </div>
      <div className="h-6 w-14 bg-gray-200 rounded" />
    </div>
  )
}
