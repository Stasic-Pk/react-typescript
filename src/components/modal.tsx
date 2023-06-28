import React, { useContext, useState } from "react";
import { ModalContext } from '../context/modalContext';

interface ModalProps{
  children: React.ReactNode
  title: string
}

export function Modal({ children, title }: ModalProps) {

  const {close} = useContext(ModalContext)

  return (
    <>
      <div className="backGround" onClick={close}/>
      <div className="modal">
        <h2>{ title }</h2> <br/>
        { children }
      </div>
    </>
  )
}
