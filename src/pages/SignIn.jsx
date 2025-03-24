
import { BackgroundBoxesDemo } from "../components/Background/background";
import { LoginForm } from "../components/loginForm";

const SignIn = () => {
  const handleLogin = (credentials) => {
    console.log("Login submitted:", credentials);
  };

  return (

    <>
    <BackgroundBoxesDemo >

    <LoginForm onSubmit={handleLogin} />
    </BackgroundBoxesDemo>
    </>
  );
};

export default SignIn;
