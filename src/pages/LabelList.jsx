import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
import { useForm, Controller } from 'react-hook-form';
import Paper from '@material-ui/core/Paper';
import LabelCard from '../components/LabelCard';
import ADD_LABEL from '../graphql/mutations/AddLabel';
import GET_LABELS from '../graphql/queries/GetLabels';

const FormDialog = () => {
  const [addLabel] = useMutation(ADD_LABEL);

  const { control, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    addLabel({
      variables: { name: data.name },
    });
    reset({ name: '' });
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
        ラベルを追加
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">新規ラベル</DialogTitle>
        <DialogContent>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField autoFocus margin="dense" label="名前" type="string" fullWidth {...field} />
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
  },
}));

const LabelList = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_LABELS);

  if (loading) return <CircularProgress size={50} />;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Paper className={classes.paper}>
        <Box display="flex" justifyContent="space-between" mr={2} mb={2}>
          <Box fontWeight="fontWeightBold" fontSize="1.5rem">
            <Typography variant="h5" component="h2" color="primary">
              ラベル一覧
            </Typography>
          </Box>
          <FormDialog />
        </Box>
        <Grid container spacing={4}>
          {data.labels.map((label) => (
            <Grid item key={label.id} xs={12} sm={6} md={4}>
              <LabelCard label={label} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};
export default LabelList;
