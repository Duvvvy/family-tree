import styled from "styled-components";
import { colours } from "../../theme";

export const NameCardStyle = {
  Container: styled.div<{ color: string }>`
    min-width: 300px;
    min-height: 60px;
    width: fit-content;
    height: fit-content;

    display: grid;
    grid-template-areas: "icon name";
    grid-template-columns: 40px 1fr;
    grid-template-rows: 1fr;

    box-shadow: 0px 10px 20px rgba(0, 50, 80, 0.05);
    border-radius: 10px;

    background-color: ${({ color }) => color};
  `,
  Name: styled.div`
    grid-area: name;
    padding: 16px;

    justify-self: center;

    color: ${colours.lightGray};

    font-size: 16px;
    line-height: 48px;
    font-weight: 600;
  `,
  Icon: styled.div`
    width: 48px;
    height: 48px;
    padding: 16px;
    align-self: end;
  `,
};
