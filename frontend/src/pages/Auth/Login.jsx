import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Auth.css";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="auth-box">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>  

      <Footer />
    </>

  );
};

export default Login;