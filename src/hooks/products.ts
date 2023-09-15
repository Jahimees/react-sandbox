import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    console.log("useProduct func")

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
        console.log("addProduct func")
    }

    async function fetchProducts() {
        console.log("fetchProducts func")
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setProducts([])
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, error, loading, addProduct}
}