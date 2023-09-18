import {createContext, ReactNode, useState} from "react";

interface IModalContext {
    modal: boolean,
    // childId: number,
    open: () => void
    close: () => void
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    // childId: 0,
    open: () => {
    },
    close: () => {
    }
})

export const ModalState = ({children}: { children: ReactNode }) => {
    const [modal, setModal] = useState(false)

    const open = () => setModal(true)

    const close = () => setModal(false)

    return (
        <ModalContext.Provider value={{modal, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}