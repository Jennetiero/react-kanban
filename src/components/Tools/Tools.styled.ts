import styled from "styled-components";

export const SidebarMenu = styled.div`
  height: 100vh;
  background-color: #F5F8FA;
  top: 0;
  left: 0;
  float: left;
  transition: 0.6s;
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 36px;
  padding-left: 14px;
`;

export const Header = styled.div`
font-size: 18px;
line-height: 21px;
margin-top: 24px;
margin-bottom: 30px;
padding-left: 2px;
`;

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  height: 34px;
`;

export const MenuItemLinks = styled.a`
  display: flex;
  align-items: center;
  font-weight: 400;
  line-height: 16px;
  text-decoration: none;
  color: #222222;

  &:hover {
    color: #0094FF;
  }
`;