import { HeaderContainer, HeaderContent } from "./style";
import  logo  from '../../assets/logo-ignite.svg'
import { NewTransactionButton } from "./style";

export function Header(){
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="" />
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}