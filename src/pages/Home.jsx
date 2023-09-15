import "../App.css"

export default function Home() {
  return (
    <>
      <main>

        <div className="main-cupcake-one"></div>

        <div className="main-content">
          <h1>100% <br /> Gluten free <br /> Goodness</h1>
          <a href="">Order Now</a>
        </div>

        <div className="main-cupcake-two"></div>

        <div className="main-info">
          <h2>Get more than just cupcakes!</h2>
          <p>We pride ourselves on making the best tasting  gluten-free cupcakes possible.</p>
        </div>

        <div className="main-cupcake-three"></div>

        <div className="main-cupcake-background"></div>
      </main>

      <section className="learn-more-section">
        <div className="learn-more-section-background"></div>
        <section className="learn-more-section-content">
          <h2>Made with love and care, our gluten-free cupcakes not only look great but also taste amazing. Each one is meticulously crafted to order in our dedicated kitchen</h2>
          <p>At Cupcaked, we believe in the importance of delivering pure joy through delicious, wholesome gluten-free treats. Our cupcakes are crafted with care and passion to ensure they are just as good as those made with traditional ingredients. What sets us apart is our commitment to using only natural, non-GMO ingredients, and our dedication to making sure our cakes are free from additives or preservatives.</p>
          <a href="">Learn More</a>
        </section>
      </section>


      <section className="cupcake-section-collection">
        <div className="cupcake-collection-info">
          <h2>Discover the magic of our gluten-free cupcakes! Our creations are a delightful fusion of flavors and artistry, sure to please any palate. From zesty lemon to velvety red velvet, there's a cupcake for every taste preference.</h2>
        </div>



        <div className="cupcake-collection">
          <div className="cupcake-one-container">
            <div className="cupcake-one"></div>
            <h3>Sprinkle Surprise</h3>
          </div>

          <div className="cupcake-two-container">
            <div className="cupcake-two"></div>
            <h3>Super Oreo</h3>
          </div>

          <div className="cupcake-three-container">
            <div className="cupcake-three"></div>
            <h3>Choco mint</h3>
          </div>

          <div className="cupcake-four-container">
            <div className="cupcake-four"></div>
            <h3>Butterbear</h3>
          </div>
        </div>

        <div className="cupcake-background-blue"></div>

        <div className="cupcake-shop">
          <a href="">Go To Shop</a>
        </div>

        <div className="cupcake-background-red"></div>
      </section>
    </>
  )
}