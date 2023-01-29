import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBar from '../../Organisms/Sidebar/sidebar';
import Section from '../../Atoms/Section';
import Table from '../../Molecules/Table';
import { NavbarProps } from '../nabvarType';
import Container from '../../Atoms/Container';
import { ColumnsT } from '../../Molecules/Table/type';

import Badge from '../../Atoms/Badge';
import Modal from '../../Molecules/Modal';
import Drodown from '../../Molecules/Drodown';
import AdminNavBar from '../../Organisms/AdminNavBar';
import SideBarContext from '../../../context';
import Pagination from '../../Molecules/Pagination';
import FlexBox from '../../Atoms/Flexbox/flexbox';
import InlineList from '../../Molecules/InlineList';
import Input from '../../Atoms/Input';

type DataT = {
  key: string;
  title: string;
  skills: string[];
  experiences: string;
  salary: number;
  date: string;
  status: string;
  actions: object[];
};

const cols: ColumnsT[] = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (_, { title }) => title,
  },
  {
    title: 'Skills',
    dataIndex: 'skills',
    key: 'skills',
    render: (_, { skills }) =>
      (skills as string[]).map((item) => (
        <Badge key={item} bg="dark">
          {item}
        </Badge>
      )),
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
    render: (_, { actions }) => <Drodown menu={actions} name="Actions" />,
  },
];

type ActiveModalT = {
  name: string;
  onOk: () => void;
};

const AdminTemplate: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState(1);
  const [activeModal, setActiveModal] = useState<ActiveModalT>({
    name: '',
    onOk: () => null,
  });

  const openModal = (name: string, onOk: () => void) => {
    setActiveModal({ ...activeModal, name, onOk });
    setOpen(true);
  };

  const data: DataT[] = [
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
          icon: <FontAwesomeIcon icon={['far', 'circle-play']} />,
          onClick: () => {},
        },
        {
          name: 'Pause',
          icon: <FontAwesomeIcon icon={['far', 'circle-pause']} />,
          onClick: () => openModal(`Team Lead`, () => {}),
        },
        {
          name: 'Delete',
          icon: <FontAwesomeIcon icon={['far', 'trash-can']} />,
          onClick: () => openModal(`Team Lead`, () => {}),
        },
      ],
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
          icon: <FontAwesomeIcon icon={['far', 'circle-play']} />,
          onClick: () => {},
        },
        {
          name: 'Delete',
          icon: <FontAwesomeIcon icon={['far', 'trash-can']} />,
          onClick: () => openModal(`Delete job 02`, () => {}),
        },
      ],
    },
    {
      key: '1',
      title: 'Backend Developer',
      skills: ['PHP', 'C++'],
      experiences: '02 years',
      salary: 15000,
      date: 'October 05, 2019',
      status: 'Active',
      actions: [],
    },
    {
      key: '1',
      title: 'Backend Developer',
      skills: ['PHP', 'C++'],
      experiences: '02 years',
      salary: 15000,
      date: 'October 05, 2019',
      status: 'Active',
      actions: [],
    },
    {
      key: '1',
      title: 'Backend Developer',
      skills: ['PHP', 'C++'],
      experiences: '02 years',
      salary: 15000,
      date: 'October 05, 2019',
      status: 'Active',
      actions: [],
    },
    {
      key: '1',
      title: 'Backend Developer',
      skills: ['PHP', 'C++'],
      experiences: '02 years',
      salary: 15000,
      date: 'October 05, 2019',
      status: 'Active',
      actions: [],
    },
    {
      key: '1',
      title: 'Backend Developer',
      skills: ['PHP', 'C++'],
      experiences: '02 years',
      salary: 15000,
      date: 'October 05, 2019',
      status: 'Active',
      actions: [],
    },
    {
      key: '1',
      title: 'Backend Developer',
      skills: ['PHP', 'C++'],
      experiences: '02 years',
      salary: 15000,
      date: 'October 05, 2019',
      status: 'Active',
      actions: [],
    },
    {
      key: '1',
      title: 'Backend Developer',
      skills: ['PHP', 'C++'],
      experiences: '02 years',
      salary: 15000,
      date: 'October 05, 2019',
      status: 'Active',
      actions: [],
    },
    {
      key: '1',
      title: 'Backend Developer',
      skills: ['PHP', 'C++'],
      experiences: '02 years',
      salary: 15000,
      date: 'October 05, 2019',
      status: 'Active',
      actions: [],
    },
  ];

  const handleChange = (page: number): void => {
    setCurrent(page);
  };

  const breadcrumbs = [
    { value: 'Admin', href: '#' },
    { value: 'Jobs', href: '#' },
  ];

  const tabelHeader = <Input placeholder="Search..." onChange={() => {}} width="25%" />;

  const tableFooter = (
    <FlexBox justify="center">
      <Pagination total={15} pageSize={5} current={current} onChange={handleChange} />
    </FlexBox>
  );

  const sideBartoggle = useMemo(() => ({ toggle, setToggle }), [toggle]);

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
      <SideBarContext.Provider value={sideBartoggle}>
        <SideBar />
        <Section left="260px">
          <AdminNavBar />
          <Container>
            <FlexBox margin="30px 0">
              <InlineList items={breadcrumbs} breadcrumbs fontSize="22px" />
            </FlexBox>
            <Table header={tabelHeader} columns={cols} dataSource={data} footer={tableFooter} />
          </Container>
        </Section>
      </SideBarContext.Provider>
    </>
  );
};

export default AdminTemplate;
