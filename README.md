# gmail_homework_E_C_W

1.  Create an object that models the data of your favorite email application.

-   Open the email application and take a look at the interface.
-   What information do you see? Make a short list (e.g. emails, my name, mailbox list, an email preview...)
-   Make a detailed outline of the data hierarchy. E.g -
-   Gmail
    -   mailboxes
    -   inbox
    -   starred
    -   sent
    -   Chat Contacts
    -   Shane
    -   Eric
    -   Katy
    -   Emails
-   For each bullet in your outline, decide if it is a primative, array, or object.
-   Use this information to create an object literal that models the application's data. E.g. -

    ```javascript
    var appData = {
    	name: 'Gmail',
    	mailboxes: [
    		'inbox',
    		'starred',
    		'sent',
    	],
    	contacts: [
    		{name: 'Shane', lastMessage: "I wont be in class today"},
    		{name: 'Katy', lastMessage: "You're such a nerd"}
    	]

    	//...
    }
    ```

    Add as much detail as you'd like. Experiment and have fun with it. Nest objects inside of arrays and arrays inside of objects multiple levels deep. Ask yourself if some of the primatives you've created could be objects instead.

2.  Once you've composed your object, write some code to address it.

-   Get a list of inbox names
-   Get a list of emails
-   Get the text of the second email in the visible list
-   Mark an email as sent
-   Add a draft email to the drafts mailbox
-   etc. etc. etc.

3.  push the completed code to our GitHub channel

-   use the naming convention `email_app_YOUR_INITIALS_HERE`
