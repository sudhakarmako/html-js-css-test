const favicon = document.getElementById("favicon");
       
        // Creating a function for the button GeeksforGeeks
        function to_google() {
            favicon.setAttribute("href", "google.ico"); 
        }
        // Creating a function for the button Techiniacl Script
        function to_youtube() {
            favicon.setAttribute("href", "youtube.ico");
        }
        function to_favicon() {
            favicon.setAttribute("href", "favicon.ico");
        }
        function to_default() {
            favicon.setAttribute('href','no_icon.ico');
        }