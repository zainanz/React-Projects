import LandingPage from "./landingpage";

function LandingSection() {
  return (
    <section
      className="flex"
      style={{
        backgroundImage: 'url("./background.svg")',
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <LandingPage />
    </section>
  );
}

export default LandingSection;
