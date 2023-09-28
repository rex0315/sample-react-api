<<<<<<< HEAD
//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div>
      <ChakraProvider>
        <Provider store={store}>
          <QueryClientProvider client={client}>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </Router>
          </QueryClientProvider>
        </Provider>
      </ChakraProvider>
    </div>
  );
}

export default App;
=======
>>>>>>> origin/main
