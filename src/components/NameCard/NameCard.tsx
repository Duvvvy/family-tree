import { NameCard as S } from "./NameCard.style";
import icon from "../../icons/user-group-solid.svg";

export const NameCard = ({
  name,
  genderIsFemale,
}: {
  name: string;
  genderIsFemale: boolean;
}) => {
  return (
    <S.Container>
      <S.Icon>
        <img src={icon} alt="Two people icon" />
      </S.Icon>
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};
