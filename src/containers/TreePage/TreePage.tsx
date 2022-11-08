import { NameCard } from "../../components/NameCard/NameCard";
import { TreePageStyle as S } from "./TreePage.style";

export interface TreeNode {
  id: number;
  name: string;
  children: Array<number>;
  gender: string;
  parents: Array<number>;
}

export const TreePage = ({ familyTree }: { familyTree: TreeNode[] }) => {
  return (
    <S.Container>
      {familyTree.map((node, index) => (
        <NameCard
          name={node.name}
          genderIsFemale={node.gender === "female"}
        ></NameCard>
      ))}
    </S.Container>
  );
};
