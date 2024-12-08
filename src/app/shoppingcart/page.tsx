import React from 'react';

const page = () => {
  return (
    <div className=' '>
             <div
   
  >
      <div
    className="flex flex-col justify-center items-start px-20 py-28 mt-6 w-full text-center bg-violet-50 max-md:px-5 max-md:pb-24 max-md:max-w-full"
    role="region"
    aria-label="Shop Navigation"
  >
    <div className="flex flex-col mb-0 max-w-full w-[315px] max-md:mb-2.5">
      <h1 className="text-4xl font-bold text-indigo-950">Blog Page</h1>
      <nav aria-label="Breadcrumb">
        <ol className="flex gap-1.5 self-start mt-2.5 text-base font-medium">
          <li className="flex gap-1 text-black">
            <a
              href="/"
              className="grow hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 ml-20"
            >
              Home
            </a>
            <span aria-hidden="true">.</span>
          </li>
          <li className="flex gap-1 text-black">
            <a
              href="/pages"
              className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Pages
            </a>
            <span className="text-pink-500" aria-hidden="true">
              .
            </span>
          </li>
          <li className="text-pink-500" aria-current="page">
            Blog Page
          </li>
        </ol>
      </nav>
    </div>
  </div>
  </div>

  <div className='flex'> <div className='flex flex-row'> <div className='flex gap-24 ml-24'>
        <div>
          <div
            className="flex flex-col w-full max-md:mt-10 max-md:max-w-full"
            role="main"
            aria-label="Shopping Cart"
          >
            <div className="w-full max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-3 max-md:mt-10">
                    <div className="flex flex-col text-xl font-bold text-blue-900 whitespace-nowrap">
                      <div className="self-start" role="heading" aria-level={2}>
                        Product
                      </div>
                      <div
                        className="flex shrink-0 mt-11 rounded bg-stone-300 h-[93px] w-[86px] max-md:mt-10"
                        role="img"
                        aria-label="Product image"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/23e47facd668e8974b35af2db82852e1d722e48e8effa2d1b95ed1ba1a6e462b?apiKey=48515e2413874846bf60cd2409ef14d1&"
                          alt="Product image"
                          className="object-contain w-full aspect-[0.95] max-w-[83px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start self-end mt-20 text-slate-400 max-md:mt-10">
                      <div className="self-stretch text-sm text-black">
                        Ut diam consequat
                      </div>
                      <div className="flex mt-1.5 whitespace-nowrap">
                        <div className="grow text-xs">Color:</div>
                        <div className="text-sm">Brown</div>
                      </div>
                      <div className="flex mt-2 whitespace-nowrap">
                        <div className="grow text-xs">Size:</div>
                        <div className="text-sm">XL</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                  <div className="max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col">
                      <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow whitespace-nowrap max-md:mt-10">
                          <div className="text-xl font-bold text-blue-900">Price</div>
                          <div className="self-start mt-20 text-sm text-blue-950 max-md:mt-10">
                            $32.00
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-xl font-bold text-blue-900 whitespace-nowrap max-md:mt-10">
                          <div>Quantity</div>

                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col whitespace-nowrap max-md:mt-10">
                          <div className="text-xl font-bold text-blue-900">Total</div>
                          <div className="mt-20 text-sm text-blue-950 max-md:mt-10 max-md:mr-0.5">
                            £219.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shrink-0 mt-3.5 max-w-full h-px border border-solid border-zinc-200 w-[718px]"
              role="separator"
            />
            {/* Second product */}
            <div className="flex flex-wrap gap-10 mt-2 w-full max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-3 text-slate-400">
                <div
                  className="flex shrink-0 rounded bg-stone-300 h-[93px] w-[86px]"
                  role="img"
                  aria-label="Product image"
                >
                 <img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/ae9942df51b8920e0fb48682d5714fb196a5e4ede5bcaa711d6efb12d2da2016?apiKey=48515e2413874846bf60cd2409ef14d1&"
  className="object-contain w-full aspect-[0.95] max-w-[83px]"
  alt="Decorative company logo"

/>
                </div>
                <div className="flex flex-col items-start my-auto">
                  <div className="self-stretch text-sm text-black">
                    Vel faucibus posuere
                  </div>
                  <div className="flex mt-1.5 whitespace-nowrap">
                    <div className="grow text-xs">Color:</div>
                    <div className="text-sm">Brown</div>
                  </div>
                  <div className="flex mt-2 whitespace-nowrap">
                    <div className="grow text-xs">Size:</div>
                    <div className="text-sm">XL</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-auto gap-10 items-start my-auto text-sm whitespace-nowrap text-blue-950">
                <div className="mt-3.5">$32.00</div>
               
                <div className='mt-3.5 ml-64'>£219.00</div>
              </div>
            </div>
            <div
              className="shrink-0 mt-3.5 max-w-full h-px border border-solid border-zinc-200 w-[718px]"
              role="separator"
            />
            {/* Third product */}
            <div className="flex flex-wrap gap-10 mt-2 w-full max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-3 text-slate-400 ">
                <div
                  className="flex shrink-0 rounded bg-stone-300 h-[93px] w-[86px]"
                  role="img"
                  aria-label="Product image"
                >
  <img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e72a6566ee2af5b72f021f9c43d488294e0748b316d7883e9fc18cdca54b4f4f?apiKey=48515e2413874846bf60cd2409ef14d1&"
  className="object-contain w-full aspect-[0.95] max-w-[83px]"
  alt="Decorative company logo"
  
/>
                </div>
                <div className="flex flex-col items-start my-auto">
                  <div className="self-stretch text-sm text-black">
                    Volutpat faucibus
                  </div>
                  <div className="flex mt-1.5 whitespace-nowrap">
                    <div className="grow text-xs">Color:</div>
                    <div className="text-sm">Brown</div>
                  </div>
                  <div className="flex mt-2 whitespace-nowrap">
                    <div className="grow text-xs">Size:</div>
                    <div className="text-sm">XL</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-auto gap-10 items-start my-auto text-sm whitespace-nowrap text-blue-950">
              <div className='mt-3.5 ml-7'>£219.00</div>
             
                <div className='ml-64 mt-2'>£219.00</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-10 mt-2 w-full max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-3 text-slate-400">
                <div
                  className="flex shrink-0 rounded bg-stone-300 h-[93px] w-[86px]"
                  role="img"
                  aria-label="Product image"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/49afb8a41569854740a888460338087a03c1055ed13d512e4c42b94566bd9689?apiKey=48515e2413874846bf60cd2409ef14d1&"
                    alt="Product image"
                    className="object-contain w-full aspect-[0.95] max-w-[83px]"
                  />
                </div>
                <div className="flex flex-col items-start my-auto">
                  <div className="self-stretch text-sm text-black">
                    Vel faucibus posuere
                  </div>
                  <div className="flex mt-1.5 whitespace-nowrap">
                    <div className="grow text-xs">Color:</div>
                    <div className="text-sm">Brown</div>
                  </div>
                  <div className="flex mt-2 whitespace-nowrap">
                    <div className="grow text-xs">Size:</div>
                    <div className="text-sm">XL</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-auto gap-10 items-start my-auto text-sm whitespace-nowrap text-blue-950">
              <div className='mt-3.5'>£219.00</div>
               
                <div className='ml-64 mt-6'>£219.00</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-10 mt-2 w-full max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-3 text-slate-400">
                <div
                  className="flex shrink-0 rounded bg-stone-300 h-[93px] w-[86px]"
                  role="img"
                  aria-label="Product image"
                >
                 <img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/5ae6dbc48cd5b3858b0ca4c12e11b7963ba5480288b7ad8d7f6160b9d82e7096?apiKey=48515e2413874846bf60cd2409ef14d1&"
  className="object-contain w-full aspect-[0.95] max-w-[83px]"
  alt="Company logo"
 
/>
                </div>
                <div className="flex flex-col items-start my-auto">
                  <div className="self-stretch text-sm text-black">
                    Vel faucibus posuere
                  </div>
                  <div className="flex mt-1.5 whitespace-nowrap">
                    <div className="grow text-xs">Color:</div>
                    <div className="text-sm">Brown</div>
                  </div>
                  <div className="flex mt-2 whitespace-nowrap">
                    <div className="grow text-xs">Size:</div>
                    <div className="text-sm">XL</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-auto gap-10 items-start my-auto text-sm whitespace-nowrap text-blue-950">
                <div className="mt-3.5">$32.00</div>
               
                <div className='ml-64 mt-6'>£219.00</div>
              </div>
            </div>

            
          </div>
        </div>

        <div>
          {/* Additional content can go here */}
        </div>
      </div>






    </div>
    
    <div className='flex flex-col'>
<div><div className="flex flex-col rounded-none max-w-[371px]  -mt-12 ml-">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/f4807ac545b8a6853202010d50e31458383f443e10f6d7218b7a1dcfbffdc470?apiKey=48515e2413874846bf60cd2409ef14d1&"
    className="object-contain "
    alt=""
    role="presentation"
  
  />
</div>
</div>



<div>
<form className="flex flex-col text-lg rounded-none w-[300px] mr-96  ">
        <div className="flex flex-col  w-full bg-white shadow-sm sm:px-5">
        

          <div className="mt-9">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              type=""
              id=""
              name=""
              className="w-full px-3.5 py-4 text-base bg-white rounded-sm border border-solid border-slate-300 focus:ring-2 focus:ring-pink-500"
              placeholder="Email Address"
              aria-required="true"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type=""
              id=""
              name=""
              className="w-full px-4 py-4 text-base bg-white rounded-sm border border-solid border-slate-300 focus:ring-2 focus:ring-pink-500"
              placeholder="Password"
              aria-required="true"
            />
            <input
              type=""
              id=""
              name=""
              className=" mt-5 w-full px-4 py-4 text-base bg-white rounded-sm border border-solid border-slate-300 focus:ring-2 focus:ring-pink-500"
              placeholder="Password"
              aria-required="true"
            />
          </div>
          <button
            type="submit"
            className="px-16 py-3.5 mt-6 font-bold text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:px-5 sm:w-full"
          >Continue shopping
          </button>


          <a
            href="#"
            className="self-start mt-3.5 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            tabIndex={0}
          >
          
          </a>

         
         
         
        </div>
      </form>



</div>

</div>



    </div>
    
    
    </div>
  );
}

export default page;
