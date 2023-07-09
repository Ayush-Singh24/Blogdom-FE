import { useEffect, useState } from "react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const jumpToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  if (!isVisible) {
    return <></>;
  }

  return (
    <button
      className="fixed left-[3.2rem] bottom-[6rem] bg-color-secondary rounded-full p-1 transition-all z-50 border-white border-2"
      onClick={jumpToTop}
    >
      <img
        src="icons/arrow-up.svg"
        alt="up"
        className="invert p-4 transition-all hover:-translate-y-2"
      />
    </button>
  );
}
