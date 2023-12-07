# Mystifying ?

- NOTHING!
- maybe a lil bit jQuery

# AJAX

JS: Asynchronous JavaScript And XML
AJAX: Tough on grease
AJAX, Ontario
AJAX the great, greek history

# Asynchronous JavaScript

setTimeout, setInterval, fs.readFile, Express routes

Express Routes: When do we do the content of the route, when a user requests it

Browser: When will the popup show? When you click on the button

# Data fetching

App like websites, fetch new content without having to reload

# HTML -> XML

eXtensible Markup Language

<post>
  <title>
  <description>
  <image_url>

RSS Readers

When we send data, we need to send text (or binary), XML, JSON, plaintext, HTML

Source (DATA)
stringify(DATA), xmlize(DATA)

-
-
- Client (DATA)
  parse(JSONDATA), deXMLize(XMLDATA)

# How to fetch?

```jsx
const request = new XMLHttpRequest();

$.ajax();

$.ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
})
  .then((response) => console.log("response is:", response))
  .catch((err) => console.log(err));
```
