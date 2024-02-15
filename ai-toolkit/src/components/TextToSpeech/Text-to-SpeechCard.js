
// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import { useSpeechSynthesis } from 'react-speech-kit';
// import './textToSpeech.css'





// const TextToSpeechCard = () => {

//     const { speak, voices } = useSpeechSynthesis();

//     const [inputText, setInputText] = useState('')

//     const [voiceIndex, setVoiceIndex] = useState(null);

//     const [rate, setRate] = useState(0.1);
//     function handleSpeak() {
//         console.log(voices[voiceIndex]);
//         speak({ text: inputText, rate: rate, voice: voices[voiceIndex] });
//     }

//     return (
//         <Card className="quote-card-view h-600">
//             <Card.Body >
//                 <blockquote className="blockquote mb-0 text-center">
//                     <div className="container mt-3">
//                         <h1 className="mb-4">Convert your Text To speech With <span className="purple">AI</span></h1>

//                         <textarea className="textbox" name="" id="" cols="50" rows="10" placeholder="Enter the text here..." onChange={(e) => setInputText(e.target.value)}></textarea>
//                         <br />
//                         <select className="options" style={{ width: '200px' }} name="" id=""
//                             value={voiceIndex || ''}
//                             onChange={(e) => setVoiceIndex(e.target.value)} >
//                             <option value=""> Default</option>
//                             {voices.map((item, index) => (
//                                 <option key={item.name} value={index} >
//                                     {item.name}
//                                 </option>
//                             ))}

//                         </select>
//                         <div className="range">
//                             <input type="range" min='0.1' max='2' step='0.01' value={rate} onChange={(e) => setRate(e.target.value)} />
//                         </div>
//                         <h3>current speed rate is {rate}</h3>
//                         <button className="sp-btn" onClick={() => handleSpeak()} >Speak</button>


//                     </div>
//                 </blockquote>
//             </Card.Body>
//         </Card>
//     );
// };

// export default TextToSpeechCard;


// gpt code

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useSpeechSynthesis } from 'react-speech-kit';
import './textToSpeech.css';

const TextToSpeechCard = () => {
    const { speak, voices } = useSpeechSynthesis();
    const [inputText, setInputText] = useState('');
    const [voiceIndex, setVoiceIndex] = useState(null);
    const [rate, setRate] = useState(0.1);

    function handleSpeak() {
        speak({ text: inputText, rate: rate, voice: voices[voiceIndex] });
    }

    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0 text-center">
                    <div className="text-to-speech-container">
                        <h1 className="mb-4">Convert your Text To speech With <span className="purple">AI</span></h1>
                        <textarea
                            className="textbox"
                            name=""
                            id=""
                            cols="50"
                            rows="10"
                            placeholder="Enter the text here..."
                            onChange={(e) => setInputText(e.target.value)}
                        ></textarea>
                        <br />
                        <select
                            className="voice-select"
                            name=""
                            id=""
                            value={voiceIndex || ''}
                            onChange={(e) => setVoiceIndex(e.target.value)}
                        >
                            <option value="">Default</option>
                            {voices.map((item, index) => (
                                <option key={item.name} value={index}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <div className="btn-container">
                            <input
                                className="rate-input"
                                type="range"
                                min="0.1"
                                max="2"
                                step="0.01"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                            />

                            <h3 className="speed-rate-text">Current speed rate is {rate}</h3>
                            <button className="speak-button" onClick={handleSpeak}>
                                Speak!
                            </button>
                        </div>

                    </div>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default TextToSpeechCard;
