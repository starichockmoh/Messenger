import styled from "styled-components";

export const SpecialLine = styled("hr")`
  border: none; /* Убираем границу для браузера Firefox */
  color: #F5F5F5; /* Цвет линии для остальных браузеров */
  background-color: #F5F5F5; /* Цвет линии для браузера Firefox и Opera */
  height: 10px; /* Толщина линии */
`