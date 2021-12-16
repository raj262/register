import React, { useState } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Form, Input, Button } from 'antd';
import '../auth/auth.css';
import axios from 'axios';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    console.log(name);
    console.log(email);


    const sendDataToAPI = () => {
        axios.post('https://61bad66ee943920017784a53.mockapi.io/crud',{
            name,
            email
        })
    }

    return (
        <div className='custom-form'>
             <Form 
                >
                <Form.Item
                    label="Name"
                    name="name" className='input-color'
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input name='name' onChange={(e) => setName(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email" className='input-color'
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name='email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Item>

              
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="submit" onClick={sendDataToAPI}> Submit </Button>
                </Form.Item>
                </Form>
        </div>
        
    )
}

export default Create
