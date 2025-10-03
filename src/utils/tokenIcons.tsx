import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiSolana, SiCardano, SiPolkadot, SiBinance, SiTether, SiLitecoin, SiRipple, SiChainlink, SiTron, SiDogecoin, SiPolygon, SiAvalanche, SiCosmos, SiNear, SiMonero, SiStellar, SiUniswap } from "react-icons/si";

import { IconType } from "react-icons";

type TokenIconMap = {
  [key: string]: IconType;
};

export const tokenIcons: TokenIconMap = {
  BTC: FaBitcoin,
  ETH: FaEthereum,
  SOL: SiSolana,
  ADA: SiCardano,
  DOT: SiPolkadot,
  BNB: SiBinance,
  USDT: SiTether,
  LTC: SiLitecoin,
  XRP: SiRipple,
  LINK: SiChainlink,
  TRX: SiTron,
  DOGE: SiDogecoin,
  MATIC: SiPolygon,
  AVAX: SiAvalanche,
  ATOM: SiCosmos,
  NEAR: SiNear,
  XMR: SiMonero,
  XLM: SiStellar,
  UNI: SiUniswap,
};