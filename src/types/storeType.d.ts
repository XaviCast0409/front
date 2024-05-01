export interface CompanyAttributes {
  id?: number;
  item?: number;
  name_company?: string;
  address?: string;
  phone?: string;
  email?: string;
  password?: string;
  ZipCodeId?: number;
  TokenId?: number;
  token?: string
  status?: boolean;
  Trades?: [
    {
      id?: number,
      name?: string,
      account?: number
    }
  ]
  TradeCompanyUsers?: [
    {
      id?: number,
      name?: string,
      Classes?: [
        {
          id?: number,
          name?: string
        }
      ]
    }
  ]
  Users?: [
    {
      id?: number,
      name?: string,
      last_name?: string,
      email?: string,
      phone?: string,
      address?: string
    }
  ]
}

export interface TradeAttributes {
  id?: number;
  item?: number;
  name?: string;
  account?: number;
  Classes?: Array
}

export interface zipCodeAttributes {
  id?: number,
  city?: string,
  code?: number,
  state?: string;
  ZipCodeId?: {
    id?: number
  }
}

export interface UserAttributes {
  item?: number;
  id?: number;
  name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  ZipCodeId?: number;
}

export interface ClassAttributes {
  id?: number,
  name?: string,
  value?: number;
  label?: string
}


export interface Blog {
  publicationDate: string | number | Date;
  id: number;
  item: number;
  title: string;
  content: string;
  imageUrl: string;
}

export interface TradeUser {
  id: number;
  name: string;
}
export interface ClassUser {
  id: number;
  name: string;
}
export interface CompanyUser {
  id: number;
}