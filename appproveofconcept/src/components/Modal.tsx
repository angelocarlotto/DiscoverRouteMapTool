import React from "react";
type ModalProps = {
  isOpen: boolean;
};
export function Modal(props: ModalProps) {
  if (props.isOpen) {
    return <h1>oi</h1>;
  }

  return null;
}
