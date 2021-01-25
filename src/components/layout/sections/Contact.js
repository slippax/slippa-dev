import styled from "styled-components";
import { useRef } from "react";
import { MailButton, Toast } from "../../common/";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { AnimatedSVG } from "../../common/AnimatedSVG";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.primaryColor};
`;

const Container = styled.div`
  padding: 1em;
  padding-top: 1.5em;
  padding-bottom: 0.7em;
  max-width: 400px;
  @media (min-width: 700px) {
    padding: 1em;
    max-width: 700px;
    font-size: 1.1em;
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    font-size: 1.2em;
  }
`;

const Subtitle = styled.p`
  font-size: 2.5em;
  margin-top: 0;
  font-weight: 600;
  color: ${(p) => p.theme.secondaryColor};
  margin-bottom: 20px;
`;
const Text = styled.p`
  color: ${(p) => p.theme.bodyFontColor};
  font-size: 1.35em;
  font-weight: 400;
  margin-bottom: ${(p) => (p.first ? "0px" : "30px")};
  margin-top: ${(p) => (p.second ? "0px" : "0")};
  margin-bottom: 20px;
  text-align: ${(p) => (p.last ? "center" : "start")};
`;

const Button = styled.div`
  text-align: center;
`;

const ConnectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  color: ${(p) => p.theme.secondaryColor};
  padding: 5px;
  cursor: pointer;
`;

const KeyboardBox = styled.div`
  justify-content: center;
  text-align: center;
  width: 225px;
  margin: 0 auto;
  @media (min-width: 700px) {
    width: 270px;
  }
`;

export const Contact = () => {
  let myRef = useRef();
  return (
    <div>
      <Wrapper>
        <Container>
          <Fade top>
            <Subtitle>Contact.</Subtitle>
            <Text>
              {" "}
              Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </Text>
            <Button
              onClick={() => {
                window.open("mailto:slippa@me.com");
              }}
            >
              <MailButton text="GET IN TOUCH" />
            </Button>
            <KeyboardBox>
              <AnimatedSVG />
            </KeyboardBox>
            <Text last>In the meantime, feel free to connect with me.</Text>
            <ConnectBox>
              <Box
                onClick={() => {
                  window.open("https://github.com/slippax");
                }}
              >
                <FaGithubSquare fontSize={45} />
              </Box>
              <Box
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/stephen-lippa-465203198/"
                  );
                }}
              >
                <FaLinkedin fontSize={45} />
              </Box>
            </ConnectBox>
          </Fade>
        </Container>
      </Wrapper>
      <div ref={myRef}></div>
    </div>
  );
};
