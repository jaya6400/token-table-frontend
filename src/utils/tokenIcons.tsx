import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiSolana, SiCardano, SiPolkadot, SiBinance, SiTether, SiLitecoin, SiRipple, SiChainlink, SiTon, SiDogecoin, SiPolygon, SiCocos, SiNear, SiMonero, SiStellar } from "react-icons/si";

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
  TON: SiTon,
  DOGE: SiDogecoin,
  MATIC: SiPolygon,
  ATOM: SiCocos,
  NEAR: SiNear,
  XMR: SiMonero,
  XLM: SiStellar
};