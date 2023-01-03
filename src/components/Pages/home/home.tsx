import  HomeTemplate from '../../Templates/Home';
import { leftMenu, rightMenu, logo } from '../navbarfill';
const Home = () => {
   
    return (
        <>
            <HomeTemplate 
                leftMenu={leftMenu}
                rightMenu={rightMenu}
                logo={logo}
            />
        </>

    )
    
}

export default Home;