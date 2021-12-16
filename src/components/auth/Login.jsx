import React, { Fragment, useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' 
import './auth.css';


function SignIn(props) {

    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passType, setPassType] = useState(true);

	var auth = JSON.parse(localStorage.getItem('auth'));
	
	const handleSignIn=()=>{

		if(auth===null){
			alert('no user found!');
		}
			
			
		const same = auth.filter(d=>d.username===username);

		if(same.length!==0){

			if (same[0].password===password){

				localStorage.setItem('userlogined',username);
				setUsername('');
				setPassword('');
				props.afterSignIn(username);
			}
			else{
				alert('wrong password.');
			}
		}else{
			alert(username+'user not exist!')
		}
	}
    return (
        <div className='bg-image'>
            <Fragment>
            <div className='custom-form'>
            <Row>
           
                <Col >
                <div className="login-box">
                    
                <div  className="login">
                    <h3 className="title">ADMIN PANEL</h3>
                </div>
                <div className='login-form'>
                <Form name="basic" >
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
                    <Input className='username'  value={username}
			onChange={e=>setUsername(e.target.value)}
			placeholder='Username'/>
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  type={passType?'password':'text'}
			value={password}
			onChange={e=>setPassword(e.target.value)} />
            <button onClick={()=>{setPassType(!passType)}}>
			{passType?'show':'hide'}</button>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={handleSignIn}>login   </Button>                    
                </Form.Item>
                <div className="text-p">
                   <p>New User? <a className="text-primary" href="/register">Create Account</a></p>
                </div>
                </Form>
                </div>
                </div>
                </Col>
               
            </Row>
            </div>
        </Fragment>
        </div>
    )
}

export default SignIn
