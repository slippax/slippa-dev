import SvgLines from 'react-mt-svg-lines';
import  {KeyboardSVG} from '../../assets/KeyboardSVG';
export const AnimatedSVG = () => {
    return(
        <SvgLines animate={true}
        duration={3000}
        stagger={50}
        timing="linear"
       >
<KeyboardSVG/>
    </SvgLines>
    );
}