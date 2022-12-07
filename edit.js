import React from 'react';

const Edit = () => {
    return (
        <>

       
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='p-4 rounded shadow'>
                        <h4>Add New product </h4>

                        <div className='mb-3'>
                            <lable>Product Name</lable>
                            <input type="text" className='from-control'/>
                        </div>

                        <div className='mb-3'>
                            <lable>Product Price</lable>
                            <input type="text" className='from-control'/>
                        </div>

                        <div className='mb-3'>
                            <lable>Product Photo URL</lable>
                            <input type="text" className='from-control'/>
                        </div>

                        <div className='mb-3'>
                            <lable>Product Details</lable>
                            <textarea className='form-control'></textarea>
                        </div>

                        <div className='mt-3'>
                            <button className='btn btn-primary'> Save Product</button>
                        </div>
                    </div>
                </div>    
                    
                 <div className='col-lg-9'>
                            <h4 className='text-center'> Avilable Products</h4>
                            

                        <table id="emplist"> 
                            <thead>
                                <tr className='bg-light text-primary'>
                                   <th>Id</th>
                                    <th>Product</th>
                                    <th>Price </th>
                                    <th>Details</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                    
                        </table>
                   </div>
                </div>
            </div>
        
        
        </>
    )
}


export default Edit;