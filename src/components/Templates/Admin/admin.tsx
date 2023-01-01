import SideBar from "../../Organisms/Sidebar/sidebar";
import Section from "../../Atoms/Section";
import NavBar from "../../Organisms/Navbar/navbar";
import { navbarProps } from '../nabvarType';

const AdminTemplate:React.FC<navbarProps> = ({ leftMenu, rightMenu }) => {

    return (
        <>
            <SideBar />
            <Section left="220px">
                <NavBar leftMenu={leftMenu} rightMenu={rightMenu}/>
            </Section>  
        </>
    )
}

export default AdminTemplate;