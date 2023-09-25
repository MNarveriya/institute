import Marquee from 'react-double-marquee';
import styled from 'styled-components';
import { devices } from '../GlobalCss';

const Container = styled.div`
 
  display: flex;
  margin-top: 3rem;
  align-items: center;
  padding: 0.7rem 6rem;
  justify-content: space-between;
  @media ${devices.md}{
    display: flex;
    padding: 0.7rem 1rem;
    flex-direction: column;
  }
 
`;
const Mr = styled.div`
   width: 1000px;
   color: #812868;
   font-size: 20px;
   direction: left;
   white-space: nowrap;
   
   @media ${devices.md}{
     width: 100%;
     display: flex ;
     padding-left: 0.5rem;
    justify-content: center;
  }
`;
export function Marqu() {
  return (
    <Container>
    <h3 style={{margin:"0px" , textTransform:"capitalize"}}>nifa updates ::</h3>
    <Mr>

      <Marquee direction="left">

      All Nifa courses are now available worldwide through our Live and Interactive Online Classes. Please download the NIFA app from our online classes page to register for a complimentary trial class.
      </Marquee>
    </Mr>
    </Container>
  );
}


