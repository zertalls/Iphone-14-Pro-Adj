import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { Colors } from "./sections/Colors/Colors";
import { Feedback } from "./sections/Feedback/Feedback";
import { Main } from "./sections/Main/Main";
import { New } from "./sections/New/New";


export const Iphone = () => {
  return (
    <section>
      <Navbar />
      <Main />
      <New/>
      <Colors/>
      <Feedback/>
      <Footer/>
    </section>
  );
};
