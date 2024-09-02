import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../context/transactionContext";

export function SearchForm() {
  const searchValidationSchema = zod.object({
    searchInput: zod.string(),
  });

  // zod identifica já quais tipos de dados estamos trabalhando, através do esquema de validação 
  type SearchTypeValidation = zod.infer<typeof searchValidationSchema>

  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchTypeValidation>({
    resolver: zodResolver(searchValidationSchema),
    defaultValues: {
      searchInput: "",
    },
  });

  const { loadApiTransactions } = useContext(TransactionContext)

  async function submitForm(data: SearchTypeValidation){
     loadApiTransactions(data.searchInput)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(submitForm)}>
      <input {...register("searchInput")} placeholder="Busque por transações"/>
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
