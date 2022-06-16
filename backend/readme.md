###Back-End
I have basically used 3 layers controller,service and repository layer in controller I have basically provided 9 mappings four for crud operation of employee and two for search operation
and remaining two for getting the details of registered users.

Comparing backend code with real life scenario.

So when a customer comes to a Restaurant a waiter comes in and shows him the menu and takes his order. So if we map it with backend then waiter is basically acting as
a controller layer and menu  which the waiter shows to the client is basically all the items for the mappings which the restaurant or api can respondd in the desired way. for an instance client makes a request of hotdog but the hotdog is not present in the mapping/menu then waiter will respond to the client that it is an invalid request our restaurant does not prepare this.

So assuming if the waiter makes a valid request then that request is processed further that is waiter goes to chef who is responsible for preparing the food ordered by the client. So in the backend the chef is basically our service layer which is responsible for performing all the processing and giving the desired result to the  client.

And repository layer comes into play when chef wants anything to be fetched from stock room like if the chef is preparing the french fries and he came out of stock for potatoes then he will not go to the stock room and fetch those potatoes and then prepare the food because it will reduce the efficiency of the chef. what will happen there is a third person who is present for the chef from whom the chef will ask to fetch the potato from the stock room and then give it to him. So that third person is basically our repository layer whcih is responsible for communicating with the database and creating,fetching,updating and deleting the reaqired record in the database.

So basically this is how my api's backend is working..

