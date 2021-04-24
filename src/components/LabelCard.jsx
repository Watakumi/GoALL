import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

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

export default function LabelCard({ label }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          名前
        </Typography>
        <Typography className={classes.pos} variant="h5" component="h2">
          {label.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to={`/labels/${label.id}`}>
          詳細
        </Button>
        <Button size="small" color="primary">
          編集
        </Button>
      </CardActions>
    </Card>
  );
}

LabelCard.propTypes = {
  label: PropTypes.number.isRequired,
};
