import heroImage from "@/assets/hero-gifts.jpg";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful gift boxes with roses and hearts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 dark:bg-background/85" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <span className="inline-block text-5xl mb-4 animate-float">💝</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-foreground leading-tight">
          Love, Delivered{" "}
          <span className="text-primary">Beautifully</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Premium & personalized gifts for every occasion — crafted with care, wrapped with love
        </p>
        <a
          href="#products"
          className="inline-block gradient-cta text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-lg glow-shadow hover:opacity-90 transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Explore Gifts ✨
        </a>
      </div>
    </section>
  );
};

export default Hero;
