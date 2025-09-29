import { TooltipWrapper } from "@/app/components/ui/tooltip"
import * as Popover from "@radix-ui/react-popover"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

type Props = {
  symbol: string
  name: string
  price: number
  changePercent: number
  onOpen: (s: string) => void
}

const TokenRow: React.FC<Props> = ({ symbol, name, price, changePercent, onOpen }) => {
  const [flash, setFlash] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    if (changePercent > 0) setFlash("up")
    else if (changePercent < 0) setFlash("down")

    const timeout = setTimeout(() => setFlash(null), 600)
    return () => clearTimeout(timeout)
  }, [price])

  return (
    <div className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-200">
      {/* Avatar */}
      <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold">
        {symbol[0]}
      </div>

      {/* Name & Symbol */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">{name}</div>
        <div className="text-xs text-gray-500 truncate">{symbol}</div>
      </div>

      {/* Price & Change */}
      <div className="w-32 text-right flex flex-col items-end">
        <motion.div
          layout
          className={`font-medium transition-colors duration-300 ${
            flash === "up"
              ? "text-green-600"
              : flash === "down"
              ? "text-red-600"
              : ""
          }`}
        >
          {price.toFixed(2)}
        </motion.div>
        <div
          className={`text-xs font-semibold ${
            changePercent >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {changePercent >= 0
            ? `+${changePercent.toFixed(2)}%`
            : `${changePercent.toFixed(2)}%`}
        </div>
      </div>

      {/* Actions */}
      <Popover.Root>
        <TooltipWrapper content="Click for more actions">
          <Popover.Trigger asChild>
            <button className="ml-4 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
              Actions
            </button>
          </Popover.Trigger>
        </TooltipWrapper>

        <Popover.Portal>
          <Popover.Content
            className="w-40 bg-white border rounded shadow-md p-2"
            sideOffset={4}
          >
            <button
              className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-100"
              onClick={() => onOpen(symbol)}
            >
              View Details
            </button>
            <button className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-100">
              Buy
            </button>
            <button className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-100">
              Sell
            </button>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}

export default React.memo(TokenRow)
