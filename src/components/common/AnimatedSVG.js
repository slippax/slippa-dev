import SvgLines from 'react-mt-svg-lines';
import  {KeyboardSVG} from '../../assets/KeyboardSVG';
export const AnimatedSVG = () => {
    return(
        <SvgLines animate={true}
        duration={1000}
        stagger={500} >
<KeyboardSVG/>
    </SvgLines>
    );
}