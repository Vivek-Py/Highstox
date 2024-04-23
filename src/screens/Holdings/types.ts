interface IProps {
    symbol: string;
    avgPrice: number;
    close: number;
    quantity: number;
    ltp: number;
}

interface IRenderItemProp {
    index: number,
    item: IProps
}

export type {IRenderItemProp}