import logo from '../../assets/logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar';
import Landing from '../Landing';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div class="App">
      <Grid container spacing={3}>
        <Grid item xs >
          <Sidebar />
        </Grid>
        <Grid item xs={7}>
          <Navbar />
          <Landing />
          <Footer />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

export default App;
