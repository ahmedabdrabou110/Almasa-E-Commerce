import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SubTitle = ({title , btnTitle}) => {
  return (
    <div className='bg-black d-flex justify-content-between items-center align-items-center text-white w-96 p-2 mt-2'>
        <div className="font-bold margin-4" style={{fontSize:"24px"}}>
            {title}
        </div>
        <div className="">
        {btnTitle && <Button color={"primary"} className='p-2'>
            عرض الكل
        </Button>}
        </div>
    </div>
  )
}

export default SubTitle