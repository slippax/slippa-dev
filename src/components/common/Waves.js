import styled from "styled-components";

const Wave = styled.div`
 display: block;
 position: relative;
 top: -0px;
 height: 190px;
 background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="${p=>p.theme.waveColor}" d="M 0 0 C 183.5 0 183.5 50 367 50 L 367 50 L 367 0 L 0 0 Z" stroke-width="0"></path> <path fill="${p=>p.theme.waveColor}" d="M 366 50 C 433 50 433 49 500 49 L 500 49 L 500 0 L 366 0 Z" stroke-width="0"></path> </svg>');
 
 background-size: cover;
 background-repeat: no-repeat;
  transform: ${(p) => (p.flip ? "rotate(180deg)" : "")};
  @media (max-width:499px) {
    background-size: contain;
 }
`;

export const WavesEntry = () => {
  return (
      <Wave flip/>
  );
};

export const WavesEnd = () => {
  return (
<Wave/>
  );
};
