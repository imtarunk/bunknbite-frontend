import AuthForm from "../components/auth";
import TrendingCard from "../components/CustomCard";
import CardDemo from "../components/cards-demo-1";
import Hero from "../components/heroElement";

type LandingPageProps = {
  page: string;
};

const LandingPage: React.FC<LandingPageProps> = ({ page }) => {
  const imgUrl = [
    "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?cs=srgb&dl=pexels-xmtnguyen-699953.jpg&fm=jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20220721/pngtree-spicy-paprika-infused-ramen-on-a-wooden-board-with-rustic-vibes-photo-image_32828502.jpg",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9wJTIwdmlldyUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    "https://rila.de/media/weedesign_images2webp/2000/sushibowlmitraucherlachs.webp",
  ];
  console.log("this is from auth page", page);
  return (
    <div>
      <div className="relative">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?t=st=1740851139~exp=1740854739~hmac=f4c9d5a3230ae8b344f7b9deba0d2e44b10d6f29471eda858218e7249b9452a6&w=2000"
          alt=""
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          {/* Navbar Positioned Over Image */}
          {/* ✅ Pass setPage */}
          <Hero />

          {page === "login" && (
            <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-s z-50">
              <AuthForm />
            </div>
          )}
        </div>

        {/* ✅ Center the Form with Blur Effect */}
      </div>

      <div className="mx-[10%]">
        <div className="flex mt-10 justify-between">
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>

        <div className="py-20">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">
            Collections
          </h1>
          <div className="flex justify-between items-center text-[1.2rem] leading-[1.4] font-light text-[#363636] mb-8">
            <p>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Lucknow, based on trends.
            </p>
            <span className="text-red-500 hover:underline cursor-pointer">
              All Available plans
            </span>
          </div>

          <div className="flex justify-between space-x-4">
            {imgUrl.map((link, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-105"
              >
                <TrendingCard url={link} />
              </div>
            ))}
          </div>
        </div>

        <div className="py-20">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">
            Popular localities in and around Lucknow
          </h1>
          <p className="text-gray-600">
            Discover vibrant neighborhoods and hotspots.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
