import { createContext, useState } from "react";

interface IModalContext {
  modal: boolean
  open: () => void
  close: () => void
  changeBool: () => void
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
  changeBool: () => {},
})

export const ModalState = ({children}: {children: React.ReactNode}) => {
  const [modal, setModal] = useState(false)

  const open = () => setModal(true)
  const close = () => setModal(false)
  const changeBool = () => setModal(!modal)

  return (
    <ModalContext.Provider value={{modal, open, close, changeBool}}>
      {children}
    </ModalContext.Provider>
  )
}
