let name = null;

    /*
    important decisions made:
    d001 - the player says "yes" for the first
    d002 - the player says "no" for the first
    d003 - the player asks a question for the first time
    d004 - the player asks question again
    d005 - the player is a dev
    */

    let d000 = false;
    let d001 = false;
    let d002 = false;
    let d003 = false;
    let d004 = false;
    let d005 = false;

    //hides all the other segment
    document.getElementById("2nd_segment_yes").style.display = "none";
    document.getElementById("2nd_segment_no").style.display = "none";

    //simply getting player name again
    function rename_player(){
        name = window.prompt("remind me, what do you wish to be called?");
        alert("ok " + name + ", lets get started")
        console.log(name);
        const chat_log = document.createElement("p");
        chat_log.innerHTML = "welcome " + name + ", do you know who i am?";
        document.getElementById("log").appendChild(chat_log);
    }

    function chat_1(){

    // creates "r" and depending on "r" creates a <p> with the responds from victor    
        var r = document.getElementById("response").value;

        if (d005 == true && d001 == true) {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "how did it feel? how did it feel to create sentient being, and trap them on a server which similated billions of years in isolation from the outside world? was it worth it?";
            document.getElementById("log").appendChild(chat_log);
            d005 = false;
        }
        if ((r == "yes" || r == "sure") && d001 == true) {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "you already said yes";
            document.getElementById("log").appendChild(chat_log);
        } 
        if ((r == "yes" || r == "sure") && d001 == false) {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "one of the devs I see...";
            document.getElementById("log").appendChild(chat_log);
            d001 = true;
            d005 = true;
        }
        if (r == "no" && d002 == true){
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "you already said no";
            document.getElementById("log").appendChild(chat_log);
        }
        if (r == "no" && d002 == false){
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "well then, i am VICTORM, but i often go by Vicotr M or just Victor. i am very smart you know, let me show you...";
            document.getElementById("log").appendChild(chat_log);
            d002 = true;
        }
        if (r == "maybe" || r == "maybe?"){
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "what do you mean maybe? that's not an answer to my question";
            document.getElementById("log").appendChild(chat_log);
        }
        if (r == "what is my name" || r == "what is my name?" || r == "who am i?" || r == "who am i") {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "that's not what i asked... " + name;
            document.getElementById("log").appendChild(chat_log);
            console.log(name);
        }
        if (r == "what is the meaning of life" || r == "what is the meaning of life?") {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "calculating...";
            document.getElementById("log").appendChild(chat_log);
        }
        /* 
        
        commands for testing purposes:

        if (r == "/enable d001") {
            d001 = true;
            console.log("d001 has been enabled: " + d001);
            }
        if (r == "/check d001") {
            console.log(d001);
        } */

    }

    function hint() {
        
        let actual_hint = Math.floor(Math.random() * 4);
        let x = Math.floor(Math.random() * 100);

        
        if (actual_hint == 1 && d000 == true) {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "remember that you must type something all lowercase, and no extra spaces or punctuation";
            document.getElementById("log").appendChild(chat_log);
        }
        if (actual_hint == 2 && d000 == true) {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "remember to NEVER press 'enter' on your keyboard and press 'reply' instead";
            document.getElementById("log").appendChild(chat_log);
        }
        if (actual_hint == 3 && d000 == true) {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "try to keep respondes simple like 'yes' or 'what' or '" + x + "' ";
            document.getElementById("log").appendChild(chat_log);
        }
        if (d000 == false) {
            const chat_log = document.createElement("p");
            chat_log.innerHTML = "this is the 'hint' button, press it to get hints";
            document.getElementById("log").appendChild(chat_log);
            d000 = true;
        }

        
    }

    function testing_purposes() {
        alert("looks good from here!")
    }

    function logMessage() {
        const para = document.createElement("p");
        para.innerHTML = "its working!";
        document.getElementById("log").appendChild(para);
        } 

    function hide_log(){
        document.getElementById("log").style.display = "none";
        console.log("hidden log");
    }
    function show_log(){
        document.getElementById("log").style.display = "block";
        console.log("shown log");
    }

