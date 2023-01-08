import { Table } from 'antd';

const founders = [
  {
    key: 1,
    name: 'Beniamin Mincu',
    role: 'CEO & Founder',
  },
  {
    key: 2,
    name: 'Lucian Mincu',
    role: 'CTO & Founder',
  },
  {
    key: 3,
    name: 'Adrian Dobrita',
    role: 'CMO & Co-Founder',
  },
];

const developers = [
  {
    key: 1,
    name: 'Alexandru Ariciu',
    role: 'Lead Smart Contracts Developer',
  },
  {
    key: 2,
    name: 'Dan Voicu',
    role: 'Lead P2P Developer',
  },
  {
    key: 3,
    name: 'Vlad Nistor',
    role: 'Lead Blockchain Developer',
  },
  {
    key: 4,
    name: 'Andrea Echim',
    role: 'Smart Contracts Developer',
  },
  {
    key: 5,
    name: 'Ion Marmaroiu',
    role: 'Blockchain Developer',
  },
];

const ElrondTeamTable = () => {
  return (
    <>
      <h2>Founders</h2>
      <Table dataSource={founders}>
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Role" dataIndex="role" key="role" />
      </Table>
      <h2>Developers</h2>
      <Table dataSource={developers}>
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Role" dataIndex="role" key="role" />
      </Table>
    </>
  );
};

export default ElrondTeamTable;
