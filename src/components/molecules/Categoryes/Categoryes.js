import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text } from "../../atoms/Text";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  a {
    text-decoration: none;
    color: #858585;

    &.active {
      color: #fd749b;
    }
  }
`;

const CategoryItem = styled.div`
  border-radius: 10px;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  width: 300px;
  margin: 10px;
  padding: 20px;
`;

const CategoriesImage = styled.img`
  height: 200px;
  display: block;
  margin: 0 auto;
`;

const Categories = ({ categories = [] }) => {
  if (!categories.length) {
    return (
      <Text
        size={24}
        color={"#858585"}
        weight={600}
        center
        margin={"100px 0 0"}
      >
        Now not have categories
      </Text>
    );
  }
  return (
    <List>
      {categories.map(({ img, title, path = "/" }) => (
        <ListItem>
          <Link to={path}>
            <CategoryItem>
              <CategoriesImage src={img} alt="apple" />
              <Text
                center
                size={24}
                weight={600}
                color={"#858585"}
                margin={"20px 0 0"}
              >
                {title}
              </Text>
            </CategoryItem>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Categories;
