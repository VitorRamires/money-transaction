import * as Dialog from "@radix-ui/react-dialog";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeRadio,
  TransactionTypeContainer,
} from "./style";
import { ArrowCircleUp, ArrowCircleDown, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="descrição" required />
          <input type="number" placeholder="preco" />
          <input type="text" placeholder="categoria" />
          <button type="submit">Cadastrar</button>

          <TransactionTypeContainer>

              <TransactionTypeRadio value={'entrada'} variantBtn="entrada">
                <ArrowCircleUp size={32} />
                Entrada
              </TransactionTypeRadio>
              <TransactionTypeRadio value={'saida'} variantBtn="saida">
                <ArrowCircleDown size={32} />
                Saída
              </TransactionTypeRadio>
  
          </TransactionTypeContainer>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
