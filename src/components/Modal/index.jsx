import { useContext } from "react";
import { ModalContext } from "../../providers/modal";

import { Background, Content } from "./styles";
import { MdClose } from "react-icons/md";

export const Modal = ({ title, children }) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <Background onClick={() => setIsOpen(false)}>
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header>
          {title}
          <MdClose onClick={() => setIsOpen(false)} />
        </header>
        <main>{children}</main>
      </Content>
    </Background>
  );
};
