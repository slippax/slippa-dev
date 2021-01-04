import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {FaEnvelope} from 'react-icons/fa';

const MaterialButton = styled(Button)`
  background:${p=>p.theme.secondaryColor} !important;
  && {
      font-size: 1.1em;
      font-weight:800;
    color: ${p=>p.theme.bodyBackgroundColor};
    text-transform:unset;
  }
`;

const ButtonText = styled.p`
margin-top: 0px;
margin-bottom: 0px;
padding-right: 10px;
`;

const ButtonBox = styled.div`
padding-right:10px;
display:flex;
`;

export const NextButton = (props) => {
    return (
        <MaterialButton fade disableElevation={true} variant="filled" color="primary"><ArrowDropDownIcon fontSize="large"/><ButtonText>{props.text}</ButtonText></MaterialButton>
    );
}
export const MailButton = (props) => {
  return (
      <MaterialButton disableElevation={true} variant="filled" color="primary"><ButtonBox><FaEnvelope fontSize="large"/></ButtonBox><ButtonText>{props.text}</ButtonText></MaterialButton>
  );
}
