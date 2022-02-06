import { BsInstagram,BsTwitter,BsLinkedin,BsPinterest } from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

export function Footer(){
    return(
        <>
            <div id='footer'>
                <div className='container'>
                    <div className='social'>
                        <p><a href='#'><FaFacebookF/></a></p> 
                        <p><a href='#'><BsTwitter/></a></p>
                        <p><a href='#'><BsInstagram/></a></p>
                        <p><a href='#'><BsLinkedin/></a></p>
                        <p><a href='#'><BsPinterest/></a></p>
                    </div>
                    <div className='menu'>
                        <nav>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#product">Product</a></li>
                            <li><a href="#">Review</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                        </nav>
                    </div>
                    <div className='copy'>
                        <p>
                            Created by <span>Mr. Web Designer</span> | All rights reserved
                        </p>
                        <p>Coded by <span>Luís Fernando</span></p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    #footer{
                        background: #13131a;
                        padding: 30px 0;
                    }
                    #footer .container{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .social{
                        display: flex;
                        margin-bottom: 30px;
                    }
                    .social p{
                        background: #d3ad7f;
                        border-radius: 50% 50%;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .social p a{
                        color: #fff;
                        text-decoration: none;
                        font-size: 18px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .menu{
                        margin-bottom: 30px;
                    }
                    .menu nav{
                        list-style: none;
                        display: flex;
                    }
                    .menu nav li{
                        border: 1px solid #eee;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 8px 15px;
                        transition: all .3s ease;
                        cursor: pointer
                    }
                    .menu nav li a{
                        color: #fff;
                        text-decoration: none;
                        font-size: 18px;
                    }
                    .menu nav li:hover{
                        background: #d3ad7f;
                        border: 1px solid #d3ad7f;
                    }
                    .menu nav li:not(li:last-child),
                    .social p:not(p:last-child){
                        margin-right: 10px;
                    }
                    .copy p{
                        color: #fff;
                        text-transform: capitalize;
                    }
                    .copy p span{
                        color: #d3ad7f;
                    }
                `}
            </style>
        </>
    );
}