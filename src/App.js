import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import TodoList from "./components/TodoList/TodoList";
import ImageCarouselContainer from "./components/ImageCarousel/imageCarouselContainer/ImageCarouselContainer";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList />
        <ImageCarouselContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
