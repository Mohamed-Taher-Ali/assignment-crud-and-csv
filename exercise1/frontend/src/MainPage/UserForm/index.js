import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from 'reactstrap';
import { getUserInit } from '../../config/helpers';
import React, { memo } from 'react';
import './UserForm.scss';


const initUser = getUserInit();

function UserForm({
  onCreateUser =() => {},
  onUpdateUser =() => {},
  onSetUser,
  user,
}) {
  const reset = () => onSetUser(initUser);

  const onChange = ({ target: { name, value } }) => {
    onSetUser({ ...user, [name]: value });
  }

  const createUser = () => {
      const u = onCreateUser(user);
      if(u) reset();
    }

  const updateUser = async () => {
    const u = onUpdateUser(user);
    if(u) reset();
  }

  return (
    <Card>
      <CardHeader className='card-header'>{user._id ? 'Update User' : 'Create User'}</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" onChange={onChange} value={user.name} placeholder="Name ..." />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Age {user.age || 0}</Label>
                <Input
                  onChange={onChange}
                  value={user.age}
                  list="tick-list"
                  type="range"
                  name="age"
                  max="150"
                  min="15"
                  step="1"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" onChange={onChange} value={user.email} placeholder="Email ..." />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="text" name="phone" id="phone" onChange={onChange} value={user.phone} placeholder="Phone ..." />
              </FormGroup>
            </Col>
          </Row>
          <Button
            color='primary'
            onClick={user._id ? updateUser : createUser}
          >
            {user._id ? 'Update' : 'Create'}
          </Button>
          <Button className='cancel-btn' onClick={reset}>Cancel</Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default memo(UserForm);
