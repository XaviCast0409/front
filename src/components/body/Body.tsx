import { Items } from "./items/Items";
import { HowWeCanHelp } from "./howWeCanHelp/HowWeCanHelp";
import WhatToExpect from "./whatToExpect/WhatToExpect";
import WhyThisIsFree from "./whyIsThisIsFree/WhyThisIsFree";

export default function Body() {
  return (
    <div className="container 2xl">
      <Items />
      <HowWeCanHelp />
      <WhatToExpect />
      <WhyThisIsFree />
    </div>
  );
}


