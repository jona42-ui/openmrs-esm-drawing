import React from "react";
import { Tabs, Tab } from "carbon-components-react";


interface TabItem {
  name: string;
  component: JSX.Element;
}

const tabs: TabItem[] = [
  {
    name: "Draw On Body",
    component: <drawingCanvas />,
  },
  {
    name: "Templates",
    component: <Templates />,
  },
  {
    name: "Forms",
    component: <Forms />,
  },
  {
    name: "Attachments",
    component: <Attachements />,
  }

];

export const NavigationTabs: React.FC = () => {
  return (
    <Tabs>
      {tabs.map((tab: TabItem, index: number) => (
        <Tab key={index} label={tab.name}>
          {tab.component}
        </Tab>
      ))}
    </Tabs>
  );
};
