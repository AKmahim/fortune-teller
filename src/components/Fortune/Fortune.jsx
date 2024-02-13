import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
import card4 from "../../assets/card-4.png";
import card5 from "../../assets/card-5.png";
import card6 from "../../assets/card-6.png";
import card7 from "../../assets/card-7.png";
import card8 from "/card-1.png";
import card9 from "../../assets/card-9.png";
import card10 from "../../assets/card-10.png";
import name from "../../assets/fortune-teller.png";
import tia from "../../assets/tia.png";
import { useNavigate } from "react-router-dom";

const Fortune = () => {
  const [url, setUrl] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate();
  const [fortuneURL, setFortuneURL] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardImageNumber, setCardImageNumber] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.code.value);
    e.target.code.value = "";
    navigate("/fortune-view");
    // const pastedUrl = event.taget.value;
    // setUrl(pastedUrl);
    // const pasteURL = 'https://xri.com.bd';

    // // Redirect to the pasted URL
    // window.location.href = pasteURL;
  };
  useEffect(() => {
    fetch("https://sunquick-scoreboard.xri.com.bd/fortune-teller/last-user")
      .then((res) => res.json())
      .then((data) => {
        setCardNumber(data.card);
        setFortuneURL(`/fortune-view?q=${cardNumber}`);
        setCardImage(`../../assets/card-${cardNumber}.png`);
        setCardImageNumber(cardNumber);
      });
    console.log(cardNumber, fortuneURL);
  }, [cardNumber, fortuneURL, cardImage]);
  return (
    <div>
      <section className="relative bg-[#F38AAA] bg-[url('/src/assets/bg-2.png')] bg-cover bg-center bg-no-repeat bgbg bg-fixed h-screen overflow-hidden">
        <form onSubmit={handleChange} className="bg-transparent">
          <input
            type="text"
            name="code"
            className="bg-transparent text-white focus:border-0 focus:outline-none hover:border-0 hover:outline-none"
            autoFocus
            autoComplete="off"
          />
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

            {console.log(cardImageNumber)}
            <div className="relative mx-auto mt-2">
              {cardImageNumber ? (
                <img
                  src={`/card-${cardImageNumber}.png`}
                  className="w-[20%] mx-auto "
                  alt="Card"
                />
              ) : (
                <div
                  role="status"
                  className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                >
                  <div className="flex items-center justify-center w-[20%] xl:h-96 lg:h-80 md:h-60 h-40 mx-auto bg-gray-300 rounded  dark:bg-gray-700">
                    <svg
                      className="w-60 h-40 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            {/* <div className="relative mx-auto ">
              {cardImageNumber ? (
                <img
                  src={`/card-${cardImageNumber}.png`}
                  className="w-[20%] mx-auto "
                  alt="Card"
                />
              ) : (
                <div
                  role="status"
                  className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                >
                  <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>

                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div> */}
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
