import React from 'react';
import SimpleCard from './SimpleCard';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  space: {
    marginBottom: 12,
  },
});

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const CardList = () => {
  return (
    <>
      <Title>Recent Orders</Title>
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
