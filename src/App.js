import React from "react";
import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import ToolsGrid from "./components/Tool/ToolsGrid";

import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";

const tools = [
  { name: "Java", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDLTeb2ssFVFXtStyuvfj7IWY1xtL6Cuy9g&s" },
  { name: "Python", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_3uc5bIQxho5sW5dMyBkTycGMBrsFVkg3p7P9Z-auJrCw5xjghPCRwYSeRtxmFzbmT4&usqp=CAU" },
  { name: "Spring Boot", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJgEU8pGls7HLBH7pd6NuG7dIP7mQofVjxg&s" },
  { name: "HTML", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9_GLRM3yt8ZEApEK0U_Trof8dR5mMDOjVA&s" },
  { name: "CSS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyarc5ql5Qb0aUtE9MLaAapWxWpH8kXp0GA&s" },
  { name: "JavaScript", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-86vRuxOArrVRmMgerLZ5pi8yCs6U7zsQ&s" },
  { name: "React Js", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wh_vrysQFY_0CkcD-e-lYPPHLvsTaXqIGA&s" },
  { name: "Node Js", img: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png" },
  { name: "Bootstrap", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQvo7DiCYq0KDfGNiQFlNiaozrX5Ze03TbQ&s" },
  { name: "MySQL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3P-jnVaFvLyC8AweZzJ9vQY6Y4egFM2tLQ&s" },
  { name: "MongoDB", img: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" },
  { name: "Git", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w5v3NHCaW5Ig1eG2mWbruAG3_rk_4_tJtg&s" },
  { name: "Postman", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPARNK1AQ86vt-kFVrGjRrJtZUNcT3-szdg&s" },
  { name: "Vercel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr95DPhxYnDyF-TWJv8QBPt1PDzBWGG__nkw&s" },
  { name: "Visual Studio Code", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn91uTL21JJpJN1JrzGYppRDxj9vKzk0fpKA&s" },
  { name: "Eclipse IDE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUnlgBwo7MceNKb-a944HoV4ulzwxPgJdiw&s" }
];

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        <Projects />
      </LightColor>
      <Clients />
      <LightColor>
      
        <ToolsSection id="tools">
          <ToolsGrid tools={tools} />
        </ToolsSection>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

const ToolsSection = styled.div`
  padding: 4rem 0;
`;
