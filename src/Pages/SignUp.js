import React, { useState } from 'react';
import './SignUp.scss';
import {Card, Form, Input, Button, Checkbox, Breadcrumb, Tabs, Tooltip, Cascader, Select, Row, Col, AutoComplete} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim'

const { TabPane } = Tabs;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const provinces = [
    {
        value: 'Ontario',
        label: 'Ontario',
        
    },
    {
        value: 'Quebec',
        label: 'Quebec',
        
    },
    {
        value: 'Nova Scotia',
        label: 'Nova Scotia',
        
    },
    {
        value: 'New Brunswick',
        label: 'New Brunswick',
        
    },
    {
        value: 'British Columbia',
        label: 'British Columbia',
        
    },
    {
        value: 'Prince Edward Island',
        label: 'Prince Edward Island',
        
    },
    {
        value: 'Saskatchewan',
        label: 'Saskatchewan',
        
    },
    {
        value: 'Alberta',
        label: 'Alberta',
        
    },
    {
        value: 'Newfoundland and Labrador',
        label: 'Newfoundland and Labrador',
        
    },
];

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    },
};

const RegistrationForm = () => {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+1</Option>
            </Select>
        </Form.Item>
    );

const [autoCompleteResult, setAutoCompleteResult] = useState([]);

const onWebsiteChange = value => {
    if (!value) {
        setAutoCompleteResult([]);
    } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
};

const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
}));

function callback(key) {
    console.log(key);
}

return (
    <Tabs className ="Tab" defaultActiveKey="2" onChange={callback} type="card" tabBarGutter="10px">
            <TabPane className ="Tabbox" tab="Login" key="1">

            </TabPane>

            <TabPane className ="Tabbox" tab="Sign Up" key="2">
                
                <Card className = "box">
                    
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                        provinces: ['Ontario'],
                        prefix: '1',
                        }}
                        scrollToFirstError
                    >

                    <Form.Item
                        className = "email"
                        name="email"
                        label="Email"
                        rules={[
                            {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                            },
                            {
                            required: true,
                            message: 'Please input your E-mail!',
                            },
                        ]}
                        >
                    
                        <Input />
                    
                    </Form.Item>

                    <Form.Item
                        className = "firstpass"
                        name="password"
                        label="Password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                        >
                        <Input.Password />

                    </Form.Item>

                    <Form.Item
                        className = "conpass"
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                            required: true,
                            message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                            }),
                        ]}
                    >

                        <Input.Password />

                    </Form.Item>

                    <Form.Item
                        className = "user"
                        name="Username"
                        label={
                            <span>
                            UserName
                            </span>
                        }
                        rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                    >

                        <Input />

                    </Form.Item>

                    <Form.Item 
                        className = "prov"
                        name="provinces"
                        label="Provinces"
                        rules={[
                            { type: 'array', required: true, message: 'Please select your habitual residence!' },
                        ]}
                    >
                        <Cascader options={provinces} />

                    </Form.Item>

                    <Form.Item
                        className = "pn"
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >

                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />

                    </Form.Item>

                    <Form.Item
                        className = "addres"
                        name="address"
                        label="Address"
                        rules={[{ message: 'Please edit your address!' }]}
                    >
                        <Form.Item
                            name={['address', 'street']}
                            noStyle
                        >
                            <Input placeholder="Street Name" />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item
                        className = "postcode"
                        name="Postcode"
                        label={
                            <span>
                            Postcode
                            </span>
                        }
                    >

                        <Input />

                    </Form.Item>

                    <Form.Item
                        className ="agreebox"
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">Privacy Policy</a> and <a href="">Term and Conditions of LBCO website</a>.

                        </Checkbox>

                    </Form.Item>

                    <Form.Item className = "register" {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Register
                        </Button>
                    </Form.Item>

                </Form>
            </Card>
        </TabPane>
    </Tabs>
);
};

  export default RegistrationForm;