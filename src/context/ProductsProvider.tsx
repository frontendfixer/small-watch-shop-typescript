import { ReactElement, createContext, useEffect, useState } from 'react'

import {
  PRODUCTS_DATA,
  ProductType,
  ProductsDataType,
} from '../../data/products.ts'

const initState: ProductType[] = []

const initContextState: ProductsDataType = { products: [] }

export const ProductsContext = createContext<ProductsDataType>(initContextState)

type ChildrenType = {
  children?: ReactElement | ReactElement[]
}

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState)

  // // Run `npx json-server -w data/products.json -p 3500` to start json server
  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch('http://localhost:3500/products')
  //       .then(res => res.json())
  //       .catch(err => {
  //         if (err instanceof Error) console.log(err.message)
  //       })
  //     return data
  //   }

  //   fetchProducts().then(products => setProducts(products))
  // }, [])

  useEffect(() => {
    setProducts(PRODUCTS_DATA.products)
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
