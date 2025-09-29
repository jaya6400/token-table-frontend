'use client'

import React, { useState } from 'react'
import TokenTable from '@/app/components/tables/token_table'

const TOKENS_20 = [
  { symbol: 'BTC', name: 'Bitcoin', initialPrice: 32234.8 },
  { symbol: 'ETH', name: 'Ethereum', initialPrice: 2091.93 },
  { symbol: 'SOL', name: 'Solana', initialPrice: 34.03 },
  { symbol: 'ADA', name: 'Cardano', initialPrice: 0.45 },
  { symbol: 'DOT', name: 'Polkadot', initialPrice: 6.47 },
  { symbol: 'BNB', name: 'Binance Coin', initialPrice: 299.27 },
  { symbol: 'XRP', name: 'Ripple', initialPrice: 0.75 },
  { symbol: 'LTC', name: 'Litecoin', initialPrice: 119.57 },
  { symbol: 'DOGE', name: 'Dogecoin', initialPrice: 0.07 },
  { symbol: 'LINK', name: 'Chainlink', initialPrice: 7.12 },
  { symbol: 'UNI', name: 'Uniswap', initialPrice: 6.98 },
  { symbol: 'AVAX', name: 'Avalanche', initialPrice: 45.12 },
  { symbol: 'MATIC', name: 'Polygon', initialPrice: 1.10 },
  { symbol: 'FTM', name: 'Fantom', initialPrice: 0.35 },
  { symbol: 'NEAR', name: 'NEAR', initialPrice: 3.50 },
  { symbol: 'ALGO', name: 'Algorand', initialPrice: 0.90 },
  { symbol: 'ATOM', name: 'Cosmos', initialPrice: 11.00 },
  { symbol: 'SUSHI', name: 'Sushi', initialPrice: 2.50 },
  { symbol: 'MKR', name: 'Maker', initialPrice: 1200 },
  { symbol: 'COMP', name: 'Compound', initialPrice: 80.00 },
]

// For this demo we reuse same 20 tokens per tab — you can change arrays to other tokens if you like
const newPairs = TOKENS_20
const finalStretch = TOKENS_20
const migrated = TOKENS_20

export default function Page() {
  const [activeTab, setActiveTab] = useState<'newPairs' | 'finalStretch' | 'migrated'>('newPairs')

  return (
    <div className="p-6 md:p-8 space-y-6">
      <h1 className="text-3xl font-bold">Crypto Token Tracker</h1>

      {/* Tabs */}
      <div className="flex items-center gap-3 border-b border-gray-700 pb-3">
        <button
          onClick={() => setActiveTab('newPairs')}
          className={`px-4 py-2 rounded-md ${
            activeTab === 'newPairs'
              ? 'bg-gray-800 text-white font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          New Pairs
        </button>

        <button
          onClick={() => setActiveTab('finalStretch')}
          className={`px-4 py-2 rounded-md ${
            activeTab === 'finalStretch'
              ? 'bg-gray-800 text-white font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Final Stretch
        </button>

        <button
          onClick={() => setActiveTab('migrated')}
          className={`px-4 py-2 rounded-md ${
            activeTab === 'migrated'
              ? 'bg-gray-800 text-white font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Migrated
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'newPairs' && <TokenTable tokens={newPairs} />}
        {activeTab === 'finalStretch' && <TokenTable tokens={finalStretch} />}
        {activeTab === 'migrated' && <TokenTable tokens={migrated} />}
      </div>
    </div>
  )
}