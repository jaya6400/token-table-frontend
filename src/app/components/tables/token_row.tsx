'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Popover from '@radix-ui/react-popover'
import { IconType } from 'react-icons'

type Props = {
  symbol: string
  name: string
  price: number
  changePercent: number
  onOpen: (s: string) => void
  Icon?: IconType
}

const green = '#34D399' // emerald-400
const red = '#F87171'   // red-400
const neutral = '#E5E7EB' // gray-200

export default function TokenRow({ symbol, name, price, changePercent, onOpen, Icon }: Props) {
  const [flash, setFlash] = useState<'up' | 'down' | null>(null)

  useEffect(() => {
    if (changePercent > 0) setFlash('up')
    else if (changePercent < 0) setFlash('down')
    const t = setTimeout(() => setFlash(null), 600)
    return () => clearTimeout(t)
  }, [changePercent])

  return (
    <div className="token-row flex items-center justify-between p-3 hover:bg-gray-800 cursor-pointer">
      {/* Left: Logo + Name */}
      <div className="token-info flex items-center gap-3">
        {Icon ? (
          <Icon className="text-2xl" />
        ) : (
          <div className="token-logo w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-sm font-semibold">
            {symbol.slice(0, 2)}
          </div>
        )}
        <div className="token-text">
          <div className="token-name font-semibold">{name}</div>
          <div className="token-symbol text-gray-400 text-sm">{symbol}</div>
        </div>
      </div>

      {/* Right: Price + Actions */}
      <div className="token-right flex items-center gap-4">
        <div className="token-price text-right">
          <motion.div
            animate={{ color: flash === 'up' ? green : flash === 'down' ? red : neutral }}
            transition={{ duration: 0.35 }}
            className="token-price-value font-mono"
          >
            ${price.toFixed(2)}
          </motion.div>
          <div className={`token-change text-sm ${changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {changePercent >= 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`}
          </div>
        </div>

        <div className="token-actions">
          <Popover.Root>
            <Popover.Trigger asChild>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="actions-button px-3 py-1 bg-gray-700 rounded-md text-sm"
              >
                Actions
              </motion.button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="popover-content bg-gray-900 rounded-md p-2 shadow-lg" sideOffset={6}>
                <button onClick={() => onOpen(symbol)} className="popover-btn block w-full text-left p-1 hover:bg-gray-700 rounded">View Details</button>
                <button className="popover-btn block w-full text-left p-1 hover:bg-gray-700 rounded">Buy</button>
                <button className="popover-btn block w-full text-left p-1 hover:bg-gray-700 rounded">Sell</button>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>
    </div>
  )
}