'use client'

import "../styles/style.css";
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { queryClient } from '@/lib/queryClient'
import { store } from '@/store/store'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark bg-gray-900 text-white"> {/* dark mode enabled */}
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}
