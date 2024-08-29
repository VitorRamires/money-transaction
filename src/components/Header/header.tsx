import { HeaderContainer, HeaderContent } from "./style";
import logo from "../../assets/logo-ignite.svg";
import { NewTransactionButton } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal/NewTransaction";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal></NewTransactionModal>
          </Dialog.Root>
          
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
