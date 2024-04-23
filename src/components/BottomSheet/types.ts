interface ReducerInterface {
  symbol: string;
  avgPrice: number;
  close: number;
  quantity: number;
  ltp: number;
}

interface BottomSheetProps {
  data: Array<ReducerInterface> | null
}

interface CalculatedProps {
  totalPnl: number,
  todayPnl: number,
  currentValue: number,
  investedValue: number
}

export type {ReducerInterface, BottomSheetProps, CalculatedProps}

