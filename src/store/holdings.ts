import { create } from 'zustand'

interface HoldingsDataObj {
    symbol: string,
    quantity: number,
    ltp: number,
    avgPrice: number,
    close: number
}

type HoldingsData = Array<HoldingsDataObj>;

type HoldingStore = {
    data:  HoldingsData | null;
    loading: boolean;
    update: (data: HoldingsData | null) => void;
    setLoader: (loading: boolean) => void;
};

const useHoldingStore = create<HoldingStore>()((set) => ({
    data: null,
    loading: false,
    update: (data: HoldingsData | null) => set(() => ({ data: data, loading: false})),
    setLoader: (loading: boolean) => set(() => ({ loading })),
}))

export default useHoldingStore;