import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    width: '90%',
    minHeight: '400px',
    padding: '2rem 4rem 1rem 4rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 0 1rem 0',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    width: '100%',
    fontSize: 24,
  },
  subtitle: {
    fontWeight: '500',
    textAlign: 'left',
    fontSize: '2em',
  },
  subvalue: {
    textAlign: 'left',
    fontSize: '.9em',
  },
  value: {
    fontSize: '4em',
    fontWeight: 'bold',
  },
  secsubtitle: {
    fontWeight: '500',
    textAlign: 'left',
    fontSize: '1em',
  },
  secsubvalue: {
    textAlign: 'left',
    fontSize: '.9em',
  },
  secvalue: {
    fontSize: '2.5em',
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { data } = props;

  return (
    <Card className={classes.root} elevation={4}>
      <CardContent style={{ textAlign: 'center' }}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {data.hospital}
        </Typography>
        <Grid container spacing={3} style={{ padding: '0 5%' }}>
          <Grid item xs={12} lg={6} s={12}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={5} lg={6}>
                <Paper className={classes.paper} elevation={0}>
                  <p className={classes.subtitle}>Total Cases</p>
                  <p className={classes.subvalue}>
                    New Cases: <strong>{data.new_cases}</strong>
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={7} lg={6}>
                <Paper className={classes.paper} elevation={0}>
                  <h1 className={classes.value}>{data.total_cases}</h1>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} s={12}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={5} lg={6}>
                <Paper className={classes.paper} elevation={0}>
                  <p className={classes.subtitle}>Recoveries</p>
                  <p className={classes.subvalue}>
                    New recoveries reported:{' '}
                    <strong>{data.new_recoveries}</strong>
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={7} lg={6}>
                <Paper className={classes.paper} elevation={0}>
                  <h1 className={classes.value}>{data.total_recoveries}</h1>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider style={{ margin: '2rem 0' }} />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={6}>
                <Paper elevation={0} className={classes.paper} elevation={0}>
                  <p className={classes.secsubtitle}>Suspects</p>
                  <p className={classes.secsubvalue}>
                    New suspects reported: <strong>{data.new_suspects}</strong>
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} elevation={0}>
                  <h1 className={classes.secvalue}>{data.total_suspects}</h1>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.paper} elevation={0}>
                  <p className={classes.secsubtitle}>Active Cases</p>
                  <p className={classes.secsubvalue}>
                    New active cases: <strong>{data.new_active_cases}</strong>
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} elevation={0}>
                  <h1 className={classes.secvalue}>{data.active_cases}</h1>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.paper} elevation={0}>
                  <p className={classes.secsubtitle}>Deaths</p>
                  <p className={classes.secsubvalue}>
                    New deaths: <strong>{data.new_deaths}</strong>
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} elevation={0}>
                  <h1 className={classes.secvalue}>{data.total_deaths}</h1>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <p>Data updated as of June 07, 2020</p>
    </Card>
  );
}
