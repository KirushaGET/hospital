import React, { useState, useEffect} from 'react';
import { TextField, MenuItem, Button } from '@material-ui/core';
import deleteImg from './delete.svg';
import editImg from './edit.svg';
import Plus from './plus.svg';
import Delete from './delete.js';
import Edit from './editModal.js';
import './Bottom.css';

function Create({table, get}) {
  const [deleteFlag, setDeleteFlag] = useState(0);
  const [editFlag, setEditFlag] = useState(0);
  const [indexDelete, setIndexDelete] = useState(0);
  const [indexEdit, setIndexEdit] = useState(0);
  const [idDelete, setIdDelete] = useState(0);
  const [sortBy, setSortBy] = useState(0);
  const [agree, setAgree] = useState(0);
  const [sort, setSort] = useState('');
  const [sortEnglish, setSortEnglish] = useState('');
  const [sortByUp, setSortByUp] = useState('');
  const rangeSort = [
    'Имя',
    'Врач', 
    'Дата', 
    'None'
  ];
  const rangeSortBy = ['Возрастанию', 'Убыванию'];
  const rangeAgree = ['Да'];

  const del = async(index) => {
    setDeleteFlag(1);
    setIndexDelete(index);
    setIdDelete(table[index]._id);
  }

  function edit(index) {
    setEditFlag(1);
    setIndexEdit(index);
  }

  function sortFunc (e) {
    if(e.target.value === 'Имя') setSortEnglish('name');
    else if(e.target.value === 'Врач') setSortEnglish('doctor');
    else if(e.target.value === 'Дата') setSortEnglish('date');
    else setSortEnglish('_id');
    setSort(e.target.value);
    if(sort !== '') {
      if(sortByUp === 'Возрастанию') {
        table.sort((a, b) => {
          if (a[sortEnglish] < b[sortEnglish]) {
            return -1;
          }
          if (a[sortEnglish] > b[sortEnglish]) {
            return 1;
          }
          return 0;
        });
      } else {
        table.sort((a, b) => {
          if (a[sortEnglish] > b[sortEnglish]) {
            return -1;
          }
          if (a[sortEnglish] < b[sortEnglish]) {
            return 1;
          }
          return 0;
        });
      }
    }
  }

  return (
    <>
      <div className='sort'>
        <span>Сортировать по:</span>
        <TextField
          id="doctorInput"
          select
          value={sort}
          onChange={(e) => (sortFunc(e), setSortBy(1))}
          variant="outlined"
        >
          {rangeSort.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        {sortBy 
        ? <><span>Направление</span>
          <TextField
            id="doctorInput"
            select
            value={sort}
            onChange={(e) => (sortFunc(e), setSortByUp(e.target.value), setAgree(1))}
            variant="outlined"
          >
            {rangeSortBy.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField></>
        : null
        }
        {agree
        ? <><span>Готово?</span>
          <TextField
            id="doctorInput"
            select
            value={sort}
            onChange={(e) => (sortFunc(e), setSortBy(0), setSortByUp(e.target.value), setAgree(0))}
            variant="outlined"
          >
            {rangeAgree.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField></>
        : null
        }
        <div className='str-filter'>
          <p>Добавить фильтр по дате:</p>
          <img 
            src={Plus} 
            alt={"plus"} 
          />
        </div>
        <div className='str-filter'>
          <p>С:</p>
          <p>По:</p>
          <button className='buttonAdd'>Добавить</button>
          <img 
            src={deleteImg} 
            alt={"plus"} 
          />
        </div>
      </div>

      <table className='all-tabl' cellSpacing="0">
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
          table.map((value, index) => <tr key={`string-${index}`}>
              <td className='bottom-p-left1'>{value.name}</td>
              <td className='bottom-p1'>{value.doctor}</td>
              <td className='bottom-p1'>{value.date}</td>
              <td className='bottom-p1'>{value.complaints}</td>
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
    </>
  )
}

export default Create;
