'use client'

import * as Tooltip from "@radix-ui/react-tooltip"
import React from "react"

// Re-export TooltipProvider so you can wrap your app globally
export const TooltipProvider = Tooltip.Provider

// Small wrapper for reusability
export function TooltipWrapper({
  children,
  content,
  side = "top",
}: {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Content
        side={side}
        className="px-2 py-1 text-xs bg-black text-white rounded shadow-md"
      >
        {content}
        <Tooltip.Arrow className="fill-black" />
      </Tooltip.Content>
    </Tooltip.Root>
  )
}
