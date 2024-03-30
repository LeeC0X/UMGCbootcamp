# How Web Works Exercise

## Part One: Solidify Terminology

In your own terms, define the following terms:

- **What is HTTP?**
   
    Hyper Text Transfer Protocol witch allows clients to get or set data from or to a server.

- **What is a URL?**
    
    Uniform Resource Locator, is an address to get resource on Internet.

- **What is DNS?**
    
    Domain Name System, is a system witch takes URLs's name and converts them into IP addresses.

- **What is a query string?**
    
    The query string allows us to set parameters into the URL with the question mark ``?`` and some ``key/value`` and ``&`` between them if we have many parameters.
    
    Ex: http://somesite.com/some/page.html?lang=en&page=3

- **What are two HTTP verbs and how are they different?**

   The common HTTP verbs are :
 
   ``GET`` - get some data from the server without any changement on the server
 
   ``POST`` - send some data to the server with data changement on the server


- **What is an HTTP request?**

    An HTTP request is a request send by a client to a server with the HTTP protocol

- **What is an HTTP response?**
    
    An HTTP response is a response from a server to a client with the HTTP protocol

- **What is an HTTP header? Give a couple examples of request and response headers you have seen.**

    Headers provide additional information about the request or the response.
    
- **What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?**

    The browser convert the name address into an IP address using DNS and makes a request to that IP address.
    The server sends a response in HTML, the success status code. The browser generate a DOM from that HTML and finds any other resources included.
    The browser makes another HTTP requests for those resources and receives response from the server.

# Part Two: Practice Tools

Using **curl**, make a **GET** request to the ``icanhazdadjoke.com`` API to find all jokes involving the word ``pirate``
Use **dig** to find what the IP address is for ``icanhazdadjoke.com``
Make a simple web page and serve it using ``python3 -m http.server``. Visit the page in a browser.

![alt image](https://github.com/doumbiasoft/springboard-how-web-works-exercise/blob/main/curl.png)

# Part Three: Explore Dev Tools

Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.

# Part Four: Explore the URL API

At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

# Read about the URL API

Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.
