import React, { memo } from 'react';
import { Table } from 'reactstrap';
import { FaTrash, FaPen } from 'react-icons/fa';
import { capitalizeFirstLetter, scrollTopDomElemById } from '../../config/helpers';
import './UsersTable.scss';

const UsersTable = ({
  onRowUpdated = () => { },
  onRowDeleted = () => { },
  data = [],
}) => {

  const shownFields = ['name', 'age', 'email', 'phone'];
  const upperCaseShownFields = shownFields.map(f => capitalizeFirstLetter(f));

  return (
    <Table striped>
      <thead>
        <tr>
          {
            ['#', ...upperCaseShownFields, 'Actions'].map(t =>
              (<th key={t}>{t}</th>)
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((r, i) => (
            <tr key={i}>
              <td key={i}>{i + 1}</td>
              {
                shownFields.map((f, i2) => (
                  <td key={i2}>{r[f]}</td>
                ))
              }
              <td>
                <IconBtn
                  Component={FaPen}
                  contProps={{
                    className: 'pen-icon',
                    onClick: () => {
                      scrollTopDomElemById('my-body-wrapper');
                      onRowUpdated(r);
                    },
                  }}
                />
                <IconBtn
                  Component={FaTrash}
                  contProps={{
                    className: 'trash-icon',
                    onClick: () => onRowDeleted(r)
                  }}
                />
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

const IconBtn = ({ Component, contProps, ...props }) => (
  <span {...contProps}>
    <Component {...props} />
  </span>
)

export default memo(UsersTable);