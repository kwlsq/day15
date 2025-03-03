import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const Navbar = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 2em;
  `;

  const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3em;
  `;

  const NavText = styled.p`
    font-weight: 400;
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <Navbar>
      <NavText>
        <NavLink to="/">@Ayush Barnwal</NavLink>
      </NavText>
      <FlexSpaceBetween>
        <NavText>
          <NavLink to="/">About</NavLink>
        </NavText>
        <NavText>Work</NavText>
        <NavText>
          <NavLink to="/contact">Contact</NavLink>
        </NavText>
      </FlexSpaceBetween>
    </Navbar>
  );
};

export default Navbar;
