import styled from 'styled-components';
import "./Landing.css";
import banner from '../../assets/landing1.JPG';
import Button from '@material-ui/core/Button';

const Banner = styled.img`
  width: 100%;
  height: 800px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Landing = () => {
  return(
    <div className="landing">
      <h1>Playbak</h1>
      <h2>A tool to help you <span class="redhighlight">optimize</span> online school</h2>
      <Button variant="contained" color="primary" size="large" href="http://github.com/playbak-Team/playbak/releases/latest">
        Let me try!
      </Button>
      <div>
        <Banner src={banner} alt="banner for playbak" />
      </div>

      <h2>Equipt with the tools to help you succeed</h2>
    </div>
  )
};

export default Landing;