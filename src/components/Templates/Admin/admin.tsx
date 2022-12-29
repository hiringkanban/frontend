import SideBar from "../../Organisms/Sidebar/sidebar";
import Section from "../../Atoms/Section";
import NavBar from "../../Organisms/Navbar/navbar";

const AdminTemplate = () => {
    return (
        <>
            <SideBar />
            <Section left="220px">
                <NavBar />
            </Section>  
        </>
    )
}

export default AdminTemplate;