import {ErrorMessageComponent} from "./ErrorMessageComponent";
import React, {FormEvent, useState} from "react";
import {IProduct} from "../models";
import {useProducts} from "../hooks/productsHooks";
import {productsData} from "../data/productsData";

interface ChangeProductProps {
    product: IProduct | undefined,
    onChangeProduct: () => void
}

export const ChangeProductComponent = (props: ChangeProductProps) => {
    if (props.product === undefined) {
        props.product = {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }
    }
    const [productData, setProductData] = useState(props.product)
    const [error, setError] = useState('')
    const {changeProduct} = useProducts();

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()

        let errorMsg = 'Please enter the '
        if (productData?.title.trim() === '') {
            setError(errorMsg + 'title');
            return;
        }

        if (productData?.price < 1) {
            setError(errorMsg + 'price');
            return;
        }

        if (productData?.description.trim() === '') {
            setError(errorMsg + 'description');
            return;
        }

        if (productData?.category.trim() === '') {
            setError(errorMsg + 'category');
            return;
        }

        changeProduct(productData, productData.id);
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