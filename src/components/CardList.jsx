import React from 'react';
import SimpleCard from './SimpleCard';
import Grid from '@material-ui/core/Grid';
import GET_LABEL from '../graphql/queries/GetLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery, useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import ADD_GOAL from '../graphql/mutations/AddGoal';
import { useParams } from 'react-router-dom';

const FormDialog = () => {
  const [addGoal] = useMutation(ADD_GOAL);

  const { control, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    addGoal({
      variables: { title: data.title, description: data.description, labelId: label_id },
    });
    reset({ title: '', description: '' });
    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        目標を追加
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">新規目標</DialogTitle>
        <DialogContent>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField autoFocus margin="dense" label="名前" type="string" fullWidth {...field} />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                margin="dense"
                label="説明"
                type="string"
                rows={3}
                multiline
                fullWidth
                {...field}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleSubmit(onSubmit)} color="primary">
            追加
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    minHeight: '215px',
  },
  navigationMessage: {
    fontSize: '2rem',
  },
}));

const CardList = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LABEL, {
    variables: { id: Number(id) },
  });

  if (loading) return <CircularProgress size={50} />;
  if (error) return `Error! ${error.message}`;
  return (
    <Paper className={classes.paper}>
      <Box display="flex" justifyContent="space-between" mr={2} mb={2}>
        <Box fontWeight="fontWeightBold" fontSize="1.5rem">
          <Typography variant="h5" component="h2" color="primary">
            {data.label.name}
          </Typography>
        </Box>
        <FormDialog label_id={Number(id)} />
      </Box>
      {data.label.goals.length > 0 ? (
        <Grid container spacing={4}>
          {data.label.goals.map((goal) => (
            <Grid item key={goal.id} xs={12} sm={6} md={4}>
              <SimpleCard goal={goal} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography className={classes.navigationMessage}>
          達成すべき目標がありません！目標を追加しましょう！
        </Typography>
      )}
    </Paper>
  );
};

export default CardList;
