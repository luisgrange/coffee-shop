import Image from 'next/image';
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import prod from '../../images/product-1.png'
export function Products(){
    return(
        <>
            <div id='product'>
                <h1>Latest <span>Products</span></h1>

                <div className='container'>
                    <div className='column-3'>

                        <div className='prod-box'>
                            <div className='prod-box__top'>
                                <p><FaShoppingCart/></p>
                                <p><AiFillHeart/></p>
                                <p><AiFillEye/></p>
                            </div>
                            <div className='prod-box__bottom'>
                                <Image
                                    src={prod}
                                    alt="product"
                                    width={'96px'}
                                    height={'151px'}
                                />
                                <p className='prod-name'>Fresh coffee</p>
                                <p className='star'>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarHalf/>
                                </p>
                                <p>$15.99 <span><s>$20.99</s></span> </p>
                                <button className='btn-menu'>Add to cart</button>
                            </div>
                        </div>

                        <div className='prod-box'>
                            <div className='prod-box__top'>
                                <p><FaShoppingCart/></p>
                                <p><AiFillHeart/></p>
                                <p><AiFillEye/></p>
                            </div>
                            <div className='prod-box__bottom'>
                                <Image
                                    src={prod}
                                    alt="product"
                                    width={'96px'}
                                    height={'151px'}
                                />
                                <p className='prod-name'>Fresh coffee</p>
                                <p className='star'>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarHalf/>
                                </p>
                                <p>$15.99 <span><s>$20.99</s></span> </p>
                                <button className='btn-menu'>Add to cart</button>
                            </div>
                        </div>

                        <div className='prod-box'>
                            <div className='prod-box__top'>
                                <p><FaShoppingCart/></p>
                                <p><AiFillHeart/></p>
                                <p><AiFillEye/></p>
                            </div>
                            <div className='prod-box__bottom'>
                                <Image
                                    src={prod}
                                    alt="product"
                                    width={'96px'}
                                    height={'151px'}
                                />
                                <p className='prod-name'>Fresh coffee</p>
                                <p className='star'>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarHalf/>
                                </p>
                                <p>$15.99 <span><s>$20.99</s></span> </p>
                                <button className='btn-menu'>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    #product{
                        margin: 55px 0;
                    }
                    .column-3{
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 10px;
                    }
                    .prod-box{
                        border: 1px solid #eee;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 20px 0;
                    }
                    .prod-box__top{
                        display: flex;
                        margin-bottom: 10px;
                    }
                    .prod-box__top p{
                        color: #fff;
                        border: 1px solid #eee;
                        padding: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: all .3s ease;
                        cursor: pointer;
                    }
                    .prod-box__top p:not(p:last-child){
                        margin-right: 10px;
                    }
                    .prod-box__top p:hover{
                        background-color: #d3ad7f;
                        border: 1px solid #d3ad7f;
                    }
                    .prod-box__bottom{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .prod-box__bottom .prod-name{
                        font-size: 20px;
                        font-weight: 700;
                        color: #fff;
                        margin: 10px 0;
                    }
                    .prod-box__bottom .star{
                        display: flex;
                        color: #d3ad7f;
                        margin-bottom: 10px;
                    }
                    .prod-box__bottom p{
                        font-size: 18px;
                        color: #fff;

                    }
                    .prod-box__bottom p span{
                        font-size: 12px;
                    }
                `}
            </style>
        </>
    );
}