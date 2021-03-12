import React, { useState} from 'react';
import deleteImg from './delete.svg'
import editImg from './edit.svg'
import Delete from './delete.js'
import Edit from './editModal.js'
import './Bottom.css';

function Create({table, get}) {
  const [deleteFlag, setDeleteFlag] = useState(0);
  const [editFlag, setEditFlag] = useState(0);
  const [indexDelete, setIndexDelete] = useState(0);
  const [indexEdit, setIndexEdit] = useState(0);
  const [idDelete, setIdDelete] = useState(0);

  const del = async(index) => {
    setDeleteFlag(1);
    setIndexDelete(index);
    setIdDelete(table[index]._id);
  }

  function edit(index) {
    setEditFlag(1);
    setIndexEdit(index);
  }

  return (
  <table className='all-tabl' cellspacing="0">
    <thead>
    <tr className='table-string' >
      <th className='bottom-p'>Имя</th>
      <th className='bottom-p'>Врач</th>
      <th className='bottom-p'>Дата</th>
      <th className='bottom-p'>Жалобы</th>
    </tr>
    </thead>
    <tbody className='table-bottom-string' bordercolor='black' >
    {
      table.map((value, index) => <tr>
          <td className='bottom-p-left1' key={`${table[index].name}-${index}-${table[index]._id}`}>{value.name}</td>
          <td className='bottom-p1' key={`${table[index].doctor}-${index}-${table[index]._id}`}>{value.doctor}</td>
          <td className='bottom-p1' key={`${table[index].date}-${index}-${table[index]._id}`}>{value.date}</td>
          <td className='bottom-p1' key={`${table[index].complaints}-${index}-${table[index]._id}`}>{value.complaints}</td>
          <td className='bottom-p-end1'>
              <img 
                src={editImg} 
                alt={"editImg"} 
                onClick={() => edit(index)}
              />
              <img 
                src={deleteImg}
                alt={"deleteImg"} 
                onClick={() => del(index)}
              />
          </td>
          {deleteFlag 
            ? <Delete 
              setDeleteFlag={setDeleteFlag} 
              deleteFlag={deleteFlag} 
              index={indexDelete} 
              id={idDelete}
              get={get}
            /> 
            : null
          }
          {editFlag 
            ? <Edit 
              setEditFlag={setEditFlag} 
              editFlag={editFlag} 
              table={table} 
              index={indexEdit}
              get={get}
              /> 
            : null
          }
          </tr>
      )
    }
    </tbody>
  </table>  
  )
}

export default Create;
