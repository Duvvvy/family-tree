const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  {
    id: "1",
    type: "NameCardNode",
    data: { name: "Sally", genderIsFemale: true },
    position,
  },
  {
    id: "2",
    type: "NameCardNode",
    data: { name: "Ricky", genderIsFemale: false },
    position,
  },
  {
    id: "2a",
    type: "NameCardNode",
    data: { name: "Billy", genderIsFemale: false },
    position,
  },
  {
    id: "2b",
    type: "NameCardNode",
    data: { name: "Suzie", genderIsFemale: true },
    position,
  },
  {
    id: "2c",
    type: "NameCardNode",
    data: { name: "Julian", genderIsFemale: false },
    position,
  },
  {
    id: "2d",
    type: "NameCardNode",
    data: { name: "Josh", genderIsFemale: false },
    position,
  },
  {
    id: "3",
    type: "NameCardNode",
    data: { name: "Clara", genderIsFemale: true },
    position,
  },
  {
    id: "4",
    type: "NameCardNode",
    data: { name: "Bob", genderIsFemale: false },
    position,
  },
  {
    id: "5",
    type: "NameCardNode",
    data: { name: "Jessie", genderIsFemale: true },
    position,
  },
  {
    id: "6",
    type: "NameCardNode",
    data: { name: "Charlie", genderIsFemale: false },
    position,
  },
  {
    id: "7",
    type: "NameCardNode",
    data: { name: "Joe", genderIsFemale: false },
    position,
  },
];

export const initialEdges = [
  { id: "e12", source: "1", target: "2", type: edgeType, animated: false },
  { id: "e13", source: "1", target: "3", type: edgeType, animated: false },
  { id: "e22a", source: "2", target: "2a", type: edgeType, animated: false },
  { id: "e22b", source: "2", target: "2b", type: edgeType, animated: false },
  { id: "e22c", source: "2", target: "2c", type: edgeType, animated: false },
  { id: "e2c2d", source: "2c", target: "2d", type: edgeType, animated: false },
  { id: "e2d4", source: "2b", target: "4", type: edgeType, animated: false },
  { id: "e45", source: "4", target: "5", type: edgeType, animated: false },
  { id: "e56", source: "5", target: "6", type: edgeType, animated: false },
  { id: "e57", source: "5", target: "7", type: edgeType, animated: false },
];
