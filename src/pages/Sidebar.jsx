import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LabelIcon from '@material-ui/icons/Label';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { mainListItems, secondaryListItems } from '../components/listItems';

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

const Sidebar = ({ onClick }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbarIcon}>
        <IconButton onClick={onClick}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Box>
        <ListItem button>
          <ListItemIcon>
            <LabelIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="ラベル管理" />
        </ListItem>
      </Box>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </>
  );
};

export default Sidebar;
