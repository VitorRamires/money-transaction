export const formatterDate = new Intl.DateTimeFormat('pt-BR')
export const formatterPrice = new Intl.NumberFormat('pt-BR', {
  style:"currency",
  currency: "BRL"
})