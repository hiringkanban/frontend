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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "../../Atoms/Badge";
import Button from "../../Atoms/Button";
import Modal from "../../Molecules/Modal";

type dataT = { 
    key: string,
    title: string,
    skills: string[],
    experiences: string,
    salary: number,
    date: string,
    status: string,
    actions: string
}

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
        render:(_, {skills}) => (
            <>
                {skills && (skills as any[]).map((item) => <Badge bg='info'>{item}</Badge>)}
            </>
        )
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

const data : dataT[] = [
    {
        key: '1',
        title: 'Team Lead',
        skills: ['Java', 'C++'],
        experiences: '5 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: ['PHP', 'C++'],
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: ['PHP', 'C++'],
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: ['PHP', 'C++'],
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: ['PHP', 'C++'],
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
    {
        key: '1',
        title: 'Backend Developer',
        skills: ['PHP', 'C++'],
        experiences: '02 years',
        salary: 15000,
        date: 'October 05, 2019',
        status: 'Active',
        actions: ''
    },
];

const AdminTemplate:React.FC<navbarProps> = ({ leftMenu, rightMenu }) => {

    const [value, setValue] = useState<string|number>('Sory by');
    const [value1, setValue1] = useState<string|number>('Sory by');
    const [open, setOpen] = useState(false);

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <>
            <SideBar />
            <Section left="220px">
                <NavBar leftMenu={leftMenu} rightMenu={rightMenu}/>
                <Container>
                    <FlexBox margin="50px 0 20px 0" justify="flex-end" gap="10px">
                        <Button onClick={() => setOpen(!open)}> open modal </Button>
                        <Modal 
                            title="Modal title" 
                            open={open}
                            onCancel={handleCancel}
                        >
                            Modal content
                        </Modal>
                        <Select 
                            width="120px"
                            options={[
                                { label: 'option 01', value: 'value 01' },
                                { label: 'option 02', value: 'value 02' },
                                { label: 'option 03', value: 'value 03' },
                                { label: 'option 04', value: 'value 04' }
                            ]}
                            selectedValue={value1}
                            handleChange={setValue1}
                            rightIcon={<FontAwesomeIcon icon={['fas', 'filter']} style={{color: '#5d5fef'}} />}
                        />
                        <Select 
                            width="150px"
                            options={[
                                { label: 'option 01', value: 'value 01' },
                                { label: 'option 02', value: 'value 02' },
                                { label: 'option 03', value: 'value 03' },
                                { label: 'option 04', value: 'value 04' }
                            ]}
                            selectedValue={value}
                            handleChange={setValue}
                            rightIcon={<FontAwesomeIcon icon={['fas', 'filter']} style={{color: '#5d5fef'}} />}
                        />
                    </FlexBox>
                    <Table columns={cols} dataSource={data}/>
                </Container>
            </Section>  
        </>
    )
}

export default AdminTemplate;