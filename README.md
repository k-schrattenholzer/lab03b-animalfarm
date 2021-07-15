## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Setup
Three Buttons
- Why? We need to add an event listener to each button.  
- How? `button.addEventListener('click', () => {})`
Blank <h1> tag
- Why? A space to show which button was clicked
- How? `myH1.textContent = 'horse'`
Three <audio> tags live in the HTML
- Why? So we can grab them and `.play()` them in our javascript.

## Events
On clicking an animal . . .
- What happens? On click,
    - make a different animal sound 
        - How? 
            - Grab an <audio> tag from the html that points to the right audio file
            - `dogSound.play();`
    - button will inject the animal name into the h1