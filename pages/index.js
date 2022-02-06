import { Header } from '../src/components/header.js';
import { Menu } from '../src/components/menu.js';
import { Products } from '../src/components/products';
import {Footer} from '../src/components/footer.js'
import homeImg from '../images/home-img.jpeg';
import aboutImg from '../images/about-img.jpeg';
import Image from 'next/image';


function Main(){
    return(
        <>
            <div id='home' className='home'
                style={{
                    backgroundImage: `url(${homeImg.src})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: `100%`,
                    width: `100%`,
                    minHeight: `100vh`
                }}
            >
                <div className='container'>
                    <h1>Fresh coffee in the morning</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. sit, consequuntur?
                        Et veritatis velit nesciunt odio!
                    </p>
                    <button>Get it now</button>
                </div>
            </div>
            <style jsx>
                {`
                    .home{
                        display: flex;
                        align-items: center;
                    }
                    .home .container{
                        margin: 40px 0;
                        
                        color: #fff;
                        width: 45%;
                    }
                    .home .container h1{
                        text-align: left;
                        font-size: 50px;
                        font-weight: 700;
                        text-transform: uppercase;
                    }
                    .home .container p{
                        margin-top: 1rem;
                        font-weight: 100;
                        line-height: 1.8rem;
                        color: #eee;
                    }
                    
                    
                `}
            </style>
        </>
        
    );
}

function About(){
    return(
        <>
            <div id='about'>
                <h1><span>About</span> Us</h1>
                <div className='container'>
                    <div className='box'>
                        <div className='left'>
                            <Image
                                src={aboutImg}
                                alt='about image'
                            />
                        </div>
                        <div className='right'>
                            <h4>What makes our coffee special?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Vivamus placerat eget diam pretium finibus. Curabitur efficitur ipsum at condimentum iaculis. 
                                Cras convallis, ante eu pellentesque commodo, ligula ligula malesuada elit, ut luctus nisi lectus ut odio. 
                                Praesent et egestas nunc, eleifend fermentum sem.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat eget diam pretium finibus. Curabitur efficitur ipsum at condimentum iaculis. Cras convallis</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    #about{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin: 55px 0;
                    }
                    #about h1{
                        margin-bottom: 30px;
                        text-transform: uppercase;
                        font-size: 45px;
                    }
                    #about h1, #about h4, #about p{
                        color: #fff;
                    }
                    #about h1 span{
                        color: #d3ad7f;
                    }

                    #about .box{
                        display: flex;
                        align-items: center;
                        background: #13131a;
                    }
                    #about h4{
                        margin-bottom: 20px;
                        font-size: 35px;
                        text-transform: capitalize;

                    }
                    #about p{
                        margin-bottom: 20px;
                        font-weight: 100;
                        line-height: 1.8rem;
                        color: #eee;
                        font-size: 14px;
                    }
                    #about  .right{
                        padding: 0 25px;
                        margin: 0;
                    }
                    #about .left, #about  .right{
                        width: 50%;
                    }
                `}
            </style>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Header/>
            <Main/>
            <About/>
            <Menu/>
            <Products/>
            <Footer/>
        </>
    )
  }
  
  export default HomePage