import { useState } from "react";
import "./App.css";
import "./index.css";
import image1 from "./components/images/dukan-logo.jpeg";
import image2 from "./components/images/drop.png";
import image3 from "./components/images/home.png";
import image4 from "./components/images/orders.png";
import image5 from "./components/images/products.png";

function App() {
  return (
    <>
      {/* <div className="h-screen grid grid-cols-10  ">
        <div className="col-span-2  bg-slate-800 text-cyan-400 ">Anupam</div>
        <div className="col-span-8 grid grid-rows-10 ">
          <header className="row-span-1 flex justify-between items-center shadow-md shadow-red-400 bg-red-900 ">
             <div>
               <img src=".components/images/dukan-logo.jpeg"></img>
             </div>
             <div className="flex gap-1">
              <input 
                placeholder="Search...."
                className="p-1 rounded"
              />
              <button className="bg-slate-100 p-1 rounded text-fuchsia-700">search</button>
             </div>
            <div className="flex gap-2">
                <button>Contact</button>
                <button>Email</button>
            </div>
          </header>
          <div className="row-span-9 ">
          <section className="m-3">
              <div className="flex justify-between ">
                  <h2 className="text-3xl font-serif">Overview</h2>
                  <button className="bg-slate-200 rounded p-1 ">This Month</button>
              </div>
             
          </section>
          <section>
          <div className=" h-30 bg-red-100 rounded m-3 ">
                  <div className="bg-zinc-600 "></div>
                  <div></div>
                  <div></div>
              </div>
          </section>
              

          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-5 h-screen bg-slate-500">
         <div className=" col-span-1 bg-slate-900">
              <div className="grid h-screen grid-rows-5">
                    <div className="row-span-1 flex justify-between items-center gap-2 first-line:rounded bg-stone-600 text-white">
                       <div><img src={image1} alt="photo" className="rounded-full "/></div>
                       <div><p>Nishyan</p></div>
                       <img src={image2} alt="photo" className="size-10  "/>
                    </div>
                    <div className="row-span-4 rounded bg-zinc-800">
                      <a className="flex gap-5 items-center p-5">
                        <div><img src={image3} alt="home" className="size-10"/></div>
                        <p1 className="text-white">Home</p1>
                      </a>
                      <a className="flex gap-5 items-center p-5">
                        <div><img src={image4} alt="home" className="size-10"/></div>
                        <p1 className="text-white">Orders</p1>
                      </a>
                      <a className="flex gap-5 items-center p-5">
                        <div><img src={image5} alt="home" className="size-10"/></div>
                        <p1 className="text-white">Products</p1>
                      </a>
                    </div>
              </div>
         </div>
         <div className=" col-span-4 bg-slate-600">

         </div>

      </div>
    </>
  );
}

export default App;
