import React from "react";
import "./App.css";
import Store from "./Store";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Reviews from "./components/Reviews";
import { decorate, observable, action, computed } from "mobx";

decorate(Store, {
  reviewList: observable,
  addReview: action,
  averageScore: computed,
  reviewCount: computed
});

const reviewStore = new Store();

function App() {
  return (
    <div className="App">
      <Form store={reviewStore} />
      <Dashboard store={reviewStore} />
      <Reviews store={reviewStore} />
    </div>
  );
}

export default App;
