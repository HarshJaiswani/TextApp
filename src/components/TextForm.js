import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TextForm(props) {
  let edit;
  const [text, setText] = useState("");
  const [spell, setspell] = useState("false");
  function wordsCounter() {
    return text
      .toString()
      .split(/\s+/)
      .filter((el) => {
        return el !== null && el !== "";
      });
  }

  const handleUpClick = () => {
    edit = text.toUpperCase();
    setText(edit);
    toast.success("Converted to Uppercase", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    edit = text.toLowerCase();
    setText(edit);
    toast.success("Converted to Lowercase", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleClearClick = () => {
    edit = "";
    setText(edit);
    toast.success("Text Cleared", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleEmClick = () => {
    edit = text
      .toString()
      .split(" ")
      .filter((el) => {
        return el.includes("@") && el.includes(".");
      });
    setText(edit);
    toast.success("Emails Extracted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleCopyClick = () => {
    document.querySelector("#myArea").select();
    navigator.clipboard.writeText(text);
    toast.success("Copy to Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleExtraSpaces = () => {
    edit = text.toString().split(/[ ]+/);
    setText(edit.join(" "));
    toast.success("Removed Extra Spaces", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleSpellCheck = () => {
    if (spell === "false") {
      setspell("true");
      toast.success("Spell Check Enabled", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setspell("false");
      toast.success("Spell Check Disabled", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h1>Operations</h1>
        <button
          disabled={text.toString().length === 0}
          className="special"
          onClick={handleCopyClick}
        >
          Copy to clipboard <IoCopyOutline style={{fontSize: '1.2rem',margin: "0px 10px"}} />
        </button>
        <button
          disabled={text.toString().length === 0}
          className=""
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.toString().length === 0}
          className=""
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.toString().length === 0}
          className=""
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.toString().length === 0}
          className=""
          onClick={handleEmClick}
        >
          Extract Email
        </button>
        <button
          disabled={text.toString().length === 0}
          className=""
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.toString().length === 0}
          className=""
          onClick={handleSpellCheck}
        >
          Spell Check
        </button>
      </div>
      <div className="textArea">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <div className="writeText">
          <h1>Get your Text good cloths</h1>
          <textarea
            className=""
            value={text}
            id="myArea"
            onChange={handleOnChange}
            rows="5"
            spellCheck={spell}
          ></textarea>
        </div>
        <div className="showText">
          <div>
            <h1>Your Text Summary</h1>
            <li>
              <b>{wordsCounter().length}</b> words and <b>{text.length}</b>{" "}
              characters
            </li>
            <li>
              <b>{0.008 * wordsCounter().length}</b> minutes read
            </li>
          </div>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
        </div>
      </div>
    </div>
  );
}
