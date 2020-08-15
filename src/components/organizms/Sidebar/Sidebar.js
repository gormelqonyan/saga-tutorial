import React from "react";
import { Text } from "../../atoms/Text";
import styled from "styled-components";

const SidebarContainer = styled.div`
  border-right: 2px solid #f0f0f0;
  height: 100%;
  padding: 40px 0;
  width: 290px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Text>Sidebar</Text>
    </SidebarContainer>
  );
};

export default Sidebar;
