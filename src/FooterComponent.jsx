import Orders from "./OrderComponent";

function Footer() {
  const hour = new Date().getHours();
  const openTime = 12;
  const closeTime = 22;

  const show = hour >= openTime && hour <= closeTime;

  //   if (hour >= openTime && hour <= closeTime) alert("We're Opened");
  //   else alert("We're Close");

  return (
    <footer className="footer">
      {show ? (
        <Orders close={closeTime} />
      ) : (
        <p>
          We're hppay to Welcome you between {openTime}:00 until {closeTime}:00
        </p>
      )}
    </footer>
  );
}

export default Footer;
