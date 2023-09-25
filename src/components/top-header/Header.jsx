import React from "react";
import { styled, css } from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { devices } from "../GlobalCss";

const HeaderContainer = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.7rem 6rem;
  box-sizing: border-box;
  justify-content: space-between;
  background: linear-gradient(90deg, #812868 0%, #f954a4 100%);
  @media ${devices.md} {
    display: flex;
    padding: 0.7rem 1rem;
    flex-direction: column;
  }
`;
const HeaderPart1 = styled.div`
  text-transform: capitalize;
  
`;
const HeaderPart2 = styled.div`
  display: flex;
  align-items: center;
  @media ${devices.md} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Contact = styled.a`
  color: #fff;
  display: flex;
  cursor: pointer;
  margin: 0px 8px;
  text-decoration: none;
  align-items: center;
  

  ${(props) => props.contactemail && css`
        display: none;
        @media ${devices.md}{
          color: black;
          display: flex;
          display: block;
          align-items: center;
        }
  `}
  ${(props) => props.contactnumber && css`
        display: none;
        @media ${devices.md}{
          color: black;
          display: flex;
          display: block;
          align-items: center;
          margin-bottom: 1rem;
        }
  `}
`;

const Span = styled.span`
  ${(props) =>
    props.gap &&
    css`
      display: flex;
      font-size: 14px;
      padding-right: 8px;
      align-items: center;
      
    `}
`;

const HeaderBottom = styled.div`
  width: 100%;
  color: black;
  display: flex;
  background: white;
  padding: 0rem 6rem;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  

  @media ${devices.md} {
    display: flex;
    padding: 0.7rem 1rem;
    flex-direction: column;
  }
`;
const HeaderBottomPart1 = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderBottomPart1img = styled.img`
  height: 4rem;
`;
const HeaderBottomPart2 = styled.div`
 
  @media ${devices.md} {
    display: none;
  }
`;
const Ul = styled.ul`
  display: flex;

  align-items: center;
`;
const Li = styled.li`
  display: flex;
  cursor: pointer;
  list-style: none;
  margin: 0px 1rem;
  align-items: center;
  text-transform: capitalize;

  &:hover {
    padding: 5px 0px;
    box-shadow: 0px 1px 0px 0px #f954a4, 0px -1px 0px 0px #f954a4;
    
  }
`;

const Burgerdiv = styled.div`
  color: #fff;
  display: none;
  text-transform: capitalize;
  background-color: darkblue;
  @media ${devices.md} {
    width: 100%;
    display: flex;
    display: block;
    cursor: pointer;
    padding: 5px 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderPart1>
          <p>welcome to the national intitute of fine arts</p>
        </HeaderPart1>
        <HeaderPart2>
          <Contact href="">
            <Span gap>
              <BsFillTelephoneFill />
            </Span>
            9955110128
          </Contact>
          <Contact href="">
            <Span gap>
              <BsFillTelephoneFill />
            </Span>
            9810130552
          </Contact>
          <Contact href="">
            <Span gap>
              <MdEmail />
            </Span>
            admission@nifafinearts.com
          </Contact>
          <Contact href="">
            <BiLogoFacebook />
          </Contact>
          <Contact href="">
            <AiOutlineTwitter />
          </Contact>
          <Contact href="">
            <AiOutlineInstagram />
          </Contact>
          <Contact href="">
            <AiFillYoutube />
          </Contact>
        </HeaderPart2>
      </HeaderContainer>
      <HeaderBottom>
        <HeaderBottomPart1>
          <HeaderBottomPart1img src="https://www.nifafinearts.com/images/nifa-new-logo.png" />
        </HeaderBottomPart1>
        <Contact href="" contactemail>
          <Span gap>
            <MdEmail />
          </Span>
          admission@nifafinearts.com
        </Contact>
        <Contact href="" contactnumber>
          <Span gap>
            <BsFillTelephoneFill />
          </Span>
         +91-9955110128/9810130552
        </Contact>
        <HeaderBottomPart2>
          <Ul>
            <Li>home</Li>
            <Li>about</Li>
            <Li>course</Li>
            <Li>activity</Li>
            <Li>admission</Li>
            <Li>art gallery</Li>
            <Li>franchise</Li>
            <Li>online clsses</Li>
            <Li>videos</Li>
            <Li>pay fee</Li>
            <Li>contact</Li>
          </Ul>
        </HeaderBottomPart2>
        {/* <GiHamburgerMenu /> */}
        <Burgerdiv>
          home <AiOutlineArrowDown />
        </Burgerdiv>
      </HeaderBottom>
    </>
  );
};
