import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  card: {
    overflow: 'hidden'
  }
};

const GroupCard = ({group, classes}) => (
  <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography type="headline" component="h2">
          {group.name}
        </Typography>
        <Typography type="body1">
          {group.public_description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>More</Button>
      </CardActions>
    </Card>
  </div>
);

export default withStyles(styles)(GroupCard);