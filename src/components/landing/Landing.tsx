import Hero from "../hero/Hero";
import Body from "../body/Body";
import  Footer  from "../footer/footer.tsx";

function Landing() {
  return (
    <div className="mt-16 md:flex md:flex-col ">
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default Landing;