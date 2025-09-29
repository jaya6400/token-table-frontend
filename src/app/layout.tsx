'use client'

import "../styles/style.css";
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { queryClient } from '@/lib/queryClient'
import { store } from '@/store/store'
import { TooltipProvider } from "@/app/components/ui/tooltip"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider delayDuration={200}>
              {children}
            </TooltipProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}
