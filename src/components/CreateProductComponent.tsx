import React, {useState} from "react";
import {IProduct, IProductData} from "../models";
import axios from "axios";
import {ErrorMessageComponent} from "./ErrorMessageComponent";

interface CreateProductProps {
    onCreateProduct: (product: IProduct) => void
}

export function CreateProductComponent({onCreateProduct}: CreateProductProps) {
    const [productData, setProductData] = useState({
        title: '',
        price: 0,
        description: '',
        image: 'https://i.pravatar.cc',
        category: '',
        rating: {
            rate: 10,
            count: 10
        }
    })

    // const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (productData.title.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        if (productData.price <= 0) {
            setError('Please enter valid price.')
            return
        }

        if (productData.description.trim().length === 0) {
            setError('Please enter valid price.')
            return
        }

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreateProduct(response.data)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text"
                   className="border py-2 px-4 mb-2 w-full outline-0"
                   placeholder="Enter product title"
                   value={productData.title}
                   onChange={e =>
                       setProductData({
                           ...productData,
                           title: e.target.value
                       })
                   }
            />
            <input type="text"
                   className="border py-2 px-4 mb-2 w-full outline-0"
                   placeholder="Enter product price"
                   value={productData.price}
                   onChange={e =>
                       setProductData({
                           ...productData,
                           price: +e.target.value
                       })
                   }
            />
            <input type="text"
                   className="border py-2 px-4 mb-2 w-full outline-0"
                   placeholder="Enter product description"
                   value={productData.description}
                   onChange={e =>
                       setProductData({
                           ...productData,
                           description: e.target.value
                       })
                   }
            />
            <input type="text"
                   className="border py-2 px-4 mb-2 w-full outline-0"
                   placeholder="Enter product category"
                   value={productData.category}
                   onChange={e =>
                       setProductData({
                           ...productData,
                           category: e.target.value
                       })
                   }
            />

            {error && <ErrorMessageComponent error={error}/>}
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}