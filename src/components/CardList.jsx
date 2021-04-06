import React from 'react';
import SimpleCard from './SimpleCard';
import Title from './Title';
import Grid from '@material-ui/core/Grid';

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const CardList = () => {
  return (
    <>
      <Title>今年の目標</Title>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <SimpleCard />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardList;
