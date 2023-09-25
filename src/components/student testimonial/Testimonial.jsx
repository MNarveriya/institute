import React from 'react'
import styled from 'styled-components';
import { devices } from '../GlobalCss';

const Grand = styled.div`

display: flex;
flex-wrap: wrap;
text-align: center;
padding: 0.7rem 6rem;
box-sizing: border-box;
background-size: cover;
background-attachment: fixed;
background: linear-gradient(100deg, rgba(0, 0, 0, 1), rgba(35, 31, 32, 0.6)),
  url(https://www.nifafinearts.com/images/student-talk.jpg) no-repeat center;
@media ${devices.md}{
  display : none;
  text-align: center;
  padding: 0.7rem 1rem;
}

`;

const H2 = styled.h2`
color: #fff;
width: 100%;
text-align: center;
margin-bottom: 20px;
text-transform: capitalize;
@media ${devices.md}{
  width: 100%;
  text-align: center;
  
}
 
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media ${devices.sm}{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
   }
`;

const Product = styled.div`
   margin-bottom: 30px;

   

@media ${devices.sm}{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0p 0px 5px #fff;
}
`;

const Iframe = styled.iframe`
  width: 20rem;
  height: 20rem;
  box-shadow: 0px 0p 0px 5px #fff;

  @media ${devices.sm}{
    width: 100%;
    height: 100%;
   
    display: flex;
    margin: 10px 0px;
    justify-content: center;
    box-shadow: 0px 0p 0px 3px #fff;
  }
`;

const Testimonial = () => {
    const list = [
        <Iframe  src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0"allowfullscreen allow="autoplay" title="example"/>,
        <Iframe  src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0"allowfullscreen allow="autoplay" title="example"/>,
        <Iframe  src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0"allowfullscreen allow="autoplay" title="example"/>,
        <Iframe  src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0"allowfullscreen allow="autoplay" title="example"/>,
        <Iframe  src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0"allowfullscreen allow="autoplay" title="example"/>,
        <Iframe  src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0"allowfullscreen allow="autoplay" title="example"/>,
       
    ]

  return (
    <Grand>
     <H2>student testimonial</H2>
    <Container>
     {
        list.map((item , index) => {
            return(
                <Product key={index}>{item}</Product>
            )
        })
     }
    </Container>
    </Grand>
  )
}

export default Testimonial
