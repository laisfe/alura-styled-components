import React from "react";
import styledComponents from "styled-components";
import Item from "../Item";

const Itens = styledComponents.div`
  box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) => {
  return (
    <Itens>
      <Item {...props} />
      <span>{props.date}</span>
    </Itens>
  );
};
