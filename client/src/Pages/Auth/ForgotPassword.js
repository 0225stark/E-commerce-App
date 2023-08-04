import React,{useState} from 'react';
import Layout from "./../../components/Layout/Layout.js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyle.css";

const ForgotPassword = () => {
    const[email,setEmail]=useState("");
    const[newPassword,setNewPassword]=useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,newPassword,answer});
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                
                navigate("/login");
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
    <Layout title="Forgot Password">
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h3 className='title' style={{textTransform: "uppercase"}}>Reset Password</h3>
                <div className="mb-3">
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
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">New Password</label>
                    <input 
                        type="password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword" 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAnswer" className="form-label">What is your favourite city?</label>
                    <input 
                        type="text" 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)}
                        className="form-control" 
                        id="exampleInputAnswer" 
                        required
                    />
                </div>
                <div className='mb-3'>
                    <button type="submit" className="btn btn-primary">Reset</button>
                </div>
            </form>
        </div>    
    </Layout>
  )
}

export default ForgotPassword