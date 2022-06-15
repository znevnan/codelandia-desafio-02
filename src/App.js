import { Fragment } from "react";
import { ContentWrapper } from "./App.style";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";

function App() {
  return (
    <Fragment>
      <ContentWrapper>
        <Header />
        <Results />
      </ContentWrapper>
      <Footer />
    </Fragment>
  );
}

export default App;
