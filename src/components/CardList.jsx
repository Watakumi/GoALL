import React from 'react';
import SimpleCard from './SimpleCard';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import GET_GOALS from '../graphql/queries/GetGoal';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const CardList = () => {
  const { loading, error, data } = useQuery(GET_GOALS);
  console.log(loading);
  console.log(data);
  if (loading) return <CircularProgress size={50} />;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Box display="flex" justifyContent="space-between" mr={2} mb={2}>
        <Box fontWeight="fontWeightBold" fontSize="1.5rem">
          <Typography variant="h5" component="h2" color="primary">
            今年の目標
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          目標を追加する
        </Button>
      </Box>
      <Grid container spacing={4}>
        {data.goals.map((goal) => (
          <Grid item key={goal.id} xs={12} sm={6} md={4}>
            <SimpleCard goal={goal} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardList;
