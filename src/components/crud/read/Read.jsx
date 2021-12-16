import React, { Fragment, useEffect, useState } from 'react'
import { Table, Row, Col } from 'antd';
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout'
import axios from 'axios';
// const { Column, ColumnGroup } = Table;



  
function Read() {

  // const [data, setdata] = useState([])
  // const [loading, setloading] = useState(true)
  

  // useEffect(() => {
  //       getData() }
  // , [])

  // const getData = async () =>{
  //     const res = await axios.get('https://61bad66ee943920017784a53.mockapi.io/crud')
  //     setloading(false)
  //     setdata(  res.data.map(row =>({name:row.name,email:row.email})) );
              
  // }

  const columns =[
    {
        title:'Name',
        dataIndex:'name',
        key:'name'
  
    } ,
   
    {
        title:'email',
        dataIndex:'email',
        key:'name'
    }
  
  ]
  const [data, setApiData] =  useState([])
  // const [loading, setloading] = useState(true)
  // useEffect(() => {
  //        getData() }
  //   , [])

// const getData = async () => {
    // const res = await 
    useEffect(() => {
       axios.get('https://61bad66ee943920017784a53.mockapi.io/crud')
          // setloading(false)
         .then((getData) => {
         console.log(getData.data);
         setApiData(getData.data);
        // setApiData(  res.data.map(row =>({name:row.name,email:row.email})) );
         
      })
  })

  // const users = [
  //   {
     
  //     name: {getData.name},
  //     email: 'Brown',
     
  //   },
    
  // ];



  

    return (
        <Fragment>
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
        </Fragment>    
    )
}

export default Read
