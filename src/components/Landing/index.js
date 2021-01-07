import styled from 'styled-components';
import "./Landing.css";
import banner from '../../assets/landing1.JPG';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FastForwardIcon from '@material-ui/icons/FastForward';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

const Banner = styled.img`
  width: 100%;
  height: 800px;
  margin-top: 30px;
  margin-bottom: 60px;
`;

const ButtonDiv = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  max-width: 25%;
  min-width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  background-color: #5658DD;
  border-radius: 50%;
  min-width: 100px;
  min-height: 100px;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: 'white'
  border: 1px solid black;
`;

const FeatureTitle = styled.h2`
  color: white;
  font-family: "Inter", sans-serif;
`;

const FeaturedDescription = styled.p`
  color: white;
  font-family: "Inter", sans-serif;
`;

const ColorSpan = styled.span`
  color: ${props => props.color};
`;

const Landing = () => {
  return(
    <div class="landing">
      <h1>Playbak</h1>
      <h2>A tool to help you <ColorSpan color="red">optimize</ColorSpan> online school</h2>
      <Button variant="contained" color="primary" size="large" href="http://github.com/playbak-Team/playbak/releases/latest">
        Let me try!
      </Button>
      <div>
        <Banner src={banner} alt="banner for playbak" />
      </div>
      <h2>Equipt with the <ColorSpan color="green">necessary</ColorSpan> tools to help you succeed</h2>
      <ButtonDiv>
        <ButtonContainer>
          <Circle>
            <FastForwardIcon variant="contained" color="inherit" fontSize="inherit"/>
          </Circle>
          <FeatureTitle>PBS Manipulation</FeatureTitle>
          <FeaturedDescription>Don't you hate it when the lecture has long moments of silence but you are too afraid to scrub forward without missing something?</FeaturedDescription>
          <FeaturedDescription>Playbak comes with a built in feature that analyzes the videos for moments of silence and automatically fast forwards until the professor starts to speak again!</FeaturedDescription>
        </ButtonContainer>
        <ButtonContainer>
          <Circle>
            <AssignmentIcon variant="contained" color="inherit" fontSize="inherit"/>
          </Circle>
          <FeatureTitle>Kanban Board</FeatureTitle>
          <FeaturedDescription>If you have used Trello/Jira before, this is our take of a kanban board. The catch here is the integration with the overall program provides automated entry creation, assignment notifications and more!</FeaturedDescription>
        </ButtonContainer>
        <ButtonContainer>
          <Circle>
            <SortByAlphaIcon variant="contained" color="inherit" fontSize="inherit"/>
          </Circle>
          <FeatureTitle>Organization</FeatureTitle>
          <FeaturedDescription>Keep your assignments and videos organized with the automated processes that we provide: Workspace creation, file sorting and more!</FeaturedDescription>
        </ButtonContainer>
      </ButtonDiv>
    </div>
  )
};

export default Landing;
