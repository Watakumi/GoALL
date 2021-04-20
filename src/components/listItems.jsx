import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GET_LABELS from '../graphql/queries/GetLabels';
import { useQuery } from '@apollo/client';
import ListItemLink from './ListItemLink';
import CircularProgress from '@material-ui/core/CircularProgress';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const SecondaryListItems = () => {
  const { loading, error, data } = useQuery(GET_LABELS);

  if (loading) return <CircularProgress size={50} />;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <ListSubheader inset>MYラベル</ListSubheader>
      {data.labels.map((label) => (
        <ListItemLink
          key={label.id}
          to={`/labels/${label.id}`}
          primary={`${label.name}`}
          icon={<AssignmentIcon />}
        />
      ))}
    </div>
  );
};
