import { memo } from "react";
import { Handle, Position } from "reactflow";
import { NameCard } from "./NameCard";

export interface NodeParams {
  data: { name: string; genderIsFemale: boolean };
  isConnectable: boolean;
}

export default memo(({ data, isConnectable }: NodeParams) => (
  <>
    <Handle
      type="target"
      position={Position.Top}
      onConnect={(params) => console.log("handle onConnect", params)}
      isConnectable={isConnectable}
    />
    <NameCard name={data.name} genderIsFemale={data.genderIsFemale} />
    <Handle
      type="source"
      position={Position.Bottom}
      id="b"
      isConnectable={isConnectable}
    />
  </>
));
