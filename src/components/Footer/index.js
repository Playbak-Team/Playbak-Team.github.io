import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import GitHubIcon from '@material-ui/icons/GitHub';

const FooterDiv = styled.div`
  min-width: 100%;
  min-height: 50px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

const FooterRow = styled.div`
  min-width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

const GrowDiv = styled.div`
  flex-grow: 1;
`;

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Footer = () => {
  return(
    <FooterDiv>
      <FooterRow>
        <StyledLogo src={logo} alt="logo" />
        <div>Made by The Playbak Team</div>
        <GrowDiv />
        <StyledLink href="https://github.com/Playbak-Team/playbak"><GitHubIcon color="inherit" /></StyledLink>
      </FooterRow>
    </FooterDiv>
  );
}

export default Footer;
