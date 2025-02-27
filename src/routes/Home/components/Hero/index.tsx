import styled, { keyframes } from "styled-components";
import Navbar from "../../../../components/navbar";

const HeroSection = () => {
  const marquee = keyframes`
  from {
    transform: translateX(80%);
  }
  to {
    transform: translateX(-80%);
  }
`;

  const HeroWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #c7d0d9;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  `;

  const Image = styled.img`
    height: 100%;
  `;

  const RunningText = styled.h1`
    position: absolute;
    bottom: 0;
    color: #f4f7fa;
    font-size: 9.39875em;
    animation: ${marquee} 12s linear infinite;
  `;

  return (
    <HeroWrapper>
      <Navbar />
      <Image src="src\assets\photo.webp" alt="photo of the web owner" />
      <RunningText>Webflow Developer - UI/UX Designer</RunningText>
    </HeroWrapper>
  );
};

export default HeroSection;
