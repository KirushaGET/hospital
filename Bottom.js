import React, { useState, useEffect} from 'react';
import deleteImg from './delete.svg'
import editImg from './edit.svg'
import Delete from './delete.js'
import Edit from './editModal.js'
import './Bottom.css';

function Create({table}) {
  const [deleteFlag, setDeleteFlag] = useState(0)
  const [editFlag, setEditFlag] = useState(0)
  const [indexDelete, setIndexDelete] = useState(0)
  const [indexEdit, setIndexEdit] = useState(0)
  const [idDelete, setIdDelete] = useState(0)

  const del = async(index) => {
    setDeleteFlag(1);
    setIndexDelete(index);
    setIdDelete(table[index]._id)
  }

  function edit(index) {
    setEditFlag(1);
    setIndexEdit(index)
  }

  return (
  <table className='all-tabl' >
    <tr className='table-string' >
      <th className='bottom-p'>Имя</th>
      <th className='bottom-p'>Врач</th>
      <th className='bottom-p'>Дата</th>
      <th className='bottom-p'>Жалобы</th>
    </tr>
    <tr className='table-tabl' bordercolor='black' >
    {
      table.map((value, index) => 
        <tr className='new-string' >
          <td className='bottom-p-left'>{value.name}</td>
          <td className='bottom-p1'>{value.doctor}</td>
          <td className='bottom-p1'>{value.date}</td>
          <td className='bottom-p1'>{value.complaints}</td>
          <div className='bottom-p-end1'>
            <td>
              <img 
                src={editImg} 
                alt={"editImg"} 
                onClick={() => edit(index)}
              />
            </td>
            <td>
              <img 
                src={deleteImg}
                alt={"deleteImg"} 
                onClick={() => del(index)}
              />
            </td>
          </div>
          {deleteFlag 
          ? <Delete 
              setDeleteFlag={setDeleteFlag} 
              deleteFlag={deleteFlag} 
              index={indexDelete} 
              id={idDelete}
          /> 
          : <div />
          }
          {editFlag 
          ? <Edit 
              setEditFlag={setEditFlag} 
              editFlag={editFlag} 
              table={table} 
              index={indexEdit}
            /> 
          : <div />
          }
        </tr>
      )
    }
    </tr>
  </table>  
  )
}

export default Create;
