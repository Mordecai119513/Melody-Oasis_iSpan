import React, { useEffect, useState } from 'react';
import { Button, message, Steps } from 'antd';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import CartPage from './cartPage';
import OrderPage from './orderPage';
import OrderConfirm from './orderConfirm';
import OrderFinish from './orderFinish';
import axios from 'axios';
import { useAuthJWT } from '@/hooks/use-auth-jwt';
import { useOrder } from '@/hooks/use-order';
import Link from 'next/link'

const { Step } = Steps;


const MyStepsComponent = () => {
    const { authJWT } = useAuthJWT()

    const [currentStep, setCurrentStep] = useState(0);


    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const [totalAmount, setTotalAmount] = useState(0);// 總計金额

    const updateTotalAmount = (subtotal, isSelected) => {
        // 如果 isSelected 为 true，添加小计金额；如果为 false，减去小计金额
        setTotalAmount((prevTotal) =>
        isSelected ? prevTotal - subtotal : prevTotal + subtotal
        );
    };
    
    
    //傳遞訂單Array
    const [allPeople, setAllPeople] = useState();
    const steps = [
        {
            title: '購物明細',
            content: <CartPage totalAmount={totalAmount} setTotalAmount={setTotalAmount} />,
        },
        {
            title: '訂購人資料',
            content: <OrderPage />,
        },
        {
            title: '訂單確認',
            content: <OrderConfirm allPeople={allPeople} setAllPeople={setAllPeople}/>,
        },
        // {
        //     title: '訂單完成',
        //     content: <OrderFinish />,
        // },
    ];
    const customTitleStyle = {
        color: 'white', // 進度條文字颜色更改为红色
    };

    const contentStyle = {
        // lineHeight: '260px',
        textAlign: 'center',
        backgroundColor: '#22333B',
        borderRadius: '8px',
        marginTop: '10px',
    };

    //傳入轉帳資料
    const { order, setOrder } = useOrder()
    const handlePaymentMethodChange = (e) => {
        const paymentMethod = e.target.value;

        // 将付款方式更新到订单上下文中
        setOrder((prevOrder) => ({
            ...prevOrder,
            payment: paymentMethod, // 更新 payment 字段
        }));
    };
    useEffect(()=>{
        // console.log("allPeople",allPeople);
    },[allPeople])
   
    console.log(allPeople);
    // console.log(handleAllPeopleReady);
    //傳送訂單到後端
    function sendOrder(orderData) {
        axios.post(`http://localhost:3005/api/order`, orderData)
            .then((response) => {
                console.log(`送資料到後端`, response.data)
                localStorage.clear();
            })
            .catch((error) => {
                console.log(`error`);
            })
    }
    
    function handleSendOrder() {
        console.log(allPeople);
        const orderData = allPeople.map(person => {
            return {
              "order_number": person.order_number,  // 订单编号
              "product_id": person.id,  // 产品ID，假设 person 中有 product_id 字段
              "payment_method": order.payment,  // 支付方式，从 order 中获取
              "Order_date": person.Order_Date,  // 日期
              "quantity": person.quantity,  // 数量，假设 person 中有 quantity 字段
              "Source_id": person.Source_id,  // 产品来源，假设 person 中有 Source_id 字段
              "ch_id": person.ch_id,  // 折扣券ID，假设 person 中有 ch_id 字段
              "member_id": person.member_id  // 会员ID，假设 person 中有 member_id 字段
              
            };
            console.log(person.order_number);
            
          });
        // [
        //     {
        //         "order_number": 10,//訂單編號
        //         "product_id": 1,//產品id
        //         "payment_method": order.payment,
        //         "Order_date": "",
        //         "quantity": 1,
        //         "Source_id": 3,//產品來源 課程
        //         "ch_id": 1,//折價券id
        //         "member_id": 1
        //     },
            
        // ]
        sendOrder(orderData)
    }


    return (
        <>
            <h1 className="topName">購物車</h1>
            <div className='container custom-step'>
                <Steps current={currentStep} >
                    {steps.map((step) => (
                        <Step key={step.title} title={<span style={customTitleStyle}>{step.title}</span>} />
                    ))}
                </Steps>
            </div>
            <div style={contentStyle}>{steps[currentStep].content}</div>
            <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
                {currentStep > 0 && (
                    <Button onClick={prevStep} className='btn buttonLeft '>
                        <span><FaArrowLeft /></span>
                        <div className='bWord'>上一步</div>
                    </Button>
                )}
                {currentStep === steps.length - 1 && (
                    
                    <Button type="primary" onClick={() => { message.success('感謝您的購買!'); handleSendOrder();(window.location.href = `/dashboard/order`) }} className='btn buttonRight'>
                        <div className='bWord'>完成</div>
                    </Button>
                )}
                {currentStep < steps.length - 1 && (
                    <Button type="primary" onClick={nextStep} className='buttonRight btn'>
                        <div className='bWord'>下一步</div>
                        <span><FaArrowRight /></span>
                    </Button>
                )}
            </div>
        </>
    );
};

export default MyStepsComponent;