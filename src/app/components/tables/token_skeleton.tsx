'use client'

import React from 'react'

export default function TokenSkeleton() {
  return (
    <div className="token-row">
      {/* Logo Placeholder */}
      <div className="token-info">
        <div className="skeleton" style={{ width: 32, height: 32, borderRadius: '50%' }} />
        <div>
          <div className="skeleton" style={{ width: 100, height: 14, marginBottom: 6 }} />
          <div className="skeleton" style={{ width: 60, height: 12 }} />
        </div>
      </div>

      {/* Price + Change Placeholder */}
      <div className="token-right">
        <div className="token-price">
          <div className="skeleton" style={{ width: 80, height: 14, marginBottom: 6 }} />
          <div className="skeleton" style={{ width: 50, height: 12 }} />
        </div>
        <div className="token-actions">
          <div className="skeleton" style={{ width: 60, height: 28, borderRadius: 6 }} />
        </div>
      </div>
    </div>
  )
}
