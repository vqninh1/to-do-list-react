import { Button, Form, Input, InputNumber, Select } from 'antd';
import './profile.css'
import Paragraph from 'antd/es/skeleton/Paragraph';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Option } from 'antd/es/mentions';
import styled from 'styled-components'
import { useRef, useState } from 'react';



const ProfileComponent = () => {
    const [profileArr, setProfileArr] = useState([])

    const [showForm, setShowFrom] = useState(false)

    const formRef = useRef(null);

    const showFormCV = () => {
      setShowFrom(!showForm)
    }

    const onFinishForm = (data) => {
      setProfileArr([...profileArr, data])
      setShowFrom(false)

      if (formRef.current) {
        formRef.current.setFieldsValue({
          username: '',
          major: '',
          birth: '',
          email: '',
          address: '',
          phone: '',
          facebook: '',
          gender: undefined,
          description: '',
        })
      }
    }
    const renderForm = () => {
      if (!showForm) return null
      return (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ 
            width: "500px",
            border: "1px solid black",
            position: "absolute",
            top: "4%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff",
            zIndex: '2'
          }}
          autoComplete="off"
          onFinish={onFinishForm}
        >
          <Form.Item
            size="large"
            style={{width: "80%", marginTop: "20px"}}
          >
            <Input style={{width: "50%", marginLeft:"60%"}} value={"Cập nhật CV"}/>
          </Form.Item>
          <Form.Item
            label="Họ tên"
            name="username"
            size="large"
          style={{width: "80%", marginBottom: '14px'}} 
            rules={[{ required: true, message: 'Bạn chưa điền tên!' }]}
          >
            <Input placeholder='Hãy nhập vào tên'/>
          </Form.Item>

          <Form.Item
            label="Bộ phận"
            name="major"
            size="large"
            style={{width: "80%", marginBottom: '14px'}}  
            rules={[{ required: true, message: 'Bạn chưa điền tên bộ phận!' }]}
          >
            <Input placeholder='Hãy nhập vào bộ phận'/>
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="birth"
            size="large"
            style={{width: "80%", marginBottom: '14px'}}  
            rules={[{ required: true, message: 'Bạn chưa nhập ngày sinh' }]}
          >
            <Input placeholder='Hãy nhập vào ngày sinh'/>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            size="large"
            style={{width: "80%", marginBottom: '14px'}}  
            rules={[{ required: true, message: 'Bạn chưa nhập email!' }]}
          >
            <Input type='email' placeholder='Hãy nhập vào email'/>
          </Form.Item>

          <Form.Item
            label="Địa chỉ"
            name="address"
            size="large"
            style={{width: "80%", marginBottom: '14px'}}  
            rules={[{ required: true, message: 'Bạn chưa nhập địa chỉ!' }]}
          >
            <Input placeholder='Hãy nhập vào địa chỉ'/>
          </Form.Item>

          <Form.Item
            label="Sđt"
            name="phone"
            size="large"
            style={{width: "80%", marginBottom: '14px'}}  
            rules={[{ required: true, message: 'Bạn chưa nhập số điện thoại!' }]}
          >
            <Input placeholder='Hãy nhập vào số điện thoại'/>
          </Form.Item>

          <Form.Item
            label="Facebook"
            name="facebook"
            size="large"
            style={{width: "80%", marginBottom: '14px'}}  
            rules={[{ required: true, message: 'Bạn chưa nhập địa chỉ Facebook!' }]}
          >
            <Input placeholder='Hãy nhập vào đại chỉ Facebook'/>
          </Form.Item>

          <Form.Item
            label="Giới tính"
            name="gender"
              style={{width: "80%", marginBottom: '14px'}}              
            rules={[{ required: true, message: 'Bạn chưa chọn giới tính!' }]}
          >
            <Select placeholder="Chọn giới tính của bạn">
              <Option value="male">Nam</Option>
              <Option value="female">Nữ</Option>
              <Option value="other">Khác</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="description"
            size="large"
            style={{width: "80%", marginBottom: '14px'}}  
            rules={[{ required: true, message: 'Bạn chưa nhập mô tả về bản thân!' }]}
          >
            <Input.TextArea placeholder="Hãy viết mô tả về bản thân"/>
          </Form.Item>
          
          <Form.Item 
            wrapperCol={{ offset: 8, span: 16 }}
            style={{width: "75%"}}
          >
            <Button onClick={removeFrom} style={{width: "100px", marginRight: "8px"}}>
              CALCEL
            </Button>
            <Button type="primary" htmlType="submit" style={{width: "100px"}}>
              OK
            </Button>
          </Form.Item>
        </Form>
      )
    }

    const removeFrom = () => {
      setShowFrom(false);
      if (formRef.current) {
        formRef.current.resetFields();
      }
    }
    return (
        <div style={{position: "relative"}}>
        <section action="">
        <Button 
          type="primary"  
          size="middle" 
          onClick={showFormCV}
          style={{    
            display: 'block',
            float: 'right',
            marginTop: '2%',
            marginRight: '2%',
            }}
          >Cập nhật</Button>
          <div className='form-group'>
            {profileArr.map((item, index) => (
              <div key={index}>
                <h1>{item.username}</h1>
                <p className='major'>{item.major}</p>
                <div className='list'>
                  <span className='item'><i className="icon fa-regular fa-calendar"></i>{item.birth}</span>
                  <span className='item'><i className="icon fa-solid fa-phone"></i>{item.phone}</span>
                </div>
                <div className='list'>
                  <span className='item'><i className="icon fa-solid fa-envelope"></i>{item.email}</span>
                  <span className='item'><i className="icon fa-solid fa-earth-americas"></i>{item.facebook}</span>
                </div>
                <div className='list'>
                  <span className='item'><i className="icon fa-solid fa-location-arrow"></i>{item.address}</span>
                  <span className='item'><i className="icon fa-solid fa-user"></i>{item.gender}</span>
                </div>
                <p className='description'>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        {renderForm()}
        </div>
          
      );
}

export default ProfileComponent