import React from "react";
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
import Row from "../../Atoms/Row";
import Col from "../../Atoms/Col";
import Input from "../../Atoms/Input";
import Drodown from "../../Molecules/Drodown";
import Text from "../../Atoms/Text";
type dataT = { 
    key: string,
    title: string,
    skills: string[],
    experiences: string,
    salary: number,
    date: string,
    status: string,
    actions: {}[]
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
        render: (_, {actions}) => <Drodown menu={actions}/>
    },
];



type activeModalT = { 
    name:string,
    onOk: () => void
}

const AdminTemplate:React.FC<navbarProps> = ({ leftMenu, rightMenu }) => {

    const [value, setValue] = useState<string|number>('Sory by');
    const [value1, setValue1] = useState<string|number>('Sory by');
    const [open, setOpen] = useState<boolean|string>(false);

    const [activeModal, setActiveModal] = 
        useState<activeModalT>({name: '', onOk: () => null });

    const openModal = (name: string, onOk: () => void) => {
        setActiveModal({...activeModal, name: name, onOk: onOk})
        setOpen(true);
    }

    const data : dataT[] = [
        {
            key: '1',
            title: 'Team Lead',
            skills: ['Java', 'C++'],
            experiences: '5 years',
            salary: 15000,
            date: 'October 05, 2019',
            status: 'Active',
            actions: [
                { 
                    name: 're-new',
                    icon: <FontAwesomeIcon icon={['far', 'circle-play']}/>,
                    onClick: () => console.log('re-new'),
                },
                { 
                    name: 'Pause',
                    icon: <FontAwesomeIcon icon={['far', 'circle-pause']}/>,
                    onClick: () => openModal(`Delete job 01`, () => console.log('pause call api 01...')),
                },
                { 
                    name: 'Delete',
                    icon: <FontAwesomeIcon icon={['far', 'trash-can']}/>,
                    onClick: () => openModal(`Delete job 01`, () => console.log('delete call api 01...')),
                }
            ]
        },
        {
            key: '1',
            title: 'Backend Developer',
            skills: ['PHP', 'C++'],
            experiences: '02 years',
            salary: 15000,
            date: 'October 05, 2019',
            status: 'Active',
            actions: [
                { 
                    name: 're-new',
                    icon: <FontAwesomeIcon icon={['far', 'circle-play']}/>,
                    onClick: () => console.log('re-new'),
                },
                { 
                    name: 'Delete',
                    icon: <FontAwesomeIcon icon={['far', 'trash-can']}/>,
                    onClick: () => openModal(`Delete job 02`, () => console.log('delete call api 02...')),
                }
            ]
        },
        {
            key: '1',
            title: 'Backend Developer',
            skills: ['PHP', 'C++'],
            experiences: '02 years',
            salary: 15000,
            date: 'October 05, 2019',
            status: 'Active',
            actions: []
        },
        {
            key: '1',
            title: 'Backend Developer',
            skills: ['PHP', 'C++'],
            experiences: '02 years',
            salary: 15000,
            date: 'October 05, 2019',
            status: 'Active',
            actions: []
        },
        {
            key: '1',
            title: 'Backend Developer',
            skills: ['PHP', 'C++'],
            experiences: '02 years',
            salary: 15000,
            date: 'October 05, 2019',
            status: 'Active',
            actions: []
        },
        {
            key: '1',
            title: 'Backend Developer',
            skills: ['PHP', 'C++'],
            experiences: '02 years',
            salary: 15000,
            date: 'October 05, 2019',
            status: 'Active',
            actions: []
        },
    ];


    return (
        <>
            <Modal
                id="delete-job"
                title={activeModal.name}
                open={open}
                onCancel={() => setOpen(false)}
                onOk={() => activeModal.onOk()}
                >
                    Delete Modal content
            </Modal>
            <SideBar />
            <Section left="220px">
                <NavBar leftMenu={leftMenu} rightMenu={rightMenu}/>
                <Container>
                
                    <Row margin="35px 0 5px 0">
                        <Col span={3}>
                            <Input placeholder="Search..." onChange={() => console.log('change')} />
                        </Col>
                       
                        <Col span={6} offset={3}>
                            <FlexBox justify="end" alignItem="center">
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
                        </Col>
                    </Row>
                    <div style={{overflowX:'auto'}}>
                        <Table columns={cols} dataSource={data}/>
                    </div>
                    <h1>hello</h1>
                </Container>
            </Section>  
        </>
    )
}

export default AdminTemplate;