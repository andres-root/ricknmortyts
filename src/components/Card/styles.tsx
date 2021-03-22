import styled from 'styled-components';
import { colors } from '../../styles/colors';


const CardContainer = styled.article`
  border-radius: 8px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 16%), 0 0 0 1px rgb(0 0 0 / 8%);
  min-height: 520px;
  overflow: hidden;
  transition: all .2s ease-in-out;
  width: 300px;
  z-index: 1;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 2;
  }
`;

const Row = styled.div`
  align-items: center;
  border-top: 1px solid rgb(158, 158, 158, 0.1);
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px 0;

  &:first-child {
    border-top: unset;
  }
`;

const Key = styled.span`
  color: ${colors.silverChalice};
  font-size: 14px;
  text-align: left;
  text-transform: uppercase;
  word-spacing: 100vw;
`;

const Value = styled.span`
  color: ${colors.orangePeel};
  font-size: 14px;
  text-align: right;
`;

const ImageContainer = styled.div`
  height: 50%;
  position: relative;
`;

const Info = styled.div`
  background-color: ${colors.mineShaft};
  height: 50%;
  padding: 20px 8px;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
const Name = styled.h1`
  background-color: rgb(51, 51, 51, .5);
  bottom: 0;
  color: ${colors.wildSand};
  font-size: 24px;
  font-weight: initial;
  margin: 0;
  padding: 8px;
  position: absolute;
  text-align: left;
  width: 100%;
`;

export { CardContainer, Row, Key, Value, ImageContainer, Image, Info, Name };
