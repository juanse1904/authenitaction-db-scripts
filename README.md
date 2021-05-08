# How to run this scripts?

First of all, it's necessary already have installed mongo in your pc; after that, you should also have a intialized cluster in the mongo Atlas,this site allow you handle the databases , the collections and documents.
 Once you login and have initialized a cluster in this place, you should find a connect option, this is going to open a window where we have three prinicpal options:

1. Connect with mongo shell

2. Connect your application

3. Connect using MongoDB Compass

To run this scripts we're going to select **Connect with the mongo shell** and we're going to copy the connection string, it looks like:

``mongo "mongodb+srv://workshop-uni.4eilm.mongodb.net/myFirstDatabase" --username juan-gomez``

In the part that says 'myFirstDatabase' we should shange it by the name of our database previously created.

Now, in the shell of our PC run the preavious line, after that it'll ask us our cluster password, write it and press enter.

We started the mongo shell so we proceed to run the scripts with the command load(), is too simple to use, in the brakets we should
put the path of the script, for example '/home/user/documents/scripts/01-0000-auth.js' , including the quotes, if averything is correct it should response with a true and that's it.
