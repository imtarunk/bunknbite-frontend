const TrendingCard = ({ url }: { url: string }) => {
  return (
    <div className="w-[300px] rounded-2xl overflow-hidden shadow-lg my-10">
      <div className="relative">
        <img
          src={url}
          alt="Trending Spot"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-white text-lg font-semibold">
            Top Trending Spots
          </h2>
          <p className="text-white text-sm flex items-center">
            29 Places <span className="ml-1">➜</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
