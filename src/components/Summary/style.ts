import styled, { css } from "styled-components"



interface SummaryCardProps{
  variantBG?: 'green'
}

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin:0 auto;
  padding:0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top:-5rem;
`

export const  SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme["gray-600"]};
  padding: 2rem;
  border-radius:6px;

  ${props => props.variantBG === 'green' && css`
    background: ${props.theme['green-700']} ;
  `}

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:  ${props => props.theme['gray-300']};
  }

  strong{
    display: block;
    margin-top:1rem;
    font-size: 2rem;
  }
`
