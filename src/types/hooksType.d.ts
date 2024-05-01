export interface TradeAttributesFilter {
  id?: number,
  name?: string,
  account?: number
}

export interface TradeAttributes {
  id?: number;
  name?: string;
  account?: number;
  Classes?: Array
}

export interface ClassDataAttributes {
  id: number,
  name: string
}