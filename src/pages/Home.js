import React from "react";
import styled from "styled-components";
import Header from "../components/organizms/Header/Header";
import Categories from "../components/molecules/Categoryes/Categoryes";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Wrapper = styled.div`
  flex: 1;
  background-color: #fff9fe;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header />
          <div className="container">
            <Categories categories={[]} />
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
