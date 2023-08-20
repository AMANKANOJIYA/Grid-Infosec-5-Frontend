"use client";

import React from "react";
import { useState } from "react";

interface data {
  id: number;
  logline: string;
  problem: string;
  probsol: string;
}

function Model({ showModal, setShowModal, activeData }: any) {
  if (!showModal) {
    return null;
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modalproblem">Problem: {activeData.problem}</div>
      <div className="modallogline">{activeData.logline}</div>
      <div className="modalprobsol">
        <b>Solution:</b> {activeData.probsol}
      </div>
      <div className="modalclose" onClick={closeModal}>
        Close
      </div>
    </div>
  );
}

export default function Output() {
  const [showModal, setShowModal] = useState(true);
  const [activeData, setActiveData] = useState<data>(data[0]);
  const openModel = (id: any) => {
    setShowModal(true);
    setActiveData(data.filter((item: any) => item.id === id)[0]);
  };
  return (
    <>
      <div className={showModal ? "outputpage" : ""}>
        <div className="navbar">
          <img src="/flipkart.png" alt="Logo" className="logoimage" />
        </div>
        <div className="sectionoutput">
          {data.map((item: any) => {
            return (
              <div
                className="card"
                key={item.id}
                onClick={() => openModel(item.id)}
              >
                <div className="logline">{item.logline}</div>
                <div className="problem">{item.problem}</div>
                <div className="probsol">{item.probsol}</div>
                <div className="showmore">Show more ...</div>
              </div>
            );
          })}
        </div>
      </div>
      <Model
        showModal={showModal}
        setShowModal={setShowModal}
        activeData={activeData}
      />
    </>
  );
}
