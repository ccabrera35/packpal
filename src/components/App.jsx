import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
import BackgroundHeading from "./BackgroundHeading";
import ItemsContextProvider from "../contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
