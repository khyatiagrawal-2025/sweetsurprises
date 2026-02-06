const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="py-12 sm:py-20 gradient-romantic text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Made with <span className="heart-pulse">💖</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Every gift tells a story. Thank you for choosing GlowGift ✨
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 GlowGift Shop. All rights reserved. 💝
        </p>
      </footer>
    </>
  );
};

export default Footer;
