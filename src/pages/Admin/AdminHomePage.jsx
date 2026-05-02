import React from 'react'
import AdminSidebar from '../../component/Admin/AdminSidebar'

export default function AdminHomePage() {
  return (
    <div>
      <div className="container my-3 admin">
<div className='row'>
    <div className="col-md-3">
        <AdminSidebar/>
    </div>
    <div className="col-md-9">
<h5 className='bg-primary  text-light p-2 text-center'> Your Profile</h5>

<table  className='table table-bordered'>
    <tbody>

      <tr>
            <th>Name</th>
            <td>vishal dutt sharma</td>
        </tr>

<tr>
            <th>Username</th>
            <td>vishal</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>vishalduttsharma5@gmail.com</td>
        </tr>
        <tr>
            <th>Phone</th>
            <td>7409525282</td>
        </tr>
        <tr>
            <th>Role</th>
            <td>Supar admin</td>
        </tr>
    </tbody>
</table>
    </div>
</div>
      </div>
    </div>
  )
}
