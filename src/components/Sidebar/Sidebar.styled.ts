import styled from "styled-components";

export const SidebarMenu = styled.div`
  height: 100vh;
  background-color: #0f1d40;
  top: 0;
  left: 0;
  float: left;
  transition: 0.6s;
`;

export const Container = styled.div`
  display: block;
`;

export const Logo = styled.img`
  display: block;
  margin: 26px 16px 0;
`;

export const SearchInput = styled.input`
  width: 177px;
  height: 32px;
  margin: 20px 16px 12px;
  background: #2d4071;
  background-image: url(../assets/images/Search.png) no-repeat 7px;
  border-radius: 4px;
  border: none;
  outline: none;
  padding-left: 10px;
`;

export const UserPhoto = styled.img`
  margin-right: 10px;
  width: 24px;
`;

export const MenuItems = styled.li`
  list-style: none;
  display: block;
`;

export const MenuItemLinks = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  line-height: 16px;
  text-decoration: none;
  color: #ffffff;
  margin-left: 20px;

  &:hover {
    background-color: #2d4071;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

export const MenuLabel = styled.li`
  font-size: 16px;
  padding: 10px 0px;
`;

export const DropdownLink = styled.a`
  color: white;
  text-decoration-line: none;
  margin-bottom: 20px;
`;

export const DropdownField = styled.a`
  display: block;
  margin-left: 13px;
`;