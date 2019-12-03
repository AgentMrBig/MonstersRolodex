import React from 'react';
import { Card } from '../card/card.component';
import styled from 'styled-components';

const CardListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const CardList = props => (
  <CardListContainer>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </CardListContainer>
);
