import "../App.css"

export default function About() {
  return (
    <section className="about-page-container">
      <div className="about-page-chef-image"></div>
      <div className="about-page-heading">
        <h1>A sweet, gluten-free treat for any occasion</h1>
      </div>
      <div className="about-page-info">
        <p>The story of Cupcaked began when our head chef/founder, <span>Clairine
          Ng</span>, decided to take a leap of faith and open a cakery in the heart of
          Singapore. Inspired by her sister who struggled with Celiac disease,
          Clairine decided to ensure all of our products are gluten-free. As
          soon as we opened, we knew we were onto something unique.
        </p>

        <p>Our gluten-free cupcakes are made with healthy coconut flour,
          almonds, flax seed, and other ingredients to create the perfect treat
          for you.</p>
      </div>
    </section>
  )
}