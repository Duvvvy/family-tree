import styled from "styled-components";
import { colours } from "../../theme";

export const NameCard = {
  Container: styled.div`
    min-width: 500px;
    min-height: 80px;

    display: grid;
    grid-area-template: "icon name";
    grid-template-columns: 24px 1fr;

    box-shadow: 0px 10px 20px rgba(0, 50, 80, 0.05);
    border-radius: 10px;
  `,
  Name: styled.div`
    grid-area: name;

    color: ${colours.lightGray};

    font-family: "Lato";
    font-size: 16px;

    line-height: 24px;
    font-weight: 600;
  `,
  Icon: styled.div`
    width: 24px;
    height: 24px;
    align-self: center;
    justify-self: flex-start;
  `,
};
