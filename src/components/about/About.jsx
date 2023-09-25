import React from "react";
import styled from "styled-components";
import { devices } from "../GlobalCss";

const Container = styled.div`
  text-align: center;
  padding: 0.7rem 6rem;
  @media ${devices.md}{
    padding: 0.7rem 1rem;
  }
`;

const Button = styled.button`
  border: 0;
  padding: 0px;
  color: #ffffff;
  min-width: 0px;
  font-size: 15px;
  cursor: pointer;
  min-height: 40px;
  overflow: hidden;
  max-width: 480px;
  user-select: none;
  line-height: 25px;
  padding-left: 20px;
  text-align: center;
  padding-right: 20px;
  align-items: center;
  border-radius: 100px;
  display: inline-flex;
  box-sizing: border-box;
  vertical-align: middle;
  justify-content: center;
  -webkit-user-select: none;
  background-color: #0a66c2;
  text-transform: capitalize;
  touch-action: manipulation;
  background: linear-gradient(90deg, #812868 0%, #f954a4 100%);
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;
const About = () => {
return (
  <Container>
      <h1>Welcome To National Institute of Fine Arts</h1>
      <p>
        National Institute of Fine Arts (NIFA) is a national center for
        education in arts, fostering the excellence of emerging and established
        artists and advancing art to create a more human world. National
        Institute of Fine Arts (NIFA) was established by MRS RENU KHERA in Delhi
        and NCR of Delhi on July 2005. Institute established another unit in
        Panna (M.P) which is affiliated to Raja Mansingh Music and Arts
        University (Gwalior). Its aim is to provide education and training to
        students on a wide spectrum of Fine Arts.
        <br />
        <br />
        National Institute of Fine Arts is a place where the creative expression
        of individuals is nurtured and a sense of community flourishes. We seek
        to shape the global future of arts with an emphasis on excellence that
        allows its members to reach for the highest artistic standards as
        individuals while recognizing that the Art is one of the foundations of
        a healthy and creative society. This is a place where national and
        international leaders in the arts gather, teach, show and perform their
        work. The institute prides itself on its openness and on creating an
        environment that is safe, welcoming, and built on mutual respect.
      </p>
      <span style={{ fontWeight: "bold" }}>
        National Institute of Fine Arts is a place where the creative expression
        of individuals is nurtured and a sense of community flourishes.
      </span>

      <br />
      <br />
      <Button>read more</Button>
    </Container>
  );
};

export default About;
