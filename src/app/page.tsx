'use client'

import React from 'react'
import TokenTable from '@/app/components/tables/token_table'

const tokens = [
  { symbol: 'ETH', name: 'Ethereum', initialPrice: 2100 },
  { symbol: 'BTC', name: 'Bitcoin', initialPrice: 32000 },
  { symbol: 'SOL', name: 'Solana', initialPrice: 34 },
  { symbol: 'ADA', name: 'Cardano', initialPrice: 0.45 },
  { symbol: 'DOT', name: 'Polkadot', initialPrice: 6.5 },
  { symbol: 'BNB', name: 'Binance Coin', initialPrice: 300 },
  { symbol: 'XRP', name: 'Ripple', initialPrice: 0.75 },
  { symbol: 'LTC', name: 'Litecoin', initialPrice: 120 },
  { symbol: 'DOGE', name: 'Dogecoin', initialPrice: 0.07 },
]

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Crypto Token Ready to Buy/Sell</h1>
      <TokenTable tokens={tokens} />
    </div>
  )
}

