//                           FormData      
/* The FormData object lets you compile a set of key/value 
pairs to send using XMLHttpRequest. It is primarily intended 
for use in sending form data, but can be used independently 
from forms in order to transmit keyed data. The transmitted 
data is in the same format that the form's submit() method 
would use to send the data if the form's encoding type were 
set to multipart/form-data.*/


const formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"

// HTML file input, chosen by user
formData.append("userfile", fileInputElement.files[0]);

// JavaScript file-like object
const content = '<q id="a"><span id="b">hey!</span></q>'; // the body of the new file…
const blob = new Blob([content], { type: "text/xml" });

formData.append("webmasterfile", blob);

const request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
