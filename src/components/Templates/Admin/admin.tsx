import SideBar from "../../Organisms/Sidebar/sidebar";
import Section from "../../Atoms/Section";
import NavBar from "../../Organisms/Navbar/navbar";
import Table from "../../Molecules/Table";
import { navbarProps } from '../nabvarType';
import Container from "../../Atoms/Container";
import FlexBox from "../../Atoms/Flexbox/flexbox";
import { columnsT } from "../../Molecules/Table/type";
import Select from "../../Molecules/Select";
import { useState } from "react";

const cols: columnsT[] = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (_, { title }) => <a>{title}</a>,
    },
    {
        title: 'Skills',
        dataIndex: 'skills',
        key: 'skills',
    },
    {
        title: 'Experiences',
        dataIndex: 'experiences',
        key: 'experiences',
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salaty',
    },
    {
        title: 'Post date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
    },
];

const data = [
    {
        key: '1',
        title: 'Team Lead',
        skills: 'Java, C++',
        experiences: '5 years',
        salary: '32000$ - Yearly',
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: 'Java, C++',
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: 'Java, C++',
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: 'Java, C++',
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: 'Java, C++',
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: 'Java, C++',
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
];

const AdminTemplate:React.FC<navbarProps> = ({ leftMenu, rightMenu }) => {

    const [value, setValue] = useState<string|number>('Sory by');

    return (
        <>
            <SideBar />
            <Section left="220px">
                <NavBar leftMenu={leftMenu} rightMenu={rightMenu}/>
                <Container>
                    <FlexBox margin="50px 0 20px 0" direction="column">
                        <Select 
                            width="200px"
                            options={[
                                { label: 'option 01', value: 'value 01' },
                                { label: 'option 02', value: 'value 02' },
                                { label: 'option 03', value: 'value 03' },
                                { label: 'option 04', value: 'value 04' }
                            ]}
                            selectedValue={value}
                            handleChange={setValue}
                        />
                    </FlexBox>
                    <Table columns={cols} dataSource={data}/>
                </Container>
            </Section>  
        </>
    )
}

export default AdminTemplate;