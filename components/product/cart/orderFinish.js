//结帳完成
import React from 'react';
import OrderConfirm from './orderConfirm';
// 生成随機訂單號
function generateOrderNumber(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let orderNumber = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
    }
    return orderNumber;
}

export default function OrderFinish({ memberName, totalAmount }) {
    // 生成随機訂單號
    const orderNumber = generateOrderNumber(10);

    return (
        <div className='commodity2'>
            <div className='center'>
                <div className='pWord'>
                    親愛的會員
                    {memberName && (
                        <span>
                            <a href='#'>{memberName}</a>
                        </span>
                    )}
                    您好，請確認以下資訊
                </div>
                <div className='pWord'>訂單編號:{orderNumber}</div>
                <div className='pWord'>訂單金額:NT$</div>

                {/* 两個併排按鈕 */}
                {/* <div className='buttons'>
                    <button className='btn buttonRight' onClick={() => window.location.href = '/'}>回首頁</button>
                    <button className='btn buttonRight' onClick={() => window.location.href = '/purchase-history'}>回購買記錄</button>
                </div> */}
            </div>
        </div>
    );
}