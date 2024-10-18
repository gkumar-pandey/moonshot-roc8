import { Container, EmailList, FilterBar, Pagination } from "../components";

const Emails = () => {
  return (
    <main className="bg-[var(--bg-color)] w-full min-h-screen">
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

export default Emails;
