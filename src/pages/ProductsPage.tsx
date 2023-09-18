import {useProducts} from "../hooks/productsHooks";
import React, {useContext, useState} from "react";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {LoaderComponent} from "../components/LoaderComponent";
import {ErrorMessageComponent} from "../components/ErrorMessageComponent";
import {ProductComponent} from "../components/ProductComponent";
import {ModalComponent} from "../components/ModalComponent";
import {CreateProductComponent} from "../components/CreateProductComponent";
import {observer} from "mobx-react-lite";
import {useAuthContext} from "../context/AuthContext";
import {ChangeProductComponent} from "../components/ChangeProductComponent";

export const ProductsPage = observer(() => {
    const {loading, error, products, addProduct} = useProducts()
    // const [modal, setModal] = useState(false)
    const {modal, open, close} = useContext(ModalContext)
    const { user } = useAuthContext()

    const createHandler = (product: IProduct) => {
        // setModal(false)
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">

            {loading && <LoaderComponent/>}
            {error && <ErrorMessageComponent error={error}/>}
            {products?.map((product: IProduct) => <ProductComponent key={product.id} product={product}/>)}
            {modal && <ModalComponent title="Create new product" onCloseModal={close}>
                {/*// setModal(false)}>*/}
                <CreateProductComponent onCreateProduct={createHandler}/>
            </ModalComponent>}

            {/*{modal === 'change' && <ModalComponent title="Update product" onCloseModal={close}>*/}
            {/*    <ChangeProductComponent product={undefined} onChangeProduct={close}/>*/}
            {/*</ModalComponent>}*/}
            {user ?
            <button className="fixed bottom-5 right-5 rounded-full bg-red-400 text-white text-2xl+ px-4 py-2"
                    onClick={open}>+
            </button> : ''}
        </div>
    )
})