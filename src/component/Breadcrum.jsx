import React from 'react'

export default function Breadcrum({title,description}) {
  return (
    <>
    
    {/* <!-- Page Title --> */}
    <div className="page-title">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="heading-title">{title}</h1>
              <p className="mb-0">
               {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li className="current">About</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    </>
  )
}
