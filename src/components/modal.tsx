import React, { useState } from "react";

interface ModalProps{
  children: React.ReactNode
  title: string
}

export function Modal({ children, title }: ModalProps) {

  return (
    <>
      <div className="backGround"/>
      <div className="modal">
        <h2>{ title }</h2> <br/>
        { children }
      </div>
    </>
  )
}
