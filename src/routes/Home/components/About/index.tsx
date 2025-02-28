import styled from "styled-components";

const AboutSection = () => {
  const AboutWrapper = styled.div`
    box-sizing: border-box;
    padding: 8em 8.5em;
    width: 100vw;
    display: flex;
    justify-content:space-between;
    gap:25%;
  `;
  return (
    <AboutWrapper>
      <h3 className="text-[40px] font-medium">About</h3>
      <p className="text-[27px] font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </AboutWrapper>
  );
};

export default AboutSection;
