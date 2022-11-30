import { FC, useEffect, useState } from "react";
import {
  SidebarMenu,
  Container,
  Logo,
  SearchInput,
  UserPhoto,
  MenuItems,
  MenuItemLinks,
  MenuLabel,
  DropdownField,
  DropdownLink,
  // Test
} from "./Sidebar.styled";
import BordioLogo from "../../assets/images/bordio-logo.svg";
import { SidebarData } from "../../data/SidebarData";

const Sidebar: FC = () => {
  const [subNavArray, setSubNavArray] = useState<Boolean[]>([
    false,
    false,
    false,
  ]);

  useEffect(() => {
    let showNavArray = [];
    for (let i = 0; i < SidebarData.length; i++) {
      showNavArray.push(false);
    }
    setSubNavArray(showNavArray);
  }, []);

  const showSubnav = (turn: number) => {
    let otherArray: Boolean[] = [];
    let tempArray = subNavArray;
    tempArray?.forEach((value, index) => {
      if (index === turn) {
        otherArray.push(!value);
      } else otherArray.push(value);
    });
    setSubNavArray(otherArray);
  };

  return (
    <>
      <SidebarMenu>
        <Container>
          <Logo src={BordioLogo} />
          <SearchInput placeholder="Search..." />
          {SidebarData.map((item, index) => {
            return (
              <MenuItems key={index}>
                <MenuItemLinks onClick={(e) => showSubnav(index)}>
                  <div>
                    {subNavArray[index] ? item.iconOpened : item.iconClosed}
                  </div>
                  {item.image && <UserPhoto src={item.image}/>}
                  <MenuLabel>{item.title}</MenuLabel>
                </MenuItemLinks>
                <DropdownField>
                  {subNavArray[index] &&
                    item.subNav?.map((item, index) => {
                      return (
                        <DropdownLink href={item.path} key={index}>
                          <MenuLabel style={{ color: "grey" }}>
                            {item.title}
                          </MenuLabel>
                        </DropdownLink>
                      );
                    })}
                </DropdownField>
              </MenuItems>
            );
          })}
        </Container>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
