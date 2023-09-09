import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="absolute inset-x-0 top-0">
        <div className="container py-5 text-white">
            <div className="flex justify-between items-center">
                <Link to="/" className="font-extrabold text-3xl">
                    LOGO<span className="text-cyan-500">.</span>
                </Link>
                <ul className="flex gap-5 font-medium">
                    <li><Link to="/" className="hover:text-cyan-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-cyan-300">About</Link></li>
                    <li><Link to="/products" className="hover:text-cyan-300">Products</Link></li>
                    <li><Link to="/services" className="hover:text-cyan-300">Services</Link></li>
                </ul>
                <Link to="/contact" className="px-6 py-2 bg-cyan-500 font-medium rounded-full flex gap-3 items-center">
                    <svg className="h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>Contact Us
                </Link>
            </div>
        </div>
    </section>

    // <header>
    //   <div className="container py-4 flex justify-between items-center">
    //     <Link to="/" className="font-bold text-5xl">
    //       LOGO <span className="text-blue-500">.</span>
    //     </Link>
    //     <ul className="flex gap-5">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </header>
  );
}

export default Header;
