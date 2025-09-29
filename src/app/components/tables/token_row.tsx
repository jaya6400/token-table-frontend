'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Popover from '@radix-ui/react-popover'

type Props = {
  symbol: string
  name: string
  price: number
  changePercent: number
  onOpen: (s: string) => void
}

const green = '#34D399' // tailwind emerald-400
const red = '#F87171' // tailwind red-400
const neutral = '#E5E7EB' // tailwind gray-200 (lightish for dark bg)

export default function TokenRow({ symbol, name, price, changePercent, onOpen }: Props) {
  const [flash, setFlash] = useState<'up' | 'down' | null>(null)

  // Only depend on changePercent — prevents rapid re-triggering
  useEffect(() => {
    if (changePercent > 0) setFlash('up')
    else if (changePercent < 0) setFlash('down')
    const t = setTimeout(() => setFlash(null), 600)
    return () => clearTimeout(t)
  }, [changePercent])

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-3 border-b border-gray-700 hover:bg-gray-800">
      {/* left: avatar + name */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs font-semibold text-gray-200">
          {symbol.slice(0, 2)}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-medium truncate">{name}</div>
          <div className="text-xs text-gray-400 truncate">{symbol}</div>
        </div>
      </div>

      {/* center: price (stack on mobile) */}
      <div className="mt-2 md:mt-0 md:w-32 text-right">
        <motion.div
          // animate color using framer motion for a smooth transition
          animate={{ color: flash === 'up' ? green : flash === 'down' ? red : neutral }}
          transition={{ duration: 0.35 }}
          className="text-lg font-medium"
        >
          {price.toFixed(2)}
        </motion.div>
        <div className={`text-xs font-semibold ${changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {changePercent >= 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`}
        </div>
      </div>

      {/* right: actions — stacks below on small screens */}
      <div className="mt-2 md:mt-0 md:ml-4 flex-shrink-0">
        <Popover.Root>
          <Popover.Trigger asChild>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`Actions for ${name}`}
              className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Actions
            </motion.button>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content className="w-40 bg-gray-800 border border-gray-700 rounded shadow-md p-2 text-white" sideOffset={6}>
              <button
                onClick={() => onOpen(symbol)}
                className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-700"
              >
                View Details
              </button>
              <button className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-700">
                Buy
              </button>
              <button className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-700">
                Sell
              </button>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  )
}