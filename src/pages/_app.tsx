import MainWrapper from "@/components/MainWrapper";
import NavBar from "@/components/NavBar";
import { wrapper } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <MainWrapper>
        <NavBar>
          <Component {...props.pageProps} />
        </NavBar>
      </MainWrapper>
    </Provider>
  );
}

export default App;
