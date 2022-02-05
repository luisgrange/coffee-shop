import menu1 from '../../images/menu-1.png';
import Image from 'next/image';

export function Menu(){
    return(
        <>
            <div id='menu'>
                <h1>Our <span>Menu</span></h1>
                <div className='container'>

                    <div className='box-menu'>
                        <Image 
                            src={menu1}
                            alt='menu image'
                            width={'80px'}
                            height={'80px'}
                        />
                        <p className='menu-name'>Tasty and Healthy</p>
                        <p>$15.99 <span><s>$20.99</s></span> </p>
                        <button className='btn-menu'>Add to cart</button>
                    </div>
                    <div className='box-menu'>
                        <Image 
                            src={menu1}
                            alt='menu image'
                            width={'80px'}
                            height={'80px'}
                        />
                        <p className='menu-name'>Tasty and Healthy</p>
                        <p>$15.99 <span><s>$20.99</s></span> </p>
                        <button className='btn-menu'>Add to cart</button>
                    </div> 
                    <div className='box-menu'>
                        <Image 
                            src={menu1}
                            alt='menu image'
                            width={'80px'}
                            height={'80px'}
                        />
                        <p className='menu-name'>Tasty and Healthy</p>
                        <p>$15.99 <span><s>$20.99</s></span> </p>
                        <button className='btn-menu'>Add to cart</button>
                    </div>
                    
                    <div className='box-menu'>
                        <Image 
                            src={menu1}
                            alt='menu image'
                            width={'80px'}
                            height={'80px'}
                        />
                        <p className='menu-name'>Tasty and Healthy</p>
                        <p>$15.99 <span><s>$20.99</s></span> </p>
                        <button className='btn-menu'>Add to cart</button>
                    </div>
                    <div className='box-menu'>
                        <Image 
                            src={menu1}
                            alt='menu image'
                            width={'80px'}
                            height={'80px'}
                        />
                        <p className='menu-name'>Tasty and Healthy</p>
                        <p>$15.99 <span><s>$20.99</s></span> </p>
                        <button className='btn-menu'>Add to cart</button>
                    </div>
                    <div className='box-menu'>
                        <Image 
                            src={menu1}
                            alt='menu image'
                            width={'80px'}
                            height={'80px'}
                        />
                        <p className='menu-name'>Tasty and Healthy</p>
                        <p>$15.99 <span><s>$20.99</s></span> </p>
                        <button className='btn-menu'>Add to cart</button>
                    </div>                     

                </div>
            </div>
            
            <style jsx>
                {`
                    #menu{
                        color: #fff;
                    }
                    #menu h1 {
                        margin-bottom: 30px;
                        text-transform: uppercase;
                        font-size: 45px;
                        text-align: center;
                    }
                    #menu h1 span{
                        color: #d3ad7f;
                    }
                    #menu .container{
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 10px;
                    }
                    .box-menu{
                        border: 1px solid #eee;
                        
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        padding: 40px 0;
                        transition: all .3s ease;
                        cursor: pointer;
                    }
                    .box-menu:hover{
                        background: #fff;
                        color: #000;
                    }
                    .box-menu:hover button{
                        color: #000;
                    }
                    .box-menu p.menu-name{
                        margin: 20px 0;
                        font-size: 20px;
                        font-weight: 700;
                    }
                    .box-menu p{
                        font-size: 18px;
                    }
                    .box-menu  p span{
                        font-size: 12px;
                    }
                `}
            </style>

        </>
    );
}