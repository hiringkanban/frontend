import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AdminTemplate from "../../Templates/Admin"

const leftAdminMenu = [
    { value: 'Hi Bilal!', href: '#' },
];

const rightAdminMenu = [
    { value: 'Sign out', href: '#', icon:<FontAwesomeIcon icon={['fas', 'power-off']} /> },
];

const AdminWrapper = styled.div`
    background-color: #f5f5f9;
`;

const Admin = () => {
    return (
        <AdminWrapper>
            <AdminTemplate leftMenu={leftAdminMenu} rightMenu={rightAdminMenu} />
        </AdminWrapper>
    );
}

export default Admin;