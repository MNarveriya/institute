import React, { useState } from "react";
import styled from "styled-components";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { devices } from "../GlobalCss";

const slide = [
  {
    url: "https://images.unsplash.com/photo-1680466350960-f06d9950e69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1667938403586-eec95b202379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1673292066230-c5de251a9ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1678453147360-caa23d7eb615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1680448588521-35f5d04a4193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
  },
];

const SliderContainer = styled.div`
  width: 100%;
  height: 450px;

  position: realative;

  @media ${devices.md} {
    height: 60vw;
  }
`;
const ImageSlider = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
  animation: duration(500);
  background-position: center;
  cursor: pointer;
  @media ${devices.md} {
    height: 60vw;
  }
`;
const Leftarrow = styled.div`
  position: absolute;
  top: 60%;
  left: 64px;
  color: #0f0101;
  cursor: pointer;
  font-size: 32px;
  background: #eee;
  border-radius: 100%;
  transform: translateX(0);
  transform: translateY(-50%);
  
  @media ${devices.sm} {
    top: 50%;
    left: 0rem;
  }
  @media ${devices.xs} {
    top: 50%;
    left: 0rem;
  }
`;
const RightArrow = styled.div`
  top: 60%;
  right: 64px;
  padding: 2px;
  color: #0f0101;
  font-size: 32px;
  cursor: pointer;
  background: #eee;
  position: absolute;
  transform: translateX(0);
  transform: translateY(-50%);
  border-radius: 100%;
  
  @media ${devices.sm} {
    top: 50%;
    right: 0rem;
  }
  @media ${devices.xs} {
    top: 50%;
    right: 0rem;
  }
`;
const SlideDot = styled.div`
  display: flex;
  top: 4px;

  justify-content: center;
  padding: 5px 0px;
`;

export const Banner = () => {
  
  const [currentIndex, setcurrentIndex] = useState(0);

  const preslide = () => {
    const isFirstsilde = currentIndex === 0;
    const newIndex = isFirstsilde ? slide.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const nextslide = () => {
    const isLastsilde = currentIndex === slide.length - 1;
    const newIndex = isLastsilde ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
  
  const gotoslide = (slideIndex) => {
    setcurrentIndex(slideIndex);
  };
  
  return (
    <>
      <SliderContainer>
        <ImageSlider
          style={{ backgroundImage: `url(${slide[currentIndex].url})` }}
        ></ImageSlider>

        {/* left arrow */}
        <Leftarrow>
          <BsChevronCompactLeft onClick={preslide} size={30} />
        </Leftarrow>
        {/* right arrow */}
        <RightArrow>
          <BsChevronCompactRight onClick={nextslide} size={30} />
        </RightArrow>
        <SlideDot>
          {slide.map((slide, slideIndex) => {
            return (
              <div
                key={slideIndex}
                style={{ cursor: "pointer", fontSize: "1.2rem" }}
    
                onClick={() => gotoslide(slideIndex)}
              >
                
              </div>
            );
          })}
        </SlideDot>
      </SliderContainer>
    </>
  );
};
