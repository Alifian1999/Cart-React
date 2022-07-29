import React, { useEffect, useState } from "react";
import Navbar_ from '../components/Navbar_'
import Card from 'react-bootstrap/Card'
import helly_jacket from '../assets/Helly-Hansen-Verglas-Down-Jacket-PNG.png'
import Button from 'react-bootstrap/Button'
import arrow from '../assets/dropDown.png'
import { useSelector, useDispatch} from 'react-redux'
import handleCartAction from "../redux/actions/cartAction.js";
import '../styling/content.css'



const Content = () =>{
    const dispatch = useDispatch()
    let selector = useSelector(state => state.handleCartReducer)
    const [countShirt, setCountShirt] = useState(0)
    const [countHoodie, setCountHoodie] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [getPrice, setGetPrice] = useState({
        hoodie : 0,
        shirt : 0
    })

    const handleChangeShirt = (e,price) =>{
        setCountShirt(prev => prev + e)
        setGetPrice({shirt : price})
    }
    const handleChangeHoodie = (e,price) =>{
        setCountHoodie( prev => prev + e)
        setGetPrice({hoodie : price})
    }


    useEffect(()=>{
        const currencyFormat = new Intl.NumberFormat('en-US',{
            style : 'currency',
            currency : 'USD'
        })
       const currency = currencyFormat.format((17.99 * countShirt) + (35.99 * countHoodie))
       setTotalPrice(currency)
    })

    const handleDelete = (id) =>{
        dispatch(handleCartAction(id))
    }
    useEffect(()=>{
        dispatch(handleCartAction())
    },[])

    return(
        <div>
            <Navbar_/>
            <div id="container_content" className="d-flex justify-content-center mt-5 w-100 ">
                <Card className="container_card">
                    <Card.Title id="title_top" className="d-flex justify-content-start">Cart (2 items)</Card.Title>
                    {selector.payload?selector.payload.map((e,i)=>
                    <div key={i}>
                    <Card.Body className="w-100 d-flex">
                        <div className="w-25" id="container_img">
                            <Card.Img className="p-2" style={{width:'90%'}} src={helly_jacket}/>
                        </div>
                        <div className="d-flex w-100">
                            <Card.Body className="d-flex flex-column pt-0 pb-0 text-start justify-content-between" style={{width:'40%'}}>
                                <Card.Title>{e.title}</Card.Title>
                                <div className="d-flex flex-column">
                                    <span id="span-description">{e.description}</span>
                                    <span style={{marginBottom:'10px'}}>Color {e.color} </span>
                                    <span>SIZE {e.size}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <i id="trashCan" onClick={() => handleDelete(e.id)} className="bi bi-trash3-fill"> Remove Item</i>
                                    <i id="loveIcon" className="bi bi-heart"> Move to the wish list</i>
                                </div>
                            </Card.Body>
                            <Card.Body className="d-flex flex-column justify-content-between p-0" style={{width:'30px'}}>
                                        <div className="d-flex justify-content-start flex-column" style={{height:'120px'}}>
                                            <div className="d-flex justify-content-end">
                                                {i === 0? 
                                                <div id="container_count" className="d-flex justify-content-between h-100">
                                                    <i id="action_count" onClick={() => handleChangeShirt(1,e.price)} className="bi bi-plus"></i>
                                                    <span className="m-auto">{countShirt}</span>
                                                    <i id="action_count" onClick={countShirt>0?() => handleChangeShirt(-1,e.price) : null}  className="bi bi-dash"></i>
                                                </div> : null}
                                                {i === 1? 
                                                <div id="container_count" className="d-flex justify-content-between h-100" >
                                                    <i id="action_count" onClick={() => handleChangeHoodie(1,e.price)}  className="bi bi-plus"></i>
                                                    <span className="m-auto">{countHoodie}</span>
                                                    <i id="action_count" onClick={countHoodie > 0? () => handleChangeHoodie(-1,e.price) : null}  className="bi bi-dash"></i>
                                                </div> : null}
                                            </div>
                                            <small id="stockGoods" className="d-flex justify-content-end">{e.stock? `Note, ${e.stock} piece` : null}</small>
                                        </div>
                                    <span className="d-flex justify-content-end">${e.price}</span>
                            </Card.Body>
                        </div> 
                    </Card.Body>
                    <hr className="m-auto"/>
                    </div>
                    ) : null}
                </Card>
                <div className="container_checkout">
                    <Card className="w-100 text-start p-4">
                        <Card.Title>The total amount of</Card.Title>
                        <div className="pt-4">
                            <div className="d-flex justify-content-between">
                                <span>Temporary amount</span>
                                <span >{totalPrice}</span>
                            </div>
                            <div className="pt-3 pb-1 d-flex justify-content-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="pb-4 d-flex justify-content-between">
                            <div className="d-flex flex-column fw-bold ">
                                <span>The total amount of</span>
                                <span>(Including VAT)</span>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <span>{totalPrice}</span>
                            </div>
                        </div>
                        <Button style={{height:'50px'}}>GO TO CHECKOUT</Button>
                    </Card>
                    <Card className="d-flex flex-row justify-content-between p-2 mt-3">
                        <input id="inputNumber" placeholder="Add a discount code (optional)" className="w-100 border-0" type='text' inputMode="numeric"/>
                        <label htmlFor="inputNumber"><img src={arrow} className='img-fluid' /></label>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Content