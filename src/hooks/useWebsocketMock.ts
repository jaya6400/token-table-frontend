import { useEffect, useState } from 'react'

type TokenTick = {
  price: number
  changePercent: number
}

type TokenInput = {
  symbol: string
  price: number
}

export function useWebsocketMock(tokens: TokenInput[]) {
  const [ticks, setTicks] = useState<Record<string, TokenTick>>(() => {
    const initial: Record<string, TokenTick> = {}
    tokens.forEach((t) => {
      initial[t.symbol] = { price: t.price, changePercent: 0 }
    })
    return initial
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // run updates client-side only
    const interval = setInterval(() => {
      setTicks((prev) => {
        const updated: Record<string, TokenTick> = { ...prev }
        tokens.forEach((t) => {
          const oldPrice = prev[t.symbol]?.price ?? t.price
          // +/- 0.5% fluctuation for visible but smooth changes
          const change = oldPrice * (Math.random() * 0.01 - 0.005)
          const newPrice = +(oldPrice + change).toFixed(2)
          const changePercent = +( ((newPrice - oldPrice) / (oldPrice || 1)) * 100 ).toFixed(2)
          updated[t.symbol] = { price: newPrice, changePercent }
        })
        return updated
      })
      setIsLoading(false)
    }, 1000)

    return () => clearInterval(interval)
  }, [tokens])

  return { ticks, isLoading }
}