# BELLYBOX

## AIM OF THIS APPLICATION
Bellybox is a web application which helps to reduce food wastage by connecting people with excess food to the needy.By loging in user can share their excess food for price or for free.
user can also share their food for charity.

## BASIC REQUIREMENTS TO RUN THIS APPLICATION
Proper Internet Connection ( using mongodb atlas cloud DataBase,proper internet connection is mandatory),

## IMPORTANT THINGS TO NOTE BEFORE RUNNING THIS APPLICATION.
1.My backend server file is "server.js" file inside backend folder(not "app.js"),so dont run app.js instead of "server.js".
2.Dont use nodemon to run backend "server.js" instead use command" node server.js".
3.if your system shows  error message "bcrypt" then install "npm install --save bcrypt";

## HOW TO RUN THIS APPLICATION

**>** Open cloned application folder 
**>** Open terminal  and change directory to bellyboxapp ,open terminal and use command
```
cd bellyboxapp
```
```
npm install
```

**>** After changing the current directory to bellyboxapp run the angular server by entering command.

``` 
ng serve
```
**>**or 
``` 
npm start
```
**>** after sucessfull complilation you will get "sucessful compilation"message in terminal.

**>**  Change directory to backend and open terminal,use command
```
node server.js
```

You will see a message "Database Connected" in terminal after successful connection with the database.Make sure you see the message in REPL terminal before going further steps.
**>** Now our Front-end and Back-End is ready!now lets get into our application!!

# HOW TO USE THIS APPLICATION

**>** Go to browser and enter url "localhost:4200"(which is angular's default port number);
**>** Now you will see  Home page;
**>** In the home page you will see two buttons in the centre "Lets get started" & "want to know about me".
**>** By pressing "Lets get started "it will guide you to a gateway page.By pressing "want to know about me" it will direct to about page where you can know more about the application.
**>** In the gatewaypage you will see 6 modules.they are
	
	1:Want to Share Food?(Donor page)
	2:Want to Eat?(Eater page)
	3:Want to be a hero?(Hero)
	4:Want to Donate Food for Charity?(Charity page)
	5:Are you a shelter home?(Shelter Home Zone)
	6:Contact Admin	


## SIGNUP&LOGIN PROCEDURE

**>** Every user should be signed up to use each modules and to be part different modules user should be signed up differently.signing up to a module cant give access to other modules.
for eg( user who signed up for donor module cant use eater module unless user is signed up to eater module).
**>** After successfull signing up the page will be redirected to the login page then it will redirected to the main page of different module.  
**>** For logouting a logout button will arrive in the navbar after successful loging.
**>** Since i have used JWT(JASON WEB TOKEN) method for secure signup and login, any unauthorized action can make make your token expire and your access will be blocked.user should finish the
session within 1 hr because i have set token expiration time to 1 hr and dont refresh in between the session it will erase the token and you will lose your access.To know more about my token method
please read the detail in packages and method section given below.


# LETS KNOW MORE ABOUT THESE MODULES

1:WANT TO SHARE FOOD?

By loging In to this module user can share their  food items to the society.User can donate or can be charged for sharing their food items.
>After sucessful login to this module you will enter to the main page,where you can the enter the details of food item to be shared & when you press the submit button.the post will be
posted in Eaterpage as well as in the current page.if the user want to delete the post then user can delete the post by pressing delete button inside more details.user can update the post 
by pressing update button where the user will be redirected to a form page with existing details now user can edit it and submit.

2:Want to Eat?
By loging In to this module user can find available food items shared by donors.Food items can be charged or can be free.if user is interested in a deal can find contact 
details of donor and can contact directly.
>After successful login to this module you will enter to the main page,where user can find food items shared by donors.

3:Want to be a hero?
By loging In to this module user can serve the society by delivering food items from the charity donors to the most needy people of weaker sections in the society.
>After successful login to this module you will enter to the main page,where user can find food items shared by charity donors.

4:Want to Donate Food for Charity?
By loging In user can donate food for charity purpose.donated food items will be listed in heroes page as well as in the charity organization module.
>After successful login to this module you will enter to the main page,where you can the enter the details of food item to be donated & when you press the submit button.the post will be
posted in Heropage,Shelterhomezonepage, as well as in the current page.if the user want to delete the post then user can delete the post by pressing delete button inside mode details.user
can update the post by pressing update button where the user will be redirected to a form page with existing details now user can edit it and submit.

5:Are you a shelter home
By loging In to this module charity organization can find food donations offered by charity donors.
By loging In to this module user can find available food items donated by donors.Food will be free of cost.if user is interested in a deal can find contact 
details of donor and can contact directly.

6:Contact Admin
By Entering to this page user will find conatact details of admin to give feedbacks.

## METHODS AND PACKAGES USED
**>** Angular material library package & Bootstrap for Styling.
**>** bcrypt for password encryption so that the user password will be safe and cant be visible to anyone.
**>** Json Web token method for secure signup,login procedure since i have gone through the web docs i found that session process is outdated,not secure and in SPA(Single page
application ) back end server is stateless or restful API so session process is not a good solution so i have learnt and implemented JWT method upto to a basic level.and it works perfectly.
**>** used a token expiration duration of 1 hour to increase security of the user.if any unsual acess is made from outside or inside app can make the token expire.it makes app secure. 
**>** implemented all CRUD Operations Sucessfully.
**>** used Mongo db atlas cloud Service so that i can access data from anywhere.

# FUTURE SCOPE
**>** Due to short of time i couldnt implement image upload.image upload to cloud database need more time to learn so i am leaving it to future scope.
**>** GPS API implemention is something very important to this app.so that user will get notifications of nearby donors and eaters.since it take more time and investment 
i am leaving it to future scope.
**>** To include online interaction between donors&eaters.
**>**To include Online money transaction between donor& eater.






 
