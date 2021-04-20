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
import { mainListItems, SecondaryListItems } from '../components/listItems';
import ListItemLink from '../components/ListItemLink';

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
        <ListItemLink to="/labels" primary="ラベル管理" icon={<LabelIcon color="primary" />} />
      </Box>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>
        <SecondaryListItems />
      </List>
    </>
  );
};

export default Sidebar;
