import { Navbar } from "../../components/dataDashboard";
import LoginForm from "../../components/dataDashboard/Form/LoginForm";
import { Container } from "../../components/EmailApp";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-[var(--bg-color)] ">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 h-full border">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
