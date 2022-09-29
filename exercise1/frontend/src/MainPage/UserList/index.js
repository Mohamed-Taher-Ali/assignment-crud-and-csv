import UsersTable from '../../components/UsersTable';
import { Card, CardBody } from 'reactstrap';
import React, { memo } from 'react';
import './UserList.scss';


function UserList({
  users,
  onRowDeleted=() => {},
  onRowUpdated=() => {},
}) {
  return (
    <Card className='my-card'>
      <CardBody>
        {
          !users.length
            ? <h3 className='no-users'>No Users</h3>
            : (
              <UsersTable
                data={users}
                onRowDeleted={onRowDeleted}
                onRowUpdated={onRowUpdated}
              />
            )
        }
      </CardBody>
    </Card>
  );
}

export default memo(UserList);
