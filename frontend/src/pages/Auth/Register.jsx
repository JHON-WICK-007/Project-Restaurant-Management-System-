import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Auth.css";

const Register = () => {
  return (
    <>
      <Navbar />

      <div className="auth-box">
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </div>

      <Footer />
    </>
  );
};

export default Register;