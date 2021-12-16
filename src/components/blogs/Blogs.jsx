import React , {useState , useEffect } from 'react'
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout'
// import Sider from 'antd/lib/layout/Sider'
import { Table, Row, Col } from 'antd';
import axios from 'axios'



const columns =[
    {
        title:'First Name',
        dataIndex:'name',
        key:'name'

    } ,
    {
        title:'Username',
        dataIndex:'username',
        key:'name'

    },
    {
        title:'email',
        dataIndex:'email',
        key:'name'
    }

]



const ListUser = () =>{
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    

    useEffect(() => {
          getData() }
    , [])

    const getData = async () =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setloading(false)
        setdata(  res.data.map(row =>({name:row.name,email:row.email,username:row.username})) );
                
    }

    return (
        <Layout>
            <Header>Header 1</Header>
            
                <Content  style={{padding:50}}>
                    <Row>
                        <Col span={3}/>
                        <Col span={18}>
                            <Table dataSource={data} columns={columns} />
                        </Col>
                        <Col span={3}/>
                    </Row>


                </Content>
            
           <Footer>Footer</Footer> 
        </Layout>
    )
}

export default ListUser