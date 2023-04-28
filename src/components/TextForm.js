import React, {useState} from 'react' //Importing useState hook from the react.
// import PropTypes from 'prop-types'



export default function TextForm(props) {
  const [text, settext] = useState("Enter the text Here");
  // settext("ajmat kathat");

  const upperCase = (e) => {
    e.preventDefault();
    console.log("Convert to UpperCase clicked");
    settext(text.toUpperCase());
    //showing the alert in Each of the functions
    props.showalert("Converted To Upper Case", "success");
  }

  const lowerCase = (e) => {
    e.preventDefault();
    settext(text.toLowerCase());
    props.showalert("Converted To Lower Case", "success");
  }

  const speak = (e) => {
    e.preventDefault();
    const voiceTaken = new SpeechSynthesisUtterance();
    voiceTaken.text = text;
    window.speechSynthesis.speak(voiceTaken);
    props.showalert("Speaking what you Entered", "success");
  }

  const copy = (e) => {
    e.preventDefault();
    let text = document.getElementById('exampleFormControlTextarea1').innerHTML;
    navigator.clipboard.writeText(text);
    props.showalert("Text Copied", "success");
  }

  const HandleExtraSpaces =  (e) => {
    e.preventDefault();
    let newtext = text.split(/[ ]+/); //Using regex
    settext(newtext.join(" "));
    props.showalert("Extra Spaces Removed", "success");
  }

  const handleOnChange = (e) => {
    console.log("Handle on change");
    settext(e.target.value);
  }

  const textareaClick = (e) => {
    settext(" ");
  }

  return (
    <>
    {/* In below style one {} is for writing Js and other {} is for writing an object as you can define many styles here */}
    {/* Ternary Operator is used. */}
    <div className="container my-5" style={{color: props.mode === 'dark'?'white':'black'}}>
      <form>
          <h2>{props.heading}</h2>
          <div className="mb-3">
              {/* in style we are changing the color of the textarea on the change of the mode. */}
              <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode === 'dark'?'#282c34':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onClick={textareaClick}  onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={upperCase}>Convert to UpperCase</button>
          <button type="submit" className="btn btn-primary mx-3" onClick={lowerCase}>Convert to LowerCase</button>
          <button type="submit" className="btn btn-primary mx-3" onClick={speak}>Play Sound of Entered Text</button>
          <button type="submit" className="btn btn-primary mx-3" onClick={copy}>Copy the Entered Text</button>
          <button type="submit" className="btn btn-primary mx-3" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
      </form>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Entered Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characers</p>
      <p>The Entered Text can be read in {text.split(" ").length * 0.008} Minutes</p>
      <h2>Preview</h2>
      {/* Preview basic js logic */}
      <p>{text.length>1?text:"Enter some Text to Preview it!"}</p>
    </div>
    </>
  )
}
