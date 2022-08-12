import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <div
        style={{
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div className="col span-1-of-3">
          <h3>
            <i class="bi bi-geo-alt-fill"></i> Horizont
          </h3>

          <p>
            Lokacioni i Restaurant “HORIZONT” <br />
            është në rrugën Shpetim Bojku-Tabje, Pejë
          </p>
        </div>
        <div className="col span-1-of-3">
          <h3>Orari i Punës</h3>
          <ul>
            <ul>E Hënë: 09:00-23:00</ul>
            <ul>E Martë: 09:00-23:00</ul>
            <ul>E Mërkurë: 09:00-23:00</ul>
            <ul>E Enjte: 09:00-23:00</ul>
            <ul>E Premte: 09:00-23:00</ul>
            <ul>E Shtune: 09:00-23:00</ul>
            <ul>E Dielë: 09:00-23:00</ul>
            <br />
          </ul>
        </div>
        <div class="col-md-6 col-lg-3">
          <h3>Instagram</h3>
        </div>
      </div>
    </div>
  );
}
