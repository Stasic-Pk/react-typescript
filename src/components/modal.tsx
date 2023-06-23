import React, { useState } from "react";

interface ModalProps{
  children: React.ReactNode
  title: string
  onClose: () => void
}

export function Modal({ children, title, onClose }: ModalProps) {

  return (
    <>
      <div className="backGround" onClick={onClose}/>
      <div className="modal">
        <h2>{ title }</h2> <br/>
        { children }
      </div>
    </>
  )
}
