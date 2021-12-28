# General

It was assumed to be a simple todo app 
with simple server side on express, but when i returned to this project
I realized that I can't handle all  these layers of complexity 
I added before. 
( A lot of "helping" libraries,
own-coded helping utilities which don't work properly, session-handling, login and auth )
so my goal is make it works somehow). And I broke  development flow somehow, sessions doesn't work properly with run dev script

Also the structure of project is awful, and would be simpler completely rewrite entire project than try to refractor it

CSS is very simple with css-modules
# Frontend
React project based on create-react-app with redux

Axios as instrument for requests

Redux-form as helping utility for handle states of forms

react-alert for pop-up alerting

withAuth HOC for auth checking

# Backend

Express based server with sessions for authentication with mongoDB as database.

Passwords encrypted with sha1 algorithm

# Features

Register, login, authentication via sessions

Add, remove tasks

Add, remove subTasks, ability to check\uncheck subtasks (if all subTasks in task is checked, task considers as done). 

When you check subTasks you see how much % of all subTasks is checked ( done ). If 100% subtasks is checked, you can see that task is done

Displays current user and ability to log out with deleting session

Task filtering 

And may be some other stuff I forgot to mention

# Planned features 

Email validation and some UI changes
# Showcases

https://user-images.githubusercontent.com/34924425/147525504-d00577ce-be6b-44b0-8646-a37904a5dd3d.mp4
