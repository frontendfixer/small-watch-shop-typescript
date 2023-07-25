import { useContext } from 'react'
import { ProductsDataType } from '../../data/products'
import { ProductsContext } from '../context/ProductsProvider'

const useProduct = (): ProductsDataType => {
  return useContext(ProductsContext)
}

export default useProduct
