import { useState } from "react"
import "./Login.css";
import log from "./oyo.png";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("+91")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Phone number submitted:", countryCode + phoneNumber)
  }

  return (
    <div className="login-container">
      <header className="header">
        <div className="logo"><img src={log} alt="oyo" className="log"/></div>
        <div className="header-text">Hotels and homes across 800 cities, 24+ countries</div>
      </header>

      <main className="main-content">
        <div className="left-section">
          <h1>There's a smarter way to OYO around</h1>
          <p>
            Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our
            many travel partners.
          </p>
        </div>

        <div className="form-section">
          <div className="offer-banner">
            
            Sign up & Get ₹500 OYO Money
          </div>

          <div className="form-container">
            <h2>Login / Signup</h2>
            <p>Please enter your phone number to continue</p>

            <form onSubmit={handleSubmit}>
              <div className="phone-input">
                <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="country-code">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <button type="submit" className="verify-button">
                Verify Number
              </button>
            </form>

            <div className="alternative-login">
              <p>
                Prefer to Sign in with password instead?{" "}
                <div href="#" className="red-link">
                  Click here
                </div>
              </p>
            </div>

            <div className="signin-options">
              <p>Or sign in as</p>
              <div className="option-buttons">
                <div href="#" className="option-link">
                  Travel Agent <span>→</span>
                </div>
                <div href="#" className="option-link">
                  Corporate <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginForm

