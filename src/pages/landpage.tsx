import CardDemo from "../components/cards-demo-1";
import Hero from "../components/heroElement";
import Navbar from "../components/navbar";

const LandingPage = () => {
  return (
    <div>
      <div>
        <div className="relative flex justify-center">
          {/* Navbar Positioned Over Image */}
          <Navbar />
          <Hero />
          {/* Background Image */}
          <img
            src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?t=st=1740851139~exp=1740854739~hmac=f4c9d5a3230ae8b344f7b9deba0d2e44b10d6f29471eda858218e7249b9452a6&w=2000"
            alt=""
            className="w-full h-[600px] object-cover"
          />
        </div>
        <div className="flex justify-around mx-[20%] p-10">
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
