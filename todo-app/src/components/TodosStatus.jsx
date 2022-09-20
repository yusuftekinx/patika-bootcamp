

import '../assets/css/TodosStatus.css'
import Proptypes from 'prop-types'
import { useEffect, useState } from 'react'

function TodosStatus({left,allList,activeList,completedList}) {

    const [listtype,setListType] = useState(0);
    // 0: All Todos
    // 1: Active Todos
    // 2: Completed Todos
    
    

    useEffect(() => {
      if(listtype === 0) {
        allList();
      }
      else if(listtype === 1) {
        activeList();
      }
      else if(listtype === 2) {
        completedList();
      }
    }, [listtype])
    
    
    const setListTypeHandle = (e) => {
        console.log(e.target.name)
        const type = e.target.name;

        if(type === "all") {
            setListType(0)
        }
        else if(type === "active") {
            setListType(1)
        }
        else if(type === "completed") {
            setListType(2)
        }
    }

  return (
    <div className="todos-status-component">
        <div className='left-count'>
            {left} kaldı
        </div>
        <div className='todos-list-handle'>
            <button name="all" className='handle-button' onClick={setListTypeHandle}>Tümü</button>
            <button name="active" className='handle-button' onClick={setListTypeHandle}>Aktifler</button>
            <button name="completed" className='handle-button' onClick={setListTypeHandle}>Tamamlananlar</button>
        </div>
    </div>
  )
}


TodosStatus.propTypes = {
    left: Proptypes.number.isRequired,
    allList: Proptypes.func.isRequired,
    activeList: Proptypes.func.isRequired,
    completedList: Proptypes.func.isRequired
}


export default TodosStatus