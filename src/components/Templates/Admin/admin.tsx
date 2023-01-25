import React from "react";
import SideBar from "../../Organisms/Sidebar/sidebar";
import Section from "../../Atoms/Section";
import Table from "../../Molecules/Table";
import { navbarProps } from '../nabvarType';
import Container from "../../Atoms/Container";
import { columnsT } from "../../Molecules/Table/type";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "../../Atoms/Badge";
import Modal from "../../Molecules/Modal";
import Drodown from "../../Molecules/Drodown";
import AdminNavBar from "../../Organisms/AdminNavBar";
import { SideBarContext } from "../../../context";
import Pagination from "../../Molecules/Pagination";
import Box from "../../Atoms/Box";
import FlexBox from "../../Atoms/Flexbox/flexbox";
import Select from "../../Molecules/Select";
import InlineList from "../../Molecules/InlineList";
import Row from "../../Atoms/Row";
import Input from "../../Atoms/Input";
import Col from "../../Atoms/Col";
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
                {skills && (skills as any[]).map((item) => <Badge bg='dark'>{item}</Badge>)}
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
        render: (_, {actions}) => <Drodown menu={actions} name="Actions"/>
    },
];

type activeModalT = { 
    name:string,
    onOk: () => void
}

const AdminTemplate:React.FC<navbarProps> = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [toggle, setToggle] = useState(false);
    const [current, setCurrent] = useState(1);
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
                    onClick: () => console.log(this),
                },
                { 
                    name: 'Pause',
                    icon: <FontAwesomeIcon icon={['far', 'circle-pause']}/>,
                    onClick: () => openModal(`Team Lead`, () => console.log('pause call api 01...')),
                },
                { 
                    name: 'Delete',
                    icon: <FontAwesomeIcon icon={['far', 'trash-can']}/>,
                    onClick: () => openModal(`Team Lead`, () => console.log('delete call api 01...')),
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

    const handleChange = (page: number): void => {
        setCurrent(page);
    }

    const [value, setValue] = useState<string|number>('Filter by');
    const breadcrumbs = [
        { value: 'Admin', href: '#'},
        { value: 'Jobs', href: '#'}
    ];

    const tabelHeader = [
        <Input 
            placeholder="Search..."
            onChange={() => console.log('change')}
            width="25%"
        /> 
    ];

    const tableFooter = [
        <FlexBox justify="center">
            <Pagination 
                total={15}
                pageSize={5}
                current={current}
                onChange={handleChange}
            />
        </FlexBox>
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
                    Are you sure want to remove <b>{activeModal.name}</b> job?
            </Modal>
            <SideBarContext.Provider value={{toggle, setToggle}}>
                <SideBar />
                <Section left="260px">
                    <AdminNavBar />                        
                    <Container>
                        <FlexBox margin="30px 0">
                            <InlineList 
                                items={breadcrumbs}
                                breadcrumbs={true}
                                fontSize="22px"
                            />
                        </FlexBox>
                        <Table 
                            header={tabelHeader}
                            columns={cols}
                            dataSource={data}
                            footer={tableFooter}
                        />
                    </Container>
                </Section>
            </SideBarContext.Provider>
        </>
    )
}

export default AdminTemplate;