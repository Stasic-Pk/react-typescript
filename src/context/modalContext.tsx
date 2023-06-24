import { createContext, useState } from "react";

interface IModalContext {
  modal: boolean
  changeBool: () => void
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  changeBool: () => {},
})

export const ModalState = ({children}: {children: React.ReactNode}) => {
  const [modal, setModal] = useState(false)

  const changeBool = () => setModal(!modal)

  return (
    <ModalContext.Provider value={{changeBool, modal}}>
      {children}
    </ModalContext.Provider>
  )
}
