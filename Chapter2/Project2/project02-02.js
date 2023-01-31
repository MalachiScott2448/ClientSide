<!DOCTYPE html>
<html>
<head>
   <!--
      JavaScript 7th Edition
      Chapter 2
      Hands-on Project 2-2

      Author: 
      Date:   

      Filename: index.htm
   -->
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width,initial-scale=1.0">
   <title>Hands-on Project 2-2</title>
   <link rel="stylesheet" href="styles.css" />
   <script src="project02-02.js" defer></script>
</head>

<body>
   <header>
      <h1>
         Hands-on Project 2-2
      </h1>
   </header>

   <article>
      <h2>Contact Information</h2>
      <form>
        <fieldset id="contactinfo">
          <label for="nameinput">
            Name
            <input type="text" id="name" name="name" />
          </label>
          <label for="emailinput">
            Email
            <input type="text" id="email" name="email" />
          </label>
          <label for="phoneinput">
            Phone
            <input type="text" id="phone" name="phone" />
          </label>
        </fieldset>
        <fieldset id="submitbutton">
          <input type="button" id="submit" value="Submit" />
        </fieldset>
     </form>
   </article>
</body>
</html>

