import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/EmailApp";
import { Navbar } from "../components/dataDashboard";

const AppCard = ({
  link,
  text,
  url,
}: {
  link: string;
  text: string;
  url: string;
}) => {
  return (
    <Link to={link}>
      <div className="p-5 bg-white border border-md ">
        <img loading="lazy" src={url} />
        <h2 className="text-xl font-medium">{text}</h2>
      </div>
    </Link>
  );
};

const HomePage = () => {
  const dataDashboardApp =
    "https://res.cloudinary.com/dlykup1dh/image/upload/v1729516159/Vite_React_TS_makdjs.png";
  const emailApp =
    "https://res.cloudinary.com/dlykup1dh/image/upload/v1729516174/Vite_React_TS_1_zlrhtn.png";
  return (
    <div className="bg-[var(--bg-color)] min-h-dvh">
      <Navbar />
      <Container>
        <div className="flex flex-row gap-6 my-5">
          <AppCard link={"/email"} text={"Q1: Email App"} url={emailApp} />
          <AppCard
            link={"/dashboard"}
            text={"Q2: Data Dashboard"}
            url={dataDashboardApp}
          />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
