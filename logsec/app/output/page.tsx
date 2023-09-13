"use client";

import React from "react";
import { useState } from "react";

interface data {
  id: number;
  logline: string;
  problem: string;
  probsol: any;
}

const data = [
  {
    id: 1,
    logline:
      "Aug 21 17:40:15 SSHServer sshd[4567]: Failed password for invalid user webadmin from 123.45.67.89 port 54321 ssh2",
    problem:
      "Failed SSH login attempt for invalid user 'webadmin' from IP '123.45.67.89', suggesting an attempt to exploit a common username.",
    probsol: [
      "1. Implement automatic IP blocking for repeated failed login attempts.",
      "2. Review firewall settings and limit SSH access to specific IPs.",
      "3. Disable or rename common default usernames to deter attackers.",
      "4. Educate users about secure username practices and encourage strong passwords.",
    ],
  },
  {
    id: 2,
    logline:
      " Aug 21 13:05:40 SSHServer sshd[8765]: Failed password for invalid user attacker from 123.45.67.89 port 54321 ssh2consectetur adipisicing elit. Quod, sint.",
    problem:
      "Failed SSH login attempt for invalid user 'attacker' from IP '123.45.67.89', suggesting a possible brute-force attack.",
    probsol: [
      "1. Implement automatic IP blocking for repeated failed login attempts.",
      "2. Review firewall settings and limit SSH access to specific IPs.",
      "3. Configure SSH to use a non-standard port to reduce exposure to automated scans.",
      "4. Implement network intrusion detection systems (NIDS) to identify and respond to scanning attempts.",
    ],
  },
  {
    id: 3,
    logline:
      "Aug 20 15:45:22 ServerXYZ sshd[12345]: Failed password for root from 192.168.1.200 port 43210 ssh2 ",
    problem:
      "Successful SSH login for 'admin' with public key from IP '203.128.12.34', indicating privileged access.",
    probsol: [
      "1. Audit 'admin' account's activity for any unauthorized actions.",
      "2. Review authorized public keys and user permissions.",
      "3. Monitor privileged SSH sessions and implement session recording.",
      "4. Regularly update SSH keys, disable unused keys, and enforce key rotation.",
    ],
  },
  {
    id: 4,
    logline:
      "Aug 21 18:20:10 SSHServer sshd[5678]: Failed password for user1 from 123.45.67.89 port 54321 ssh2",
    problem:
      "Failed SSH login attempt for 'user1' from IP '123.45.67.89', indicating a potential weak password vulnerability",
    probsol: [
      "1.	Promptly change the password for 'user1' to a strong and complex one.",
      "2. Educate users about using strong passwords and implementing password policies.",
      "3. Implement multi-factor authentication (MFA) to add an extra layer of security.",
    ],
  },
];

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
        <b>Solution:</b>
        {activeData.probsol.map((line: any, index: number) => {
          return <div key={index}>{line}</div>;
        })}
      </div>
      <div className="modalclose" onClick={closeModal}>
        Close
      </div>
    </div>
  );
}

export default function Output() {
  const [showModal, setShowModal] = useState(false);
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
                <div className="probsol">
                  {item.probsol.map((line: any, index: number) => {
                    return <div key={index}>{line}</div>;
                  })}
                </div>
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
