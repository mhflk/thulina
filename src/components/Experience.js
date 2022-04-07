import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { DarkTheme,lightTheme, mediaQueries } from "./Themes";

import { Design, Develope } from "./AllSvgs";
import Loading from "../subComponents/Loading";

//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticlesComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
  a:link {
    color: blue;
    background-color: transparent;
    text-decoration: none;
  }
  a:visited {
    color: blue;
    background-color: transparent;
    text-decoration: none;
  }
  a:hover {
    color: red;
    background-color: transparent;
    text-decoration: underline;
  }
  a:active {
    color: black;
    background-color: transparent;
    text-decoration: underline;
  }
`;

const Experience = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme='light' />
          <PowerButton />
          <SocialIcons theme='light' />
          <ParticlesComponent theme='light' />

          <Main>
            <Title>
               Experience
            </Title>
            <Description>
            I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.
            </Description>
            <Description>
              <u><strong>Work and Volunteership experience</strong></u> <br />
              <ul>
                <a href="https://www.mhflk.ga/"><li>Web developer at MHFLK</li></a>
                
                <a href="https://www.instagram.com/ananda_football/"><li>Web developer at ACFC</li></a>
                <a href="https://www.acicts.lk/"><li>Member at ACICTS</li></a>
                
              </ul>
            </Description>
            <Description>
              
            </Description>
          </Main>
          <Main>
            <Title>
              Achievements
            </Title>
            <Description>
              I have achievements from both sports and Coding
            </Description>
            <Description>
              <u><strong>Coding</strong></u> <br />
              <ul>
                <a href="https://acicts.github.io/BITS20/leaderboard.html"><li>Overall 4rth place (BITS 2020)</li></a>
                
                <a href="https://drive.google.com/file/d/18d3xmkaA_t09jWTc8v8-XCWutB0czk5l/view?usp=sharing"><li>1st in coding tasks (BITS 2020)</li></a>
                
                
              </ul>
              
            </Description>
            <Description>
              <u><strong>Sports</strong></u> <br />
              <p>I've won various national level sports certifications (Karate,Football).</p>
            </Description>
          </Main>
          
          <BigTitle text=" Experience" top="80%" right="30%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default Experience;
