import React, { Fragment, useState  } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' 
import './auth.css';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Register() {
   
	const [username, setUsername] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [passType1, setPassType1] = useState(true);
	const [passType2, setPassType2] = useState(true);

	var auth = JSON.parse(localStorage.getItem('auth'));
	
	const handleSignup=(props)=>{

		if(auth===null){
			auth=[{'username':'aaa','password':'aaa'},];
		}
			
		if(password1===password2){
			
			const same = auth.filter(d=>d.username===username);

			if(same.length===0){
				auth = [...auth,{'username':username,'password':password1}];
				localStorage.setItem('auth',JSON.stringify(auth));
				localStorage.setItem('userlogined',username);
				setUsername('');
				setPassword1('');
				setPassword2('');
				props.afterSignup(username);
			}else{
				alert(username+' exist!')
			}
		}else{
			alert('Passwords are not matching')
		}
	}
    return (
        <div className='bg-image'>
            <Fragment>
            <div className='custom-form'>
            <Row>
           
                <Col >
                <div class="login-box">
                    
                <div lg={12} className="login">
                    <h3 className="title">ADMIN PANEL</h3>
                </div>
               <div className='login-form'>
                  <Form name="basic" nz-col nzSpan="12"  >
               

                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
                    <Input className='username' nz-col nzSpan="8" value={username}
			onChange={e=>setUsername(e.target.value)}/>
                </Form.Item>

                <Form.Item label="Password" name="password1" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  type={passType1?'password':'text'}
			value={password1}
			onChange={e=>setPassword1(e.target.value)}/>
            <Button onClick={()=>{setPassType1(!passType1)}}>
			{passType1?'show':'hide'}</Button>
                </Form.Item>
                <Form.Item label="Password" name="password2" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  type={passType2?'password':'text'} 
			value={password2}
			onChange={e=>setPassword2(e.target.value)} />
             <Button onClick={()=>{setPassType2(!passType2)}}>
			{passType2?'show':'hide'}</Button>
                </Form.Item>
s
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               
                    <Button onClick={handleSignup}>Submit   </Button>                    
                </Form.Item>
                <div className="text-p">
                    <p>Already have an account? <a className="text-primary" href="/">Login</a></p>
                    
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

export default Register
