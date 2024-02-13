import { useState } from "react";
import logo from "../../assets/logo.png";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
import card4 from "../../assets/card-4.png";
import name from "../../assets/fortune-teller.png";
import tia from "../../assets/tia.png";
import { useNavigate } from 'react-router-dom';


const Fortune = () => {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.code.value);
        e.target.code.value = '';
        navigate("/fortune-view");
        // const pastedUrl = event.taget.value;
        // setUrl(pastedUrl);
        // const pasteURL = 'https://xri.com.bd';

        // // Redirect to the pasted URL
        // window.location.href = pasteURL;
    };
    return (
        <div>
           
                <section className="relative bg-[#F38AAA] bg-[url('/src/assets/bg-2.png')] bg-cover bg-center bg-no-repeat bgbg bg-fixed h-screen">
                <form onSubmit={handleChange} className="bg-transparent">
                <input type="text" name="code" className="bg-transparent text-white focus:border-0 focus:outline-none hover:border-0 hover:outline-none" autoFocus autoComplete="off"/>
                
            </form>
                    <div className=" mx-auto max-w-screen-xl px-4  flex h-screen items-center">
                    <div className="mx-auto  max-w-7xl text-center ">
                        <div className="relative mx-auto  mt-20">
                        <img
                            src={tia}
                            className="w-1/4 mx-auto emad absolute -top-28 right-[47%] "
                            alt=""
                        />
                        <img src={name} className="w-1/4 mx-auto z-30" alt="brandName" />
                        </div>

                        <div className="relative mx-auto ">
                        <img src={card1} className="w-[20%] mx-auto " alt="Card" />
                        </div>
                    </div>
                    </div>

                    <img
                    src={logo}
                    className=" lg:w-28 md:w-20 w-12 absolute bottom-8 right-12"
                    alt="logo"
                    />
                    
                </section>
                
            
        </div>
    );
};

export default Fortune;