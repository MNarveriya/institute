import React from "react";
import styled, { css } from "styled-components";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { devices } from "../GlobalCss";

const Container = styled.div`
  padding: 0.7rem 6rem;
  box-sizing: border-box;
  background: url(https://www.nifafinearts.com/images/fotbg2.jpeg) no-repeat;
  background-size: cover;
  background-position: center;

  @media ${devices.md} {
    padding: 0.7rem 1rem;
  }
`;

const Footer1 = styled.div`
  display: flex;
  text-transform: capitalize;
 
  justify-content: space-between;
   
  @media ${devices.sm} {
    display: flex;
    flex-direction: column;
  }
`;
const Div1 = styled.div`
  
  width: 45%;
display: flex;
align-items: center;
  justify-content: space-between;
  @media ${devices.sm} {
    width: 100%;
    display: flex;

    justify-content: space-between;
  }
  @media ${devices.xs} {
    width: 100%;
    display: flex;

    align-items: center;
    flex-direction: column;
  }
`;
const Div2 = styled.div`
width: 45%;
display: flex;
align-items: center;
  justify-content: space-between;
  @media ${devices.sm} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media ${devices.xs} {
    width: 100%;
    display: flex;

    align-items: center;
    flex-direction: column;
  }
`;
const Company = styled.div`
  text-align: start;
  @media ${devices.xs} {
    text-align: center;
  }
`;
const Activities = styled.div`
  text-align: start;
  @media ${devices.xs} {
    text-align: center;
  }
`;
const Popular = styled.div`
  text-align: start;
  @media ${devices.xs} {
    text-align: center;
  }
`;
const Location = styled.div`
  text-align: start;
  @media ${devices.xs} {
    text-align: center;
  }
`;
const Footer2 = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${devices.sm} {
    display: flex;
    flex-direction: column;
  }
`;
const Contact = styled.div`
  text-align: start;
  @media ${devices.sm} {
    text-align: center;
  }
`;
const Download = styled.div`
  text-align: end;
  @media ${devices.sm} {
    text-align: center;
  }
`;

const Icondiv = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: start;

  @media ${devices.sm} {
    display: flex;
    margin-bottom: 10px;
    justify-content: center;
  }
`;

const Anchordiv = styled.div`
@media ${devices.xs} {
  width: 100%;
  display: flex;
  flex-direction: column;
}

`;
const Anchor = styled.a`
  ${(props) =>
    props.seconanchor &&
    css`
      padding-left: 20px;
      @media ${devices.xs} {
        padding-left: 0px;
       
      }
    `}
`;

export const Footer = () => {
  return (
    <Container>
      <Footer1>
        <Div1>
          <Company>
            <span style={{ fontWeight: "bold" }}>Company</span>
            <p style={{ fontWeight: "500" }}>
              about <br /> facility <br /> career <br /> contact us <br /> term
              & condition <br />
              refund policy <br /> privicy policy
            </p>
          </Company>
          <Activities>
            <span style={{ fontWeight: "bold" }}>Activities</span>
            <p style={{ fontWeight: "500" }}>
              art gallery <br /> work shop <br /> outdoor activities <br />{" "}
              media coverage <br /> art events <br /> exhibition <br /> daily
              activities{" "}
            </p>
          </Activities>
        </Div1>
        <Div2>
          <Popular>
            <span style={{ fontWeight: "bold" }}>popular course</span>
            <p style={{ fontWeight: "500" }}>
              {" "}
              diploma in fine arts <br /> certificate hobby course <br />{" "}
              entrance preparation <br /> animation sketching <br /> kids
              diploma{" "}
            </p>
          </Popular>
          <Location>
            <span style={{ fontWeight: "bold" }}>our location</span>
            <p style={{ fontWeight: "500" }}>
              gorgaon (dlf phase - 4) <br /> mumbai (andheri west) <br /> south
              delhi (kailash colony) <br />
              <br />{" "}
              <span style={{ fontWeight: "bold" }}>
                international branches
              </span>{" "}
              <br />
              london <br /> USA <br /> dubai , UAE{" "}
            </p>
          </Location>
        </Div2>
      </Footer1>
      <Footer2>
        <Contact>
          <h3 style={{ margin: "0px" }}>
            NIFA Is A Unit Of Nifaedutech Pvt Ltd.
          </h3>{" "}
          <br />
          <span style={{ fontWeight: "bold" }}>popular course</span> <br />
          <span style={{ fontSize: "20px" }}>9955112200 , 9810130552</span>{" "}
          <br />
          <p style={{ margin: "0px" }}>admission@nifafinearts.com</p> <br />
          <Icondiv>
            <div
              style={{
                padding: "5px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BiLogoFacebook style={{ color: "#2358CA", cursor: "pointer" }} />
            </div>
            <div
              style={{
                padding: "5px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiOutlineTwitter
                style={{ color: "#00acee", cursor: "pointer" }}
              />
            </div>
            <div
              style={{
                padding: "5px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiOutlineInstagram
                style={{ color: "#fa7e1e", cursor: "pointer" }}
              />
            </div>
            <div
              style={{
                padding: "5px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiFillYoutube style={{ color: "#FF0000", cursor: "pointer" }} />
            </div>
          </Icondiv>
        </Contact>
        <Download>
          <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
            download app
          </span>{" "}
          <br />
          <Anchordiv>
            <Anchor
              style={{ display: "inline-block", marginTop: "10px" }}
              href="https://play.google.com/store/apps/details?id=co.thanos.fljvr"
            >
              <img
                src="https://www.nifafinearts.com/images/gplay.png"
                alt=""
                style={{ width: "8rem" }}
              ></img>
            </Anchor>
            <Anchor
              seconanchor
              href="https://apps.apple.com/us/app/apple-store/id1472483563"
            >
              <img
                src="https://www.nifafinearts.com/images/appstore.png"
                alt=""
                style={{ width: "8rem" }}
              ></img>
            </Anchor>
          </Anchordiv>
          <p>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
        </Download>
      </Footer2>
    </Container>
  );
};
