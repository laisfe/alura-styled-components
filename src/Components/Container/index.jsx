import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import styledComponents from "styled-components";

const Container = styledComponents.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styledComponents.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
}

`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </Container>
  );
};
