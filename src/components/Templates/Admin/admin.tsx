import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import SideBar from '../../Organisms/Sidebar/sidebar';
import Section from '../../Atoms/Section';
import Container from '../../Atoms/Container';
import AdminNavBar from '../../Organisms/AdminNavBar';
import SideBarContext from '../../../context';

const AdminWrapper = styled.div`
  background-color: #f5f5f9;
`;

interface AdminProps {
  children: React.ReactNode;
}

const AdminTemplate: React.FC<AdminProps> = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const sideBartoggle = useMemo(() => ({ toggle, setToggle }), [toggle]);

  return (
    <AdminWrapper>
      <SideBarContext.Provider value={sideBartoggle}>
        <SideBar />
        <Section left="260px">
          <AdminNavBar />
          <Container>{children}</Container>
        </Section>
      </SideBarContext.Provider>
    </AdminWrapper>
  );
};

export default AdminTemplate;
