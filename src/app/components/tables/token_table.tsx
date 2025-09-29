'use client'

import React from 'react'
import TokenRow from './token_row'
import TokenSkeleton from './token_skeleton'
import { useWebsocketMock } from '@/hooks/useWebsocketMock'

type Token = {
  symbol: string
  name: string
  initialPrice?: number
}

type Props = {
  tokens: Token[]
}

export default function TokenTable({ tokens }: Props) {
  // Initialize mock WebSocket with optional initial prices
  const { ticks, isLoading } = useWebsocketMock(
    tokens.map(t => ({ symbol: t.symbol, price: t.initialPrice || 0 }))
  )

  if (isLoading) {
    return (
      <div className="overflow-x-auto border rounded-lg">
        <div className="min-w-[600px]">
          {tokens.map((_, i) => (
            <TokenSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  const handleOpen = (symbol: string) => {
    alert(`Open modal for ${symbol}`)
  }

  return (
    <div className="overflow-x-auto border rounded-lg">
      <div className="min-w-[600px]">
        {tokens.map((t) => (
          <TokenRow
            key={t.symbol}
            symbol={t.symbol}
            name={t.name}
            price={ticks[t.symbol]?.price || 0}
            changePercent={ticks[t.symbol]?.changePercent || 0}
            onOpen={handleOpen}
          />
        ))}
      </div>
    </div>
  )
}
