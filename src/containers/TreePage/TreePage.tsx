import TreeLayout from "../../components/TreeLayout/TreeLayout";
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
      <TreeLayout />
    </S.Container>
  );
};
