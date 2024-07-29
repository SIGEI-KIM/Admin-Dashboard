import React from 'react'
import './pageTitle.css'

function PageTitle({ page }) {
  return (
    <div className='pagetitle'>
        <h1>{page}</h1>
        <nav>
            <ol className='breadcrump'>
                <li className='breadcrump-item'>
                    <a href='/'>
                        <i className='bi bi-house-door'></i>
                    </a>
                </li>
                <li lassName='breadcrump-item active'>{page}</li>
            </ol>
        </nav>
    </div>
  )
}

export default PageTitle