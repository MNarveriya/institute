import React from 'react'
import styled from 'styled-components'
import { CourseList } from "./CourseList"
import { devices } from '../GlobalCss';


const Grand = styled.div`
padding: 0.7rem 6rem;
background-size: cover;
background-repeat: no-repeat;
 background-image: url(https://www.nifafinearts.com/images/artboard2.png);

@media ${devices.md}{
  padding: 0.7rem 1rem;
}
`;

const Container = styled.div`
 
 gap: 22px;
 display: flex;
 flex-wrap: wrap;
 box-sizing: border-box;

@media ${devices.sm}{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
}
`;

const Card = styled.div`
width: 17rem;
height: 20rem;
display: flex;
overflow: hidden;
margin-bottom: 5px;
align-items: center;
border-radius: 10px;
flex-direction: column;
background-color: #fff;
justify-content: space-between;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

&:hover{
  transform: translateY(-10px);
  transition: 0.5s ease-in-out ;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
@media ${devices.sm}{
  width : 100%;
  
}
`;



const Img = styled.img`
width: 17rem;

object-fit: fill;
object-position: center;
@media ${devices.sm}{
  height: 50%;
  width : 100%;
}

`;

const Button = styled.button`
  background: linear-gradient( 90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%);
  align-items: center;
  background-color: #0a66c2;
  border: 0;
  color: white;
  margin-bottom: 10px;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-size: 15px;
  text-transform: capitalize;
  justify-content: center;
  line-height: 25px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
`;

export const Course = () => {
  return (
    <Grand>
    <h2 style={{textTransform:"capitalize" , margin:"2rem 0px"}}>our course</h2>
    <Container>
    {
      CourseList.map((item) => {
        return(
      <Card key={item.id}>
        <Img src={item.image} alt='img' />
        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
        <Button>know more</Button>
      </Card>
          
        )
      })
    }
    </Container>
    </Grand>
  )
}


