import styled from 'styled-components';
import { colors } from '../../styles/colors';


const GridContainer = styled.div`
  background-color: ${colors.shark};
  column-gap: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  height: auto;
  margin: auto;
  padding: 40px 0;
  row-gap: 10px;
  width: 950px;
`;

export { GridContainer };
