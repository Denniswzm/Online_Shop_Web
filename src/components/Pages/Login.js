import React from 'react';
import './Login.scss';
import { Row, Col, Carousel, Card, Form, Input, Button, Checkbox, Breadcrumb, Tabs } from 'antd';
import QueueAnim from 'rc-queue-anim'
import {connect} from 'react-redux';
import {loginUser} from '../../action/UserActions';
import { Redirect } from 'react-router-dom';

const { TabPane } = Tabs;

const layout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 16,
			},
		};
const tailLayout = {
			wrapperCol: {
				offset: 8,
				span: 16,
			},
		};
	
const Demo = (props) => {
		const onFinish = values => {
			console.log('Success:', values);
			props.loginUser(values.username, values.password).then(() => {
				console.log('finished: ');
				console.log(props);
				if (props.isLogin) {
					props.history.push('/');
				}
			})
		};
	
		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};

function callback(key) {
			console.log(key);
		}
		if (props.isLogin) {
			return (
				<Redirect to="/" />
			)
		}
return (
		<Tabs className ="Tab" defaultActiveKey="1" onChange={callback} type="card" tabBarGutter="10px">
				<TabPane className ="Tabbox" tab="Login" key="1">
						<Card className = "box">
									<Form
										{...layout}
										name="basic"
										initialValues={{
											remember: true,
										}}
										onFinish={onFinish}
										onFinishFailed={onFinishFailed}
									>
									<Form.Item className = "username"
											label = "Username"
											name = "username"
											rules = {[
											{
												message: 'Please input your username!',
											},
										]}
									>
										<Input />
									</Form.Item>
									<Form.Item className = "password"
											label="Password"
											name="password"
											rules={[
											{
												message: 'Please input your password!',
											},
										]}
										>
										<Input.Password />
									</Form.Item>
						
									<Form.Item {...tailLayout} className = "remember" name="remember" valuePropName="checked">
										<Checkbox>Remember me</Checkbox>
									</Form.Item>
						
									<Form.Item {...tailLayout} >
										<Button type="primary" htmlType="submit" className = "submit">
											Submit
										</Button>
									</Form.Item>

								</Form>

								<Button type="link" href="">Forgot Username or Password?</Button>

								<a> | </a>

								<Button type="link" href="">Resend confirmation email</Button>

						</Card>
				</TabPane>

				<TabPane tab="Sign Up" key="2">
					

				</TabPane>

		</Tabs>
		);
	};
	const mapStateToProps = (state) => {
		console.log(state);
		return {
			isLogin: state.user.isLogin
		}
	}
	const mapDispatch = {loginUser};
	export default connect(mapStateToProps, mapDispatch)(Demo);