import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { Tabs } from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
    console.log(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={tabContent === "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent ? (
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        ) : (
          "Please select a topic"
        )}
      </Tabs>
    </Section>
  );
}
