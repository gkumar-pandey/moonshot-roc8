import { Navbar } from "../../components/dataDashboard";
import {
  Container,
  EmailList,
  FilterBar,
  Pagination,
} from "../../components/EmailApp";

const EmailApp = () => {
  return (
    <main className="bg-[var(--bg-color)] w-full min-h-screen">
      <Navbar />
      <Container>
        <section className="flex items-center justify-between">
          <FilterBar />
          <Pagination />
        </section>
        <EmailList />
      </Container>
    </main>
  );
};

export default EmailApp;
