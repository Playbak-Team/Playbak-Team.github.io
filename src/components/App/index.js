import logo from '../../assets/logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar';
import Landing from '../Landing';

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
        <Grid item xs />
        <Grid item xs={7}>
          <Navbar />
          <Landing />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

export default App;
