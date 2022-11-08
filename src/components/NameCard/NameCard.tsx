import { NameCardStyle as S } from "./NameCard.style";
import icon from "../../icons/user-group-solid.svg";
import { colours } from "../../theme";

export const NameCard = ({
  name,
  genderIsFemale,
}: {
  name: string;
  genderIsFemale: boolean;
}) => {
  return (
    <S.Container color={genderIsFemale ? colours.lightPink : colours.lightBlue}>
      <S.Icon>
        <img src={icon} alt="Two people icon" />
      </S.Icon>
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};
