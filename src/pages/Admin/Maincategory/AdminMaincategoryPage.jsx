import React from 'react'
import AdminSidebar from '../../../component/Admin/AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminMaincategoryPage() {
  return (
     <div>
       <div className="container my-3 admin">
 <div className='row'>
     <div className="col-md-3">
       <AdminSidebar/>
     </div>
     <div className="col-md-9">
 <h5 className='bg-primary  text-light p-2 text-center'>Maincategory Page<Link to='/admin/maincategory/create'><i className='bi bi-plus text-light float-end'></i></Link></h5>
     </div>
 </div>
       </div>
     </div>
   )
}
