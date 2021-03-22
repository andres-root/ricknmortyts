import styled from 'styled-components';
import { colors } from '../../styles/colors';


const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  flex-flow: column;
  height: 300px;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${colors.shark};
  font-size: 80px;
  line-height: 50px;
  margin: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  background-color: ${colors.shark};
  color: rgb(255, 152, 0);
  font-size: 30px;
  margin: 0;
  padding: 4px 8px;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: ' ';
    border-right: 20px solid transparent;
    border-top: 43px solid ${colors.shark};
    position: absolute;
    right: -20px;
    top: 0;
  }

  &:before {
    content: ' ';
    border-bottom: 43px solid ${colors.shark};
    border-left: 20px solid transparent;
    position: absolute;
    left: -20px;
    top: 0;
  }
`;

export { HeaderContainer, Title, Subtitle };
