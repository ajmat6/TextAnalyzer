import React,{useState} from 'react'

export default function About(props) {
    const myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#282c34' : 'white'
    }
    
    //Below code is of Dark Mode in a particular section that you had before:
    // const [myStyle, setmyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black',
    //     borderRadius: '15px'
    // });
    // const [buttonState, setbuttonState] = useState("Enable Light Mode");
    // const EnableDarkMode = (e) => {
    //     e.preventDefault();
    //     if(myStyle.color === 'white')
    //     {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             borderRadius: '15px'
    //         })

    //         setbuttonState("Enable Dark Mode");
    //     }

    //     else
    //     {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             borderRadius: '15px'
    //         })
    //         setbuttonState("Enable Light Mode");
    //     }
    // }

  return (
    <div className="container my-5" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>

        {/* Below is for Dark mode in a particular Section */}
        {/* <div className="container my-3">
            <button type="button" onClick={EnableDarkMode} className="btn btn-dark my-3">{buttonState}</button>
        </div> */}
    </div>
  )
}
