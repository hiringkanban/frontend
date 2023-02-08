import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import SideBar from '../../Organisms/Sidebar/sidebar';
import Section from '../../Atoms/Section';
import Container from '../../Atoms/Container';
import AdminNavBar from '../../Organisms/AdminNavBar';
import SideBarContext from '../../../context';
import FlexBox from '../../Atoms/Flexbox';
import InlineList from '../../Molecules/InlineList';

const AdminWrapper = styled.div`
  background-color: #f5f5f9;
`;

interface AdminTemplateProps {
  children: React.ReactNode;
  breadcrumbs: { value: string; href: string }[];
}

const AdminTemplate: React.FC<AdminTemplateProps> = ({ children, breadcrumbs }) => {
  const [toggle, setToggle] = useState(false);
  const sideBartoggle = useMemo(() => ({ toggle, setToggle }), [toggle]);

  return (
    <AdminWrapper>
      <SideBarContext.Provider value={sideBartoggle}>
        <SideBar />
        <Section left="260px">
          <AdminNavBar />
          <Container>
            <FlexBox margin="30px 0">
              <InlineList items={breadcrumbs} breadcrumbs fontSize="22px" />
            </FlexBox>
            {children}
          </Container>
        </Section>
      </SideBarContext.Provider>
    </AdminWrapper>
  );
};

export default AdminTemplate;
