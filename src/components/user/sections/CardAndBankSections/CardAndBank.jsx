import React from "react";
import Cards from "./Cards";
import Banks from "./Banks";

function CardAndBank() {
  return (
    <section id="payment" className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Cards & Bank Accounts</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <Cards />
          <Banks />
        </div>
      </div>
    </section>
  );
}

export default CardAndBank;
