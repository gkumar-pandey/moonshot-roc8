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
    "https://awesomescreenshot.s3.amazonaws.com/image/3268519/51169810-230aaa055f0427ea3fc15c9daaa9677d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20241020%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241020T083050Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=8d79cb19b169a56f2c3341a261a63f0c54f17525f4aedc06c6cf6da5243255fb";
  const emailApp =
    "https://awesomescreenshot.s3.amazonaws.com/image/3268519/51169825-7652600753019f132e868ea69548a120.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20241020%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241020T083144Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=b275dfc5e3f5c327374995f8802b144b32098bd6d753243b06e1ce143ff36545";
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
