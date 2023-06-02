import { MdDiscount, MdLocalShipping, MdPayments } from "react-icons/md";
import { MdLabelImportant } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsAwardFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import CustomStyle from './../CSSfile/FoodProductStyle.module.css'
const AboutEcommarse = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-3">
            {/* First Shipping */}
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg ,#0C134F, #643843)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  color: "white",
                }}
                className={`shadow-xl card ${CustomStyle.tradingRight}`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <span>
                      <MdLocalShipping size={35}></MdLocalShipping>
                    </span>
                    <div className="ml-4">
                      <h2 className="card-title">First Shipping</h2>
                      <p>Easy Returns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Genuine Products */}
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg ,#0C134F, #643843)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  color: "white",
                }}
                className={`shadow-xl card ${CustomStyle.tradingRight}`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <span>
                      <MdLabelImportant size={35}></MdLabelImportant>
                    </span>
                    <div className="ml-4">
                      <h2 className="card-title">Genuine Products</h2>
                      <p>Brand Warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Easy Payment */}
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg ,#0C134F, #643843)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  color: "white",
                }}
                className={`shadow-xl card ${CustomStyle.tradingRight}`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <span>
                      <BsCurrencyDollar size={35}></BsCurrencyDollar>
                    </span>
                    <div className="ml-4">
                      <h2 className="card-title">Easy Payments</h2>
                      <p>Pay Online & COD Discounts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 30 years experience */}
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg ,#0C134F, #643843)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  color: "white",
                }}
                className={`shadow-xl card ${CustomStyle.tradingRight}`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <span>
                      <BsAwardFill size={35}></BsAwardFill>
                    </span>
                    <div className="ml-4">
                      <h2 className="card-title">30 Years Experience</h2>
                      <p>Trusted Since 1992</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Happiness */}
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg ,#0C134F, #643843)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  color: "white",
                }}
                className={`shadow-xl card ${CustomStyle.tradingRight}`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <span>
                      <MdSupportAgent size={35}></MdSupportAgent>
                    </span>
                    <div className="ml-4">
                      <h2 className="card-title">Customer Happiness</h2>
                      <p>Mon-Sat (All Day)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pay In 4 Installments */}
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg ,#0C134F, #643843)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  color: "white",
                }}
                className={`shadow-xl card ${CustomStyle.tradingRight}`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <span>
                      <MdPayments size={35}></MdPayments>
                    </span>
                    <div className="ml-4">
                      <h2 className="card-title">Pay In 4 Installments</h2>
                      <p>Interest Free, No Charges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Discounts */}
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg ,#0C134F, #643843)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  color: "white",
                }}
                className={`shadow-xl card ${CustomStyle.tradingRight}`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <span>
                      <MdDiscount size={35}></MdDiscount>
                    </span>
                    <div className="ml-4">
                      <h2 className="card-title">Best Discounts</h2>
                      <p>Low Price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VAT Refund */}
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg ,#0C134F, #643843)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  color: "white",
                }}
                className={`shadow-xl card ${CustomStyle.tradingRight}`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <span>
                      <FaPlane size={35}></FaPlane>
                    </span>
                    <div className="ml-4">
                      <h2 className="card-title">VAT Refund</h2>
                      <p>For Tourists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default AboutEcommarse;