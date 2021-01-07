import './Navbar.css';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appbarStyle: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: 'white',
    paddingTop: '15px',
  },
  navButton: {
    color: 'white',
  }
});

const StyledLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const GrowDivider = styled.div`
  flex-grow: 1;
`;


const Navbar = () => {
  const classes = useStyles();

  return(
    <AppBar className={classes.appbarStyle} position="static">
      <Toolbar>
        <StyledLogo src={logo} alt="logo" />
        <GrowDivider />
        <Button className={classes.navButton}>Home</Button>
        <Button className={classes.navButton}>About</Button>
        <Button className={classes.navButton}>More</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
