import React from 'react';
import fork from '../../assets/image/fork.png';
import clipboard from '../../assets/image/clipboard.png';
import add from '../../assets/image/add.png';
import {Link} from 'react-router-dom';

const SideBar =()=> {
  return (
    <div className='sidebar'>
      <Link to='/'><img src={fork} className='icon-sidebar-fork' alt='...'/></Link>
      <Link to='/history'><img src={clipboard} className='icon-sidebar' alt='...'/></Link>
      <img src={add} className='icon-sidebar' alt='...' type='button' data-toggle="modal" data-target="#modalAddProduct"/>
    </div>
  )
}

export default SideBar
