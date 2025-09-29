'use client'

import { useEffect, useState } from 'react'

export function useWebsocketMock(symbols: string[]) {
  const [ticks, setTicks] = useState<Record<string, { price: number; changePercent: number }>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initial: Record<string, { price: number; changePercent: number }> = {}
    symbols.forEach((s) => {
      initial[s] = { price: Math.random() * 1000, changePercent: 0 }
    })
    setTicks(initial)
    setIsLoading(false)

    const interval = setInterval(() => {
      setTicks((prev) => {
        const updated = { ...prev }
        symbols.forEach((s) => {
          const oldPrice = prev[s]?.price || 100
          const change = (Math.random() - 0.5) * 2
          const newPrice = oldPrice + change
          updated[s] = {
            price: newPrice,
            changePercent: ((newPrice - oldPrice) / oldPrice) * 100,
          }
        })
        return updated
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [symbols])

  return { ticks, isLoading }
}
