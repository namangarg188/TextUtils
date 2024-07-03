import React,{useState} from 'react'


export default function TextForm(props) {
    const handleupclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("converted to uppercase","success");
    }
    const handleloclick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showalert("converted to lowercase","success")
    }
    const handleclearclick=()=>{
        let newText='';
        setText(newText)
        props.showalert("clear data","success")
    }
    const handlecopyclick=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("copy to clipboard","success")

    }
    const handleonchange=(capital)=>{
        setText(capital.target.value);
    }
    const [text, setText]=useState('');
    return (
        <>
        <div className='container'>
            <div className="mb-3">
            <h1 style={{color:props.changemode==='light'?'#042743':'white'}}>{props.heading}</h1> 
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.changemode==='light'?'white':'grey',color:props.changemode==='light'?'#042743':'white'}} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleloclick}>convert to Lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy Text</button>
            </div>
        </div>
        <div className='container my-3' style={{color:props.changemode==='light'?'#042743':'white'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words {text.length} character</p>
            <p>{0.008*text.split(" ").length}</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"enter something here to preview"}</p>
        </div>
        </>
    )
}
