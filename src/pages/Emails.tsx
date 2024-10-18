import React from "react";
import Container from "../components/container/Container";
import FilterBar from "../components/filter/FilterBar";
import EmailList from "../components/email-list/EmailList";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination/Pagination";

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
