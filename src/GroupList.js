import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GroupCard from './GroupCard';

const style = {
  container: {
    overflow: 'hidden',
    padding: 5
  }
};

const GroupList = ({groups, classes}) => (
  <Grid container className={classes.container}>
    {groups.map(g =>
      <Grid item xs={12} sm={6} key={g.id}>
        <GroupCard group={g}></GroupCard>
      </Grid>
    )}
  </Grid>
);

export default withStyles(style)(GroupList);