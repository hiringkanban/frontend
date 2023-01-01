import AdminTemplate from "../../Templates/Admin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const leftAdminMenu = [
    { value: 'Hi Bilal!', href: '#' },
];

const rightAdminMenu = [
    { value: 'Sign out', href: '#', icon:<FontAwesomeIcon icon={['fas', 'power-off']} /> },
];

const Admin = () => {
    return <AdminTemplate leftMenu={leftAdminMenu} rightMenu={rightAdminMenu} />
}

export default Admin;