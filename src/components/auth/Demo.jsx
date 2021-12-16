import React, { Fragment, useState  } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' 
import './auth.css';


function Demo() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const handle = () => {
       localStorage.setItem('Username', username);
       localStorage.setItem('Password', password);
    };
    // const remove = () => {
    //    localStorage.removeItem('Name');
    //    localStorage.removeItem('Password');
    // };
    return (
        <div className='bg-image'>
            <Fragment>
            <div className='custom-form'>
            <Row>
           
                <Col >
                <div className="login-box">
                    
                <div lg={12} className="login">
                    <h3 className="title">ADMIN PANEL</h3>
                </div>
               <div className='login-form'>
                  <Form name="basic"    >
               
​
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
                    <Input className='username'   value={username}
            onChange={(e) => setUsername(e.target.value)} />
                </Form.Item>
​
                <Form.Item label="Password" name="password1" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password  value={password}
            onChange={(e) => setPassword(e.target.value)} />
​
                </Form.Item>
             
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               
                    <Button onClick={handle}>Submit   </Button>                    
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

export default Demo
