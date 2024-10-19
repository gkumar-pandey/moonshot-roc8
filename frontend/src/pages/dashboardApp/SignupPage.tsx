import { Navbar } from "../../components/dataDashboard";
import SignupForm from "../../components/dataDashboard/Form/SignupForm";

const SignupPage = () => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-[var(--bg-color)]">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 h-full border">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
