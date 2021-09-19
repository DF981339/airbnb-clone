function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" max-w-[1760px] mx-auto">
      <div className="footer-four-column text-[12px] pt-12 px-6 mobile-bp:px-10 logo-bp:large-padding">
        <section className="footer-section">
          <h5 className="font-bold ">ABOUT</h5>
          <ul className="footer-list">
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li>HotelTonight</li>
            <li>Airbnb for Work</li>
            <li>Careers</li>
          </ul>
        </section>
        <section className="footer-section">
          <h5 className="font-bold ">COMMUNITY</h5>
          <ul className="footer-list">
            <li>Diversity & Belonging</li>
            <li>Against Discrimination</li>
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            <li>Guest Referrals</li>
            <li>Gift cards</li>
            <li>Airbnb.org</li>
          </ul>
        </section>
        <section className="footer-section">
          <h5 className="font-bold ">HOST</h5>
          <ul className="footer-list">
            <li>Host your home</li>
            <li>Host an Online Experience</li>
            <li>Host an Experience</li>
            <li>Responsible hosting</li>
            <li>Resource Center</li>
            <li>Community Center</li>
          </ul>
        </section>
        <section className="footer-section">
          <h5 className="font-bold ">SUPPORT</h5>
          <ul className="footer-list">
            <li>Our COVID-19 Response</li>
            <li>Help Center</li>
            <li>Cancellation options</li>
            <li>Neighborhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </section>
      </div>
      <div className="flex justify-center text-gray-400 pb-6">
        © {year}, Airbnb-Clone
      </div>
    </footer>
  );
}

export default Footer;
