"use client";
// import Image from "next/image";
import React from "react";
import { useState } from "react";
import Dropzone from "react-dropzone";
export default function Home() {
  const [logFile, setLogFile] = useState();
  const [secFile, setSecFile] = useState();
  return (
    <>
      <div className="navbar">
        <img src="/flipkart.png" alt="Logo" className="logoimage" />
      </div>
      <div className="section">
        <div className="leftsection">
          <h1>Log Files</h1>
          <Dropzone onDrop={(acceptedFiles: any) => setLogFile(acceptedFiles)}>
            {({ getRootProps, getInputProps }: any) => (
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />

                {logFile ? (
                  <p className="fileuploded">Log File Uploaded Succesfully</p>
                ) : (
                  <>
                    <h1 className="DragVal">Drag File</h1>
                    <p className="Dragtype">.log, .csv, .pdf, .txt</p>
                  </>
                )}
              </div>
            )}
          </Dropzone>
        </div>
        <div className="rightsection">
          <h1>Security Policy</h1>
          <Dropzone onDrop={(acceptedFile: any) => setSecFile(acceptedFile)}>
            {({ getRootProps, getInputProps }: any) => (
              <div
                // className="DropZone"
                {...getRootProps({ className: "dropzone" })}
              >
                <input {...getInputProps()} />
                {secFile ? (
                  <p className="fileuploded">
                    Security File Uploaded Succesfully
                  </p>
                ) : (
                  <>
                    <h1 className="DragVal">Drag File</h1>
                    <p className="Dragtype">.csv, .pdf, .txt</p>
                  </>
                )}
              </div>
            )}
          </Dropzone>
        </div>
      </div>
      <h3 className="submit">Submit</h3>
    </>
  );
}
