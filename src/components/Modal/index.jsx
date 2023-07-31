import { Background, Content } from "./styles";
import { MdClose } from "react-icons/md";

export const Modal = ({ title, children }) => {
  return (
    <Background>
      <Content>
        <header>
          {title}
          <MdClose />
        </header>
        <main>{children}</main>
      </Content>
    </Background>
  );
};
