import React from 'react';

import Image from '../../../assets/images/myorders.png';
import { Shevron } from '../../../assets/vectors/Icons';

import styles from './MyOrders.module.css'

const orders=[
    {id: 1, orderNumber: 12345678, price: '1,899', date: 'Sat, Aug 30', delivered: false, paymentMethod: 'Credit Card Payment'},
    {id: 2, orderNumber: 12345678, price: '1,899', date: 'Sat, Aug 31', delivered: false, paymentMethod: 'Credit Card Payment'},
    {id: 3, orderNumber: 12345678, price: '1,899', date: 'Sat, Aug 16', delivered: true, paymentMethod: 'Credit Card Payment'},
    {id: 4, orderNumber: 12345678, price: '1,899', date: 'Sat, Aug 15', delivered: true, paymentMethod: 'Credit Card Payment'}
]

const MyOrders = () => {
    const myOrders = orders.map( order => <section key={order.id} className={styles.Order}>
        <img src={Image} alt='orders' />
        <section className={styles.OrderDetails}>
            <p>Order #{order.orderNumber}</p>
            <p>Madeup White Cotton Blend <br/>Checkered Slim Fit Shirt</p>
            <p>Express Delivery by {order.date}</p>
        </section>
        <section className={styles.PaymentDetails}>
            <p>{order.paymentMethod}</p>
            <p>Rs {order.price}</p>
            <Shevron />
        </section>
        <div className={styles.Status + (order.delivered ? ' '+ styles.Delivered : ' '+ styles.Pending)}>
            {order.delivered ? 'Delivered' : 'Pending'}
        </div>
    </section>)

    return <section className={styles.MyOrders}>
        <h1 className={styles.Title}>My Orders</h1>
        {myOrders}
    </section>
}

export default MyOrders;