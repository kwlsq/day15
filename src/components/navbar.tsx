import styled from "styled-components";

const Navbar = () => {
  const Navbar = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding:2em;
  `;

  const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    gap:3em;
  `;
  const NavText = styled.p`
    font-weight: 400;
  `;

  return (
    <Navbar>
      <NavText>@Ayush Barnwal</NavText>
      <FlexSpaceBetween>
        <NavText>About</NavText>
        <NavText>Work</NavText>
        <NavText>Contact</NavText>
      </FlexSpaceBetween>
    </Navbar>
  );
};

export default Navbar;
