import {
    NavBar,
    Container
} from '../../index';

import { navbarProps } from '../nabvarType';

const HomeTemplate: React.FC<navbarProps> = ({ leftMenu, rightMenu, logo }) => {
    
    return (
        <>
            <NavBar leftMenu={leftMenu} rightMenu={rightMenu} logo={logo} />
            <Container>  
                <h1>Home page</h1>
            </Container>
        </>
    )
}

export default HomeTemplate;