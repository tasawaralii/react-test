import React, {useState} from 'react'

export default function TextBox({heading}) {
    const [text,setText] = useState('  **Example Text**--');

    const changetext = (event)=> {
        setText(event.target.value);
    }
    const convertToUpper = ()=> {
        setText(text.toUpperCase());
    }
    const convertToLower = ()=> {
        setText(text.toLowerCase());
    }
    const convertToSlug = ()=> {
        let slug = text;
        slug = slug.trim();
        slug = slug.replace(/(-)\1+/,'-')
        slug = slug.toLowerCase();
        slug = slug.replaceAll(' ','-');
        slug = slug.replace(/[^a-zA-z-]/g,"");
        setText(slug);
    }
  return (
    <>
    <h2>{heading}</h2>
    <div> 
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={changetext} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertToUpper}>UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={convertToLower}>LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={convertToSlug}>Slugify</button>
    </div>
    <div className="container mt-2">
        <p>You have {text ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
    </div>
    </>
  )
}
