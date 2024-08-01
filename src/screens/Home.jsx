import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div><Carousel/></div>
      <div className="m-3 ">
        <Card/>
        <Card/>
        <Card/>
        <Card/></div>
      <div><Footer/></div>
    </>
  );
}
