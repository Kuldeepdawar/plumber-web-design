import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import { Quote } from "./Quote";
import { Services } from "./Services";
import { QuoteBanner } from "./QuoteBanner";
import { BrandsIncuding } from "./BrandsIncuding";
import { WhatWeDeliver } from "./WhatWeDeliver";
import { Footer } from "./Footer";
import { BookPlumber } from "./BookPlumber";
import { ClientsSay } from "./ClientsSay";
import { PayLater } from "./PayLater";
import { PlumbingExample } from "./PlumbingExample";
import { PlumberSydney } from "./PlumberSydney";

function Main() {
  return (
    <>
      <Header />
      <Banner />
      <Quote />
      <Services />
      <BrandsIncuding />
      <QuoteBanner />
      <WhatWeDeliver />
      <PayLater />
      <PlumberSydney />
      <PlumbingExample />
      <ClientsSay />
      <BookPlumber />
      <Footer />
      </>
  );
}

export default Main;
