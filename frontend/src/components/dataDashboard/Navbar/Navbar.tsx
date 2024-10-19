import { Container } from "../../EmailApp";

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-md">
      <Container>
        <nav className="flex flex-row items-center justify-between w-full p-4">
          <h2 className="text-2xl font-bold ">Roc8 Moonshot🚀</h2>
          <button className="px-3 py-1 font-medium text-white bg-red-600 rounded-lg cursor-pointer">
            Logout
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
