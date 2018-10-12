import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarLink = styled(Link)`
  padding: 1em;
  text-decoration: none;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.5em;
  color: #56cbf9;

  :hover {
    color: #0b3954;
  }
`;

export default NavbarLink;
