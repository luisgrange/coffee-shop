function GlobalStyle(){
    return(
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Roboto', sans-serif;
        }

        /* App fit Height */ 
        html, body, #__next {
          min-height: 100%;
          /*display: flex;*/
          flex: 1;
          background-color: #000;
          overflow-x: hidden;
          scroll-padding-top: 9rem;
          scroll-behavior: smooth;
        }
        html::-webkit-scrollbar{
            width: .8rem;
        }
        html::-webkit-scrollbar-track{
            background: transparent;
        }
        
        html::-webkit-scrollbar-thumb{
            background: #fff;
            border-radius: 5rem;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        .container{
          padding: 0 90px;
        }
        button{
          margin-top: 1rem;
          border: none;
          background: #d3ad7f;
          color: #eee;
          padding: 10px;
          display: flex;
          justify-content: center;
          width: 108px;
          cursor: pointer;
        }
         h1 {
          margin-bottom: 30px;
          text-transform: uppercase;
          font-size: 45px;
          text-align: center;
          color: #fff;
        }
        h1 span{
            color: #d3ad7f;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}

export default function App({ Component, pageProps }){
    return(
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}