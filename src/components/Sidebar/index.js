import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Line = styled.div`
  border-left: 1px solid white;
  height: 80px;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  min-height: 100%;
  align-items: center;
  position: fixed;
  left: 60px;
`;

const Icon = styled.a`
  text-decoration: none;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Sidebar = () => {
  return(
    <Container>
      <Icon href="https://github.com/Playbak-Team/playbak" target="_blank"><GitHubIcon color="inherit" /></Icon>
      <Icon href=""><TwitterIcon color="inherit" /></Icon>
      <Icon href=""><YouTubeIcon color="inherit" /></Icon>
      <Line />
    </Container>
  );
}

export default Sidebar;