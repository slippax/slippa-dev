import styled from "styled-components";

const Wave = styled.div`
 display: block;
 position: relative;
 top: ${p=>p.top? '1px' : '-1px'};
 height: 250px;
 background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 500 234" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="${p=>p.theme.waveColor}" d="M 0 0 L 466 47 L 466 0 L 0 0 Z" stroke-width="0"></path> <path fill="${p=>p.theme.waveColor}" d="M 465 47 L 684 70 L 684 0 L 465 0 Z" stroke-width="0"></path> </svg>');
 background-size: cover;
 background-repeat: no-repeat;
  transform: ${(p) => (p.flip ? "rotate(180deg)" : "")};
  @media (max-width:499px) {
    background-size: contain;
 }
`;

export const WavesEntry = () => {
  return (
      <Wave top flip/>
  );
};

export const WavesEnd = () => {
  return (
<Wave/>
  );
};
