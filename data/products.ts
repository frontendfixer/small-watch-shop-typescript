export type ProductType = {
  sku: string
  name: string
  price: number
}

export type ProductsDataType = {
  products: ProductType[]
}

export const PRODUCTS_DATA: ProductsDataType = {
  products: [
    {
      sku: 'item0001',
      name: 'Widget',
      price: 9.99,
    },
    {
      sku: 'item0002',
      name: 'Premium Widget',
      price: 19.99,
    },
    {
      sku: 'item0003',
      name: 'Deluxe Widget',
      price: 29.99,
    },
  ],
}
