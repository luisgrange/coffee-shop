import Image from 'next/image';
import logo from '../../images/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';


export function Header(){
    return(
        <div className='header'>
            <div className='container'>
                <div className='logo'>
                    <Image
                        src={logo}
                        alt="logo"
                    />
                </div>
                <nav>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#">Review</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </nav>
                <div className='other-links'>
                    <button className='icon'><FiSearch/></button>
                    <button className='icon'><FaShoppingCart/></button>
                </div>
            </div>

            <style jsx>{`
                .header{
                    background-color: #000;
                    border-bottom: 1px solid #ccc;
                    color: #fff;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 9999;
                }
                .container{
                    padding: 15px 90px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo{
                    position: relative;
                    width: 75px;
                }
                nav{
                    display: flex;
                    list-style: none;
                }
                nav li:not(li:last-child){
                    margin-right: 20px;
                }
                nav li a{
                    text-decoration: none;
                    color: #fff;
                    cursor: pointer;
                    transition: all .4s ease;
                }
                nav li a:hover{
                    color: #d3ad7f;
                    border-bottom: 1px solid #d3ad7f
                }
                .other-links{
                    display: flex;
                }
                .other-links button:not(button:last-child){
                    margin-right: 16px;
                }
                
                button.icon{
                    width: auto!important;
                    transition: all .3s ease;
                }
                button.icon:hover{
                    color: #d3ad7f;
                }
                button{
                    background: none;
                    border: none;
                    outline: none;
                    color: #fff;
                    font-size: 25px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}
