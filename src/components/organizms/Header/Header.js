import React from "react";
import styled from "styled-components";
import { Text } from "../../atoms/Text";
import { LOGOUT } from "../../../ constant";
import { action } from "../../../store";

const HeaderContainer = styled.div`
  background-color: #fff;
  padding: 22px 0;
  border-bottom: 2px solid #f7f7f7;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const UserImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ccc;
  overflow: hidden;
  position: relative;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoutIcon = styled.img`
  width: 25px;
  cursor: pointer;
  margin-left: 30px;
`;

const Header = () => {
  const handleLogout = () => {
    action(LOGOUT);
  };

  return (
    <HeaderContainer>
      <div className={"container"}>
        <HeaderWrapper>
          <UserInfo>
            <UserImage />
            <Text size={16} color={"#858585"}>
              Ramon Ridwan
            </Text>
          </UserInfo>
          <LogoutIcon
            src={require("../../../assets/image/logout.svg")}
            onClick={handleLogout}
          />
        </HeaderWrapper>
      </div>
    </HeaderContainer>
  );
};

export default Header;
