import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeRadio,
  TransactionTypeContainer,
} from "./style";
import { ArrowCircleUp, ArrowCircleDown, X } from "phosphor-react";
import * as zod from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function NewTransactionModal() {
  const newTransactionValidationSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(["entrada", "saida"]),
  });

  type NewTransactionType = zod.infer<typeof newTransactionValidationSchema>;

  const { register, handleSubmit, control } = useForm<NewTransactionType>({
    resolver: zodResolver(newTransactionValidationSchema),
    defaultValues: {
      description: "",
      price: 0,
      category: "",
      type: "entrada"
    },
  });

  function submitNewTransactionForm(data: NewTransactionType) {
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Description />
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form action="" onSubmit={handleSubmit(submitNewTransactionForm)}>
          <input {...register("description")} placeholder="descricao" />
          <input
            {...register("price", { valueAsNumber: true })}
            placeholder="valor"
          />
          <input {...register("category")} placeholder="tipo" />

          <button type="submit">Cadastrar</button>

          <Controller
            control={control}
            name="type"
            render={({field}) => {
              return (
                <TransactionTypeContainer onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeRadio value={"entrada"} variantbtn="entrada">
                    <ArrowCircleUp size={32} />
                    Entrada
                  </TransactionTypeRadio>

                  <TransactionTypeRadio value={"saida"} variantbtn="saida">
                    <ArrowCircleDown size={32} />
                    Saída
                  </TransactionTypeRadio>
                </TransactionTypeContainer>
              );
            }}
          />
        </form>
      </Content>
    </Dialog.Portal>
  );
}
