import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";

export default function Examples() {
  const [selectedItem, setselectedItem] = useState(null);
  const handleSelect = (clickedItem) => {
    setselectedItem(clickedItem);
  };

  let tabContent = <p>Please select a topic</p>;
  if (selectedItem) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedItem].title}</h3>
        <p>{EXAMPLES[selectedItem].description}</p>
        <pre>
          <code>{EXAMPLES[selectedItem].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Example" id="example">
      <TabButton
        isSelected={selectedItem === "components"}
        onClick={() => handleSelect("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedItem === "jsx"}
        onClick={() => handleSelect("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedItem === "props"}
        onClick={() => handleSelect("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedItem === "state"}
        onClick={() => handleSelect("state")}
      >
        State
      </TabButton>
      {tabContent}
    </Section>
  );
}
