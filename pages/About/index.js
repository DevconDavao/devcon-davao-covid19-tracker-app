import Head from 'next/head';
import Nav from '@/components/Layout/Nav';
import Footer from '@/components/Layout/Footer';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { Carousel } from '@/components/Layout';

const useStyles = makeStyles(theme => ({
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
    fontWeight: 'normal',
    fontSize: 36,
    alignItems: 'center',
    color: '#23B543',
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'justify',
    fontWeight: 'normal',
    fontSize: 13,
    marginTop: 40,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="container">
      <Head>
        <title>Covid-19 Tracker</title>
        <link rel="icon" href="/devcon.png" />
      </Head>

      <Nav />

      <Carousel />

      <main>
        <Card className={classes.root} elevation={4}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              About Us
            </Typography>

            <div>
              <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et
                a urna dolor sem morbi nibh. Molestie tellus et lorem mi sit
                proin. Luctus sit arcu pretium ut eu et lacinia. Senectus donec
                leo, ullamcorper fermentum. Vitae nibh vestibulum augue tortor
                tortor ultrices nunc orci. Massa ullamcorper urna suspendisse
                tincidunt aenean leo tellus pharetra. Faucibus habitant
                elementum faucibus ut leo leo, commodo in. Felis mattis
                scelerisque non orci, tempor sed maecenas convallis odio.
                Vestibulum tristique ultricies mi vitae in vivamus curabitur at.
                Posuere augue nisi, amet nunc, dui auctor pellentesque eget.
                Nisl tincidunt quisque egestas aliquet maecenas. Massa
                suspendisse sit at pretium sed. Massa netus ultricies at nunc
                in. Mattis interdum quis diam aliquet massa nisl praesent erat
                a. Placerat vel tellus tempor sapien nec id nunc. Duis curabitur
                amet amet fringilla felis cursus vitae. Turpis laoreet bibendum
                adipiscing et scelerisque amet, in. Malesuada ullamcorper
                elementum at est scelerisque. Vel sit lectus pharetra, dignissim
                in lacus sit ipsum non. Libero, at velit, porta amet,
                suspendisse. Adipiscing pretium in amet, faucibus. Ut arcu risus
                a arcu eget scelerisque dui. Gravida rhoncus, massa odio leo
                praesent elementum integer ornare nec. Id ipsum, sit tellus
                tellus adipiscing platea scelerisque. Ornare fusce ac magna
                mauris tempor suscipit lectus scelerisque. Pharetra congue
                tempus, viverra hendrerit massa volutpat nisi. Sit accumsan
                consequat tincidunt diam nulla. Scelerisque rhoncus accumsan
                risus amet gravida viverra tincidunt. Augue congue pellentesque
                vitae velit arcu sagittis rhoncus diam commodo. Nam fermentum
                luctus diam nunc eleifend sit posuere dapibus. Tellus felis
                tellus semper vel vulputate scelerisque etiam. Nullam facilisis
                eu morbi gravida nullam pellentesque justo, at. Volutpat, nam
                consequat rhoncus varius at urna. Suspendisse lectus platea non
                sollicitudin viverra mauris.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
