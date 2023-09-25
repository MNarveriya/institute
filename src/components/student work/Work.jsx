import React from "react";
import styled, { css } from "styled-components";
import { devices } from "../GlobalCss";

const Grand = styled.div`
  padding: 0.7rem 6rem;
  background-color: #fff;

  @media ${devices.md} {
    padding: 0.7rem 1rem;
  }
`;

const Container = styled.div`
  gap: 5px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;

  @media ${devices.md} {
    gap: 1px;
  }
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${(props) =>
    props.second &&
    css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media ${devices.md} {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    `}
  ${(props) =>
    props.sixth &&
    css`
      @media ${devices.md} {
        display: flex;
        flex-direction: column;
      }
    `}
  ${(props) =>
    props.First &&
    css`
      @media ${devices.sm} {
        display: flex;
        flex-direction: column;
      }
    `}
`;

const IMg = styled.img`
  width: 17rem;
  height: 15rem;
  border-radius: 10px;

  ${(props) =>
    props.First1 &&
    css`
      @media ${devices.sm} {
        width: 100%;
        height: 40vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
    `}

  @media ${devices.md} {
    height: 30vw;
    display: flex;
    margin: 5px 0px;
    justify-content: center;
  }

  @media ${devices.xl} {
    height: 60vw;
    display: flex;
    margin: 5px 0px;
    justify-content: center;
  }
  ${(props) =>
    props.double &&
    css`
      width: 49%;
      @media ${devices.md} {
        width: 100%;
        height: 30vw;
      }
      @media ${devices.sm} {
        height: 40vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
      @media ${devices.xl} {
        height: 60vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
    `}
  ${(props) =>
    props.triple &&
    css`
      width: 32%;
      @media ${devices.md} {
        height: 30vw;
      }
    `}

${(props) =>
    props.four1 &&
    css`
      width: 40%;
      @media ${devices.md} {
        height: 30vw;
      }
    `}
${(props) =>
    props.four &&
    css`
      width: 28%;
      @media ${devices.md} {
        height: 30vw;
      }
    `}
${(props) =>
    props.five1 &&
    css`
      width: 46%;
      @media ${devices.md} {
        height: 30vw;
      }
    `}
${(props) =>
    props.five &&
    css`
      width: 25%;
      @media ${devices.md} {
        height: 30vw;
      }
    `}
${(props) =>
    props.six1 &&
    css`
      width: 14%;
      @media ${devices.md} {
        width: 100%;
        height: 30vw;
      }
      @media ${devices.sm} {
        height: 40vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
      @media ${devices.xl} {
        height: 60vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
    `}
${(props) =>
    props.six2 &&
    css`
      width: 17%;
      @media ${devices.md} {
        width: 100%;
        height: 30vw;
      }
      @media ${devices.sm} {
        height: 40vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
      @media ${devices.xl} {
        height: 60vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
    `}
${(props) =>
    props.six3 &&
    css`
      width: 26%;
      @media ${devices.md} {
        width: 100%;
        height: 30vw;
      }
      @media ${devices.sm} {
        height: 40vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
      @media ${devices.xl} {
        height: 60vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
    `}
${(props) =>
    props.six4 &&
    css`
      width: 17%;
      @media ${devices.md} {
        width: 100%;
        height: 30vw;
      }
      @media ${devices.sm} {
        height: 40vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
      @media ${devices.xl} {
        height: 60vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
    `}
${(props) =>
    props.six5 &&
    css`
      width: 17%;
      @media ${devices.md} {
        width: 100%;
        height: 30vw;
      }
      @media ${devices.sm} {
        height: 40vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
      @media ${devices.xl} {
        height: 60vw;
        display: flex;
        margin: 5px 0px;
        justify-content: center;
      }
    `}
${(props) =>
    props.seven1 &&
    css`
      width: 25%;
      @media ${devices.md} {
        height: 30vw;
      }
    `}
${(props) =>
    props.seven2 &&
    css`
      width: 73%;
      @media ${devices.md} {
        height: 30vw;
      }
    `}
`;

export const Work = () => {
  return (
    <Grand>
      <h2 style={{ textTransform: "capitalize", margin: "2rem 0px" }}>
        student work
      </h2>
      <Container>
        <Card First>
          <IMg
            First1
            src="https://www.nifafinearts.com/images/homegallery/img1.jpg"
            alt="img"
          />
          <IMg
            First1
            src="https://www.nifafinearts.com/images/homegallery/img2.jpg"
            alt="img"
          />
          <IMg
            First1
            src="https://www.nifafinearts.com/images/homegallery/img3.jpg"
            alt="img"
          />
          <IMg
            First1
            src="https://www.nifafinearts.com/images/homegallery/img4.jpg"
            alt="img"
          />
        </Card>

        <Card second>
          <IMg
            double
            src="https://www.nifafinearts.com/images/homegallery/img5.JPG"
            alt="img"
          />
          <IMg
            double
            src="https://www.nifafinearts.com/images/homegallery/img6.JPG"
            alt="img"
          />
        </Card>

        <Card thired>
          <IMg
            triple
            src="https://www.nifafinearts.com/images/homegallery/img7.jpg"
            alt="img"
          />
          <IMg
            triple
            src="https://www.nifafinearts.com/images/homegallery/img8.jpg"
            alt="img"
          />
          <IMg
            triple
            src="https://www.nifafinearts.com/images/homegallery/img9.jpg"
            alt="img"
          />
        </Card>

        <Card fourth>
          <IMg
            four1
            src="https://www.nifafinearts.com/images/homegallery/img10.jpg"
            alt="img"
          />
          <IMg
            four
            src="https://www.nifafinearts.com/images/homegallery/img11.jpg"
            alt="img"
          />
          <IMg
            four
            src="https://www.nifafinearts.com/images/homegallery/img12.jpg"
            alt="img"
          />
        </Card>

        <Card fifth>
          <IMg
            five1
            src="https://www.nifafinearts.com/images/homegallery/img13.jpg"
            alt="img"
          />
          <IMg
            five
            src="https://www.nifafinearts.com/images/homegallery/img14.jpeg"
            alt="img"
          />
          <IMg
            five
            src="https://www.nifafinearts.com/images/homegallery/img15.jpeg"
            alt="img"
          />
        </Card>

        <Card sixth>
          <IMg
            six1
            src="https://www.nifafinearts.com/images/homegallery/img16.jpeg"
            alt="img"
          />
          <IMg
            six2
            src="https://www.nifafinearts.com/images/homegallery/img17.jpg"
            alt="img"
          />
          <IMg
            six3
            src="https://www.nifafinearts.com/images/homegallery/img18.jpeg"
            alt="img"
          />
          <IMg
            six4
            src="https://www.nifafinearts.com/images/homegallery/img19.jpg"
            alt="img"
          />
          <IMg
            six5
            src="https://www.nifafinearts.com/images/homegallery/img20.jpeg"
            alt="img"
          />
        </Card>

        <Card seventh>
          <IMg
            seven1
            src="https://www.nifafinearts.com/images/homegallery/img21.jpeg"
            alt="img"
          />
          <IMg
            seven2
            src="https://www.nifafinearts.com/images/homegallery/img22.jpg"
            alt="img"
          />
        </Card>
      </Container>
    </Grand>
  );
};
