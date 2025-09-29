import { useEffect, useState } from "react";

type TokenTick = {
  price: number;
  changePercent: number;
};

type TokenInput = {
  symbol: string;
  price: number;
};

export const useWebsocketMock = (tokens: TokenInput[]) => {
  const [ticks, setTicks] = useState<Record<string, TokenTick>>(() => {
    const initialTicks: Record<string, TokenTick> = {};
    tokens.forEach(t => {
      initialTicks[t.symbol] = { price: t.price, changePercent: 0 };
    });
    return initialTicks;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicks(prev => {
        const updated: Record<string, TokenTick> = {};
        tokens.forEach(t => {
          const oldPrice = prev[t.symbol]?.price || t.price;
          const change = (Math.random() - 0.5) * (oldPrice * 0.01); // ±1% fluctuation
          const newPrice = +(oldPrice + change).toFixed(2);
          const changePercent = +(((newPrice - oldPrice) / oldPrice) * 100).toFixed(2);
          updated[t.symbol] = { price: newPrice, changePercent };
        });
        return updated;
      });
      setIsLoading(false);
    }, 800); // update every 800ms

    return () => clearInterval(interval);
  }, [tokens]);

  return { ticks, isLoading };
};