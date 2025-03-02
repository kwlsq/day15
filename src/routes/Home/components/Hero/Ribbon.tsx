import styled from "styled-components";

const Ribbon = () => {
  const RibbonWrapper = styled.div`
    background-color: #000000;
    border-radius: 64.29px 0 0 64.29px;
    position: absolute;
    height: 95.14px;
    width: fit-content;
    font-size: 4em;
    right: -330px;
    bottom: 40%;
    cursor: pointer;
    padding: 0 15px;
    box-sizing: border-box;
    color: #ffffff;
    display:flex;
    align-items:center;
    transition: right 0.3s ease-in-out; 

    &:hover {
      right: 0px;
    }
  `;

  return <RibbonWrapper>👋 Hi I'm Ayush </RibbonWrapper>;
};

export default Ribbon;
