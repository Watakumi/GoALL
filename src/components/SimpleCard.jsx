import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ goal }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          目標
        </Typography>
        <Typography className={classes.pos} variant="h5" component="h2">
          {goal.title}
        </Typography>
        <Typography variant="body2" component="p">
          {goal.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">編集</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  goal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
