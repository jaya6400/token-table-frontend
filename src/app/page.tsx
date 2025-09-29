'use client'

import React from 'react'
import TokenTable from '@/app/components/tables/token_table'

const tokens = [
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'ADA', name: 'Cardano' },
]

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Token Discovery Table</h1>
      <TokenTable tokens={tokens} />
    </div>
  )
}

