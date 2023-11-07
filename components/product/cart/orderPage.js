//訂單資料組件
import React, { useEffect, useState } from 'react';
import { Input } from 'rsuite';
import { useAuthJWT } from '@/hooks/use-auth-jwt';
import { useOrder } from '@/hooks/use-order';
export default function OrderPage() {
  const [shippingMethod, setShippingMethod] = useState('');
  const [couponCode, setCouponCode] = useState('');


  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleCouponCodeChange = (e) => {
    if (e && e.target) {
      setCouponCode(e.target.value);
    }
  };
  const [selectedCoupon, setSelectedCoupon] = useState('');

  const [applyMemberInfo, setApplyMemberInfo] = useState(false);

  //會員資訊
  const { authJWT } = useAuthJWT();
  const menberInfo = authJWT.userData;

  // 创建一个状态以存储收件人信息
  const [recipientInfo, setRecipientInfo] = useState({
    receiverName: '',
    receiverPhone: '',
    receiverAddress: '',
  });

  // 处理输入框值变化的函数
  const handleInputChange = (field, value) => {
    setRecipientInfo((recipientInfo) => ({
      ...recipientInfo,
      [field]: value,
    }));
  };

  //同訂購人
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setIsInfoVisible(e.target.checked);
      handleInputChange("receiverName", menberInfo.name);
      handleInputChange("receiverPhone", menberInfo.phone);
      handleInputChange("receiverAddress", menberInfo.address);
    } else {
      setIsInfoVisible(false);
      handleInputChange("receiverName", "");
      handleInputChange("receiverPhone", "");
      handleInputChange("receiverAddress", "");
    }
  };

  //付款方式
  const { order, setOrder } = useOrder();
  const [paymentMethod, setPaymentMethod] = useState("");

  // const handlePaymentMethodChange = (e) => {
  //   const paymentMethod = e.target.value;

  //   // 将付款方式更新到订单上下文中
  //   setOrder((prevOrder) => ({
  //     ...prevOrder,
  //     payment: paymentMethod,
  //   }));
  // };
  useEffect(() => {
    if (order.payment) {
      setPaymentMethod(order.payment);
    }
  }, [order.payment]);

  const handlePaymentMethodChange = (event) => {
    // console.log(event.target.value);
    setPaymentMethod(event.target.value);
    setOrder((prevOrderInfo) => ({
      ...prevOrderInfo,
      payment: event.target.value,
    }));
  };
  return (
    <div className='container orderCommodity'>
      <div className='pageTitle h4'>選擇付款方式</div>
      <div className='radioCon'>
        <input className='forInput'
          type="radio"
          id="creditCard"
          name="paymentMethod"
          value="信用卡付款"
          checked={paymentMethod === '信用卡付款'}
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="creditCard">信用卡付款</label>

        <div>
          <input className='forInput'
            type="radio"
            id="bankTransfer"
            name="paymentMethod"
            value="銀行轉帳"
            checked={paymentMethod === '銀行轉帳'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="bankTransfer">銀行轉帳</label>
        </div>
      </div>

      <div className='pageTitle h4'>選擇運送方式</div>
      <div className='radioCon'>
        <input className='forInput'
          type="radio"
          id="convenienceStore"
          name="shippingMethod"
          value="便利商店"
          checked={shippingMethod === '便利商店'}
          onChange={handleShippingMethodChange}
        />
        <label htmlFor="convenienceStore">便利商店</label>

        <div>
          <input className='forInput'
            type="radio"
            id="homeDelivery"
            name="shippingMethod"
            value="宅配"
            checked={shippingMethod === '宅配'}
            onChange={handleShippingMethodChange}
          />
          <label htmlFor="homeDelivery">宅配</label>
        </div>
        <div>
          <input className='forInput'
            type="radio"
            id="postalService"
            name="shippingMethod"
            value="郵寄"
            checked={shippingMethod === '郵寄'}
            onChange={handleShippingMethodChange}
          />
          <label htmlFor="postalService">郵寄</label>
        </div>


      </div>
      <div className="pageTitle h4">訂購人資訊</div>
      <div className="forInput1">
        <div className='inputTitle'>
          姓名: {menberInfo.name}
        </div>
        <div className='inputTitle'>
          電話: {menberInfo.phone}
        </div>
        <div className='inputTitle'>
          地址: {menberInfo.address}
        </div>
      </div>


      <div className='pageTitle h4'>收件人資訊</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span>{`同訂購人資訊`}</span>
      </div>
      <div className="inputContainer ">
        <div className="forInput2">
          <div className="inputRow">
            <div className='inputTitle'>姓名:</div>
            <div>
              <Input type="text"
                placeholder="姓名*"
                value={isInfoVisible ? menberInfo.name : ''}
                onChange={(e) =>
                  handleInputChange("receiverName", e.target.value)
                } />
            </div>
            <div className=' inputTitle '>電話:</div>
            <div>
              <Input placeholder="電話" style={{ margin: 15, width: 145 }} value={isInfoVisible ? menberInfo.phone : ''}
                onChange={(e) =>
                  handleInputChange("receiverPhone", e.target.value)
                } />
            </div>
          </div>
        </div>
        <div className="forInput2">
          <div className='inputTitle'>地址:</div>
          <Input placeholder="地址" style={{ margin: 15 }} value={isInfoVisible ? menberInfo.address : ''}
            onChange={(e) =>
              handleInputChange("receiverAddress", e.target.value)
            } />
        </div>
      </div>

    </div>
  );
}