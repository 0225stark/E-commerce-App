import React,{useState} from 'react';
import Layout from "./../../components/Layout/Layout.js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyle.css";

const Register = () => {

    //hooks: -
    const[name,setName] = useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const[address,setAddress]=useState("");
    const[answer,setAnswer]=useState("");
    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
                name,
                email,
                password,
                phone,
                address,
                answer
            });
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                navigate('/login');
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

  return (
    <Layout title={"Registeration"}>
        <div className='form-container' style={{ minHeight: "90vh" }}>
            <form onSubmit={handleSubmit}>
                <h3 className='title' style={{textTransform: 'uppercase'}} >Register Page</h3>
                <div className="mb-1">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="form-control" 
                        id="exampleInputName" 
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail" 
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword" 
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control" 
                        id="exampleInputPhone" 
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control" 
                        id="exampleInputAddress" 
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputAnswer" className="form-label">What is your favourite city? (Security question)</label>
                    <input 
                        type="text" 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)}
                        className="form-control" 
                        id="exampleInputAnswer" 
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register