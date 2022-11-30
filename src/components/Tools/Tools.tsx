import { FC } from "react";
import {SidebarMenu, MenuItems, Container, MenuItemLinks, Header} from "./Tools.styled"
import { ToolsData } from "../../data/ToolsData";

const Tools: FC = () => {
  return (
    <>
      <SidebarMenu>
        <Container>
          <Header>Tools</Header>
          {ToolsData.map((item, index) => {
            return (
              <MenuItems key={index}>
                <MenuItemLinks href={item.path}>
                    <img src={item.icon} style={item.style} alt="icon"/>
                  <span style={{ marginLeft: "16px" }}>{item.title}</span>
                </MenuItemLinks>
              </MenuItems>
            );
          })}
        </Container>
      </SidebarMenu>
    </>
  );
};

export default Tools;
