import React, {ReactNode} from "react";
import ContainerBlock from "../components/ContainerBlock";
import Scribbling from "../components/Scribbling";

export default function scribbling() {
  return (
    <ContainerBlock title="Posts">
      <Scribbling />
    </ContainerBlock>
  );
}
