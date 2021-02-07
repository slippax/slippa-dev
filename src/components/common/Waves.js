import styled from "styled-components";

const Wave = styled.div`
 display: block;
 position: relative;
 top: ${p=>p.top? '1px' : '-1px'};
 height: 200px;
 background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1103 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="${p=>p.theme.waveColor}" d="M 0 88 C 173.5 88 173.5 17 347 17 L 347 17 L 347 0 L 0 0 Z" stroke-width="1"></path> <path fill="${p=>p.theme.waveColor}" d="M 346 17 C 557.5 17 557.5 74 769 74 L 769 74 L 769 0 L 346 0 Z" stroke-width="1"></path> <path fill="${p=>p.theme.waveColor}" d="M 768 74 C 935.5 74 935.5 0 1103 0 L 1103 0 L 1103 0 L 768 0 Z" stroke-width="1"></path></svg>');
 background-size: cover;
 background-repeat: no-repeat;
 z-index: -1;
  transform: ${(p) => (p.flip ? "rotate(180deg) rotateY(180deg)" : "rotateY(180deg)")};
  @media (max-width:499px) {
    background-size: contain;
 }
 @media (max-width:600px) {
   height: 100px;
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
