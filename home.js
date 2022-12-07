import React,{useState} from 'react';

const Home = () => {
    
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
    })
    
   const {firstname,lastname,email} = {...data}
   const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value});
   }

   const submitHandler = e =>{
     e.preventDefault();
     console.log(data)
   }


    return (
        <div className='textAlign-center'>
            <h2 style={{"textAlign":"center"}}>Register Form </h2> <br/>
            <form className="from-horizantal" autoComplete="off">
                <div className="form-group">
                    <label className="control-lable col-sm-2">Frist Name:</label>
                    <div className="col-sm-4">
                        <input type="text"
                         className="form-control" 
                         placeholder="Frist Name" name="firstname" value={firstname}
                         onChange={changeHandler}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-lable col-sm-2">Last Name:</label>
                    <div className="col-sm-4">
                        <input type="text"
                         className="form-control" 
                         placeholder="Last Name" name="last name" value={lastname}
                         onChange={changeHandler}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-lable col-sm-2">Email:</label>
                    <div className="col-sm-4">
                        <input type="email"
                         className="form-control" 
                         placeholder="Enter Email" name="email" value={email}
                         onChange={changeHandler}/>
                    </div>
                </div>

                <div className="form-group">
                    
                    <div className="col-sm-offset-2 col-sm-10">
                        <input type="submit" className="btn btn-sucess" 
                         value="Submit" />
                    </div>
                </div>




                
                

            </form>
        </div>
    )
}

export default Home;