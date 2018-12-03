import styled from 'styled-components';
import image from '../images/KakaoTalk_Photo_2018-09-12-17-21-37.jpg';

const Yirey = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  background-image: url('${image}');
  background-position-y: 25%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Yirey;
