'use client'

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import * as Popover from "@radix-ui/react-popover"

type Props = {
  symbol: string
  name: string
  price: number
  changePercent: number
  onOpen: (s: string) => void
}

const TokenRow: React.FC<Props> = ({ symbol, name, price, changePercent, onOpen }) => {
  const [flash, setFlash] = useState<"up" | "down" | null>(null)

  // ✅ Only depend on changePercent to prevent rapid flashing
  useEffect(() => {
    if (changePercent > 0) setFlash("up")
    else if (changePercent < 0) setFlash("down")

    const timeout = setTimeout(() => setFlash(null), 600)
    return () => clearTimeout(timeout)
  }, [changePercent])

  return (
    <div className="flex items-center gap-4 px-4 py-3 transition-colors border-b border-gray-700 hover:bg-gray-800 dark:hover:bg-gray-700">
      {/* Avatar */}
      <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-xs font-semibold text-gray-200">
        {symbol[0]}
      </div>

      {/* Name & Symbol */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">{name}</div>
        <div className="text-xs text-gray-400 truncate">{symbol}</div>
      </div>

      {/* Price & Change */}
      <div className="w-32 text-right flex flex-col items-end">
        <motion.div
          layout
          className={`font-medium transition-colors duration-300 ${
            flash === "up"
              ? "text-green-400"
              : flash === "down"
              ? "text-red-400"
              : "text-gray-200"
          }`}
        >
          {price.toFixed(2)}
        </motion.div>
        <div
          className={`text-xs font-semibold ${
            changePercent >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {changePercent >= 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`}
        </div>
      </div>

      {/* Actions */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="ml-4 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
            Actions
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className="w-40 bg-gray-800 border border-gray-700 rounded shadow-md p-2"
            sideOffset={4}
          >
            <button
              className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-700"
              onClick={() => onOpen(symbol)}
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
  )
}

export default React.memo(TokenRow)
