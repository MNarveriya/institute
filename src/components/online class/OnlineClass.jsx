import React from "react";
import { devices } from "../GlobalCss";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 6rem 6rem;
  align-items: center;
  background-size: cover;
  box-sizing: border-box;
  background-attachment: fixed;
  justify-content: space-between;
  background: linear-gradient(100deg, rgba(0, 0, 0, 1), rgba(35, 31, 32, 0.6)),
    url(https://www.nifafinearts.com/images/appbg.jpg) no-repeat center;

  @media ${devices.md} {
    padding: 1rem 1rem;
  }
`;

const Onlinepart1 = styled.div`
  width: 35rem;
  text-align: start;

  @media ${devices.md} {
    width: 100%;
    text-align: center;
  }
`;
const Onlinepart2 = styled.div`
  @media ${devices.md} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0p 0px 5px #fff;
  }
`;

const Iframe = styled.iframe`
  width: 30rem;
  height: 30rem;
  box-shadow: 0px 0p 0px 5px #fff;

  @media ${devices.md} {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 10px 0px;
    justify-content: center;
    box-shadow: 0px 0p 0px 3px #fff;
  }
`;

const Button = styled.button`
  padding: 0px;
  min-width: 0px;
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  max-width: 480px;
  min-height: 40px;
  overflow: hidden;
  user-select: none;
  line-height: 25px;
  padding-left: 20px;
  text-align: center;
  padding-right: 20px;
  align-items: center;
  border-radius: 100px;
  display: inline-flex;
  border: 3px solid #fff;
  vertical-align: middle;
  box-sizing: border-box;
  justify-content: center;
  -webkit-user-select: none;
  text-transform: capitalize;
  touch-action: manipulation;
  background: linear-gradient(90deg, #812868 0%, #f954a4 100%);

  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const Downloadpart = styled.div`
  @media ${devices.xs} {
    display: flex;
    align-items: center;
    display: inline-block;
    flex-direction: column;
  }
`;

const Anchor = styled.a`
  ${(props) =>
    props.seconanchor &&
    css`
      padding-left: 20px;
      @media ${devices.xs} {
        display: flex;
        padding-left: 0px;
        flex-direction: column;
      }
    `}
`;

export const OnlineClass = () => {
  return (
    <Container>
      <Onlinepart1>
        <h2 style={{ color: "#fff", textTransform: "capitalize" }}>
          online class
        </h2>
        <p style={{ color: "#fff", fontWeight: "200" }}>
          Dear Students/Parents, Nifa presents its Learning App for your regular
          art practice in which we have added many amazing features Like:
          Step-by-step recorded demo videos prepared by your faculty members.
          Regular assessment of your practise through assignment section. Live
          class section from same app. Attendance, payment invoice, art news,
          announcements, important information and direct connect with the
          management team are some more features. So hurry up n join now to
          experience personalised coaching by experts sitting at your home. We
          wish u Happy Learning. Stay Safe n Healthy.
        </p>
        <Button>read more</Button>
        <br />
        <br />
        <h4 style={{ textTransform: "capitalize", color: "#fff" }}>
          download the app
        </h4>
        <Downloadpart>
          <Anchor href="https://play.google.com/store/apps/details?id=co.thanos.fljvr">
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
        </Downloadpart>
      </Onlinepart1>

      <Onlinepart2>
        <Iframe
          // style={{
          //   width: "30rem",
          //   height: "30rem",
          //   boxShadow: "0px 0px 0px 10px #fff",
          // }}
          src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
          frameborder="0"
          allowfullscreen
          allow="autoplay"
          title="example"
        />
      </Onlinepart2>
    </Container>
  );
};
