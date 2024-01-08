//import NavBarHome from "../NavBarHome/NavBarHome";
//import { Link } from 'react-router-dom';


const LoginCliente = () => { //https://www.material-tailwind.com/docs/html/card#login-card
  return (
    <div  className="relative bg-cover bg-center h-screen text-white text-center mb-16" style={{
      backgroundImage:
        'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")', height:"auto", padding: "5% 8%", display:"flex", 
    }}   
  >
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 bg-clip-border" 
      style={{ width:"70%", paddingBottom:"3%" }}>   
        <div className="flex flex-col gap-4 p-6">
          <a href="#signup" style={{ marginLeft:"8%"}} 
          class="text-left block ml-1 font-sans text-xs antialiased font-bold leading-normal text-naranja">
          🡰 Volver
        </a>
          <p  style={{ marginLeft:"17%", marginBottom:"3%"}} 
          className="flex mt-6 font-sans text-2xl antialiased font-light leading-normal text-left">
          Te damos la Bienvenida <br/> nuevamente!  
          </p>

          <button className="flex h-11 w-full min-w-[200px] text-left" 
          style={{ marginBottom:"1%", marginLeft:"17%" }}>
            <p style={{ width:"11%", background:"#6b7280", paddingLeft:"5%", paddingTop:"2%", paddingBottom:"6%", borderBottom:"1px solid #6b7280", }} 
            className="w-full h-full px-1 py-0 font-sans text-lg font-normal text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="22" width="27" viewBox="0 0 512 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            </p>                    
            <p style={{ width:"57%", background:"#6b7280", paddingTop:"2%", paddingBottom:"6%", borderTop:"1px solid #6b7280" }}
             className="w-full h-full px-5 py-3 font-sans text-base font-normal text-white border peer border-l-transparent "
            >  CONTINÚA CON GOOGLE
            </p>
          </button>

          <p style={{ marginLeft:"50%", marginBottom:"3%"}} 
          className="flex font-sans text-xl antialiased font-light leading-normal text-left">
            ó     
          </p>

          <div className="flex h-11 w-full min-w-[200px]">
            <p style={{ width:"11%", background:"#444444", marginLeft:"17%" }} 
            className="w-full h-full px-5 py-3 font-sans text-base font-normal text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 512 512"><path fill="#ffffff" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            </p>                    
            <input style={{ width:"57%", background:"#444444", }}
             className="w-full h-full px-5 py-3 font-sans text-base font-normal text-white border peer border-l-naranja border-t-black border-b-black"
              placeholder="johnbsmith@gmail.com" />
          </div>
          <div className="flex h-11 w-full min-w-[200px]">
            <p style={{ width:"11%", background:"#444444",  marginLeft:"17%"}} 
            className="w-full h-full px-6 py-3 font-sans text-base font-normal text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            </p>
                    
            <input style={{ width:"57%", background:"#444444", paddingTop:"4%"}}
             className="w-full h-full px-5 py-4 font-sans text-base font-normal text-white border peer border-l-naranja border-t-black border-b-black"
              placeholder="**************" />
             </div>
        </div>
        
        <div className="p-6 pt-0">
          <button
           className="block w-full select-none bg-naranja py-3 px-6 text-center align-middle font-sans text-lg  uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" style={{ width:"43%", marginLeft:"17%", marginTop:"2%" , paddingTop:"4%", paddingBottom:"4%"}}>
            INICIAR SESIÓN
          </button>
          
        </div>

      </div>
   
      <div className="block flex flex-col text-gray-700 bg-white shadow-md w-96 bg-clip-border" style={{ width:"40%",background: "rgb(29, 40, 40)", color:"white", paddingTop:"5%", paddingLeft:"3%",paddingRight:"3%", }}>  
        <div className="p-6 pt-0">
          
          <h1 style={{marginLeft: "7%"}} className="flex  mt-6 font-sans text-2xl antialiased font-extrabold  leading-normal text-left">
            ¿NO TIENES <br/> UNA CUENTA?          
          </h1>
          <p style={{marginLeft: "7%", marginTop: "30%", marginBottom: "39%"}} className="text-2xl antialiased font-extrabold text-left">
          Regístrate para  <br/> acceder a lo <br/> mejor de <br/> SERENA HOTELS</p>

          <div className="p-6 pt-0">
            <button
            className="block w-full select-none py-3 px-6 text-center align-middle font-sans text-lg  uppercase text-naranja shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button" style={{ width:"100%", padding:"10% 10%", border: "1px solid #FF3D00",}}>
             REGÍSTRATE AHORA
            </button>
          
          </div>
        </div>

      </div>
    </div>  
   
    );
  };
export default LoginCliente;
/*
<a href="https://iconscout.com/icons/google" class="text-underline font-size-sm" target="_blank">Google</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
    */