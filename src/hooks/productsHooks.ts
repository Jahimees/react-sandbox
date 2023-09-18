import {useState} from "react";
import {IProduct} from "../models";
import {productsData} from "../data/productsData";

export function useProducts() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [products, setProducts] = useState<IProduct[] | undefined>(productsData)

    function addProduct(product: IProduct) {
        if (typeof products !== "undefined") {
            const newProducts = [...products, {...product, id: products.length + 1}]
            setProducts(newProducts)
        }
    }

    function changeProduct(product: IProduct, id: number) {
        if (typeof products !== "undefined") {
            const newProducts = [...products?.filter((p) => p.id !== id), product]
            setProducts(newProducts);
        }
    }

    //!TODO THIS IS THE AXIOS FETCH
    // async function fetchProducts() {
    //     try {
    //         setError('')
    //         setLoading(true)
    //         const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
    //         setProducts(response.data)
    //         setLoading(false)
    //     } catch (e: unknown) {
    //         const error = e as AxiosError
    //         setLoading(false)
    //         setProducts([])
    //         setError(error.message)
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchProducts()
    // }, [])

    return {products, error, loading, addProduct, changeProduct}
}