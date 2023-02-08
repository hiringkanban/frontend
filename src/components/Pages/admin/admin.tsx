import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../Atoms/Input';
import AdminTemplate from '../../Templates/Admin';
import Table from '../../Molecules/Table';
import { ColumnsT } from '../../Molecules/Table/type';
import Badge from '../../Atoms/Badge';
import Modal from '../../Molecules/Modal';
import Drodown from '../../Molecules/Drodown';
import Pagination from '../../Molecules/Pagination';
import FlexBox from '../../Atoms/Flexbox/flexbox';

const breadcrumbs = [
  { value: 'Admin', href: '#' },
  { value: 'Jobs', href: '#' },
];

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

const Admin = () => {
  const [current, setCurrent] = useState(1);
  const [open, setOpen] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ActiveModalT>({
    name: '',
    onOk: () => null,
  });

  const openModal = (name: string, onOk: () => void) => {
    setActiveModal({ ...activeModal, name, onOk });
    setOpen(true);
  };
  const tabelHeader = <Input placeholder="Search..." onChange={() => {}} width="25%" />;

  const handleChange = (page: number): void => {
    setCurrent(page);
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

  const tableFooter = (
    <FlexBox justify="center">
      <Pagination total={15} pageSize={5} current={current} onChange={handleChange} />
    </FlexBox>
  );

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
      <AdminTemplate breadcrumbs={breadcrumbs}>
        <Table header={tabelHeader} columns={cols} dataSource={data} footer={tableFooter} />
      </AdminTemplate>
    </>
  );
};

export default Admin;
