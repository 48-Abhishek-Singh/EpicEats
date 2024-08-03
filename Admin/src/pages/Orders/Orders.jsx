import React from "react";
import "./Orders.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import {assets} from "/src/assets/assets"

const Orders = ({ url }) => {
  const [order, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(ur + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  const statusHandler = async (event, orderId) =>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success) {
      await fetchAllOrders();
    }
  }


  useEffect(() => {
    fetchAllOrders();
  });

  return (
    <div>
      <div className="order add">
        <h3>Order Page</h3>
        <div className="order-list">
          {order.map(() => {
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className="order-item-food">
                  {order.item.map((item, index)=>{
                    if(index===order.items.length-1){
                      return item.name + " x " + item.quantity
                    } 
                    else{
                      return item.name + " x " + item.quantity + ","
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName+""+order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street+","}</p>
                  <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items : {order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event) =>statusHandler(event,order._id)} value={order.status} >
                <option value="Food Processing"></option>
                <option value="Out for delivery"></option>
                <option value="Delivered"></option>
              </select>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;