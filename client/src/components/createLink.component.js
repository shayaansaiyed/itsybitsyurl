import { useEffect, useState } from 'react';
import axios from 'axios';

function validateURL(url){
    var httpString = "http://";
    var httpsString = "https://";
    return(url.substring(0,7) === httpString || url.substring(0,8) === httpsString);
}

function CreateLink(props){
    const [fullURL, setFullURL] = useState('');
    const [response, setResponse] = useState('');

    const handleURLChange = (e) => {
        setFullURL(e.target.value);
    }

    const handleURLSubmit = (e) => {
        e.preventDefault();

        if(validateURL(fullURL)){
            const newURL = {
                fullLink: fullURL
            }
    
            axios.post('https://fierce-waters-28227.herokuapp.com/add', newURL)
                .then(res => setResponse("Your itsybitsy link: " + res.data))
                .catch(err => setResponse(err));
        } else {
            setResponse("That is not a valid URL");
        }
        
    }

    return(
        <div>
            <form onSubmit={handleURLSubmit}>
                <div class="form-group">
                    <label for="exampleInputPassword1">Enter link to shorten: </label>
                    <input type="text" 
                        class="form-control" 
                        id="URLtoShorten" 
                        placeholder="https://example.com"
                        value={fullURL} 
                        onChange={handleURLChange} />
                    <small>Make sure the link has a protocol, like 'http://' or 'https://'</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br />
            <div className="response"><p>{response}</p></div>
        </div>
    )
}

export default CreateLink;