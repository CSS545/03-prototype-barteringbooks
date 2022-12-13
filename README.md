 App Name: Bartering Books
 
# Team: Karan Bhatt, Sheng Wang

This is the final version of our application. Recommend typing **npm i**, **expo start** and scanning the QR code using the expo app on a cellphone to use.

## Final Submission questions and answers.

1. Does it accomplish the stated objective? (10 points)
Ans: Yes. it accomplishes the stated objective. Users are able to register and edit their accounts. Meanwhile, Users could also edit and post their used books, and also donate their used books for free or at a lower price by subjects. The Chatbox feature provides an opportunity for them to talk with each other to find a mentor or negotiate the price. People who need books for different purposes could find their desired books accordingly. 


2.Does it deliver on the “value proposition”? (10 points)
Ans: Yes, it delivers on the “value proposition.” As we strive to help low-income family students to get affordable used books from day one, our app follows the rule of “value over features.”


3.Does it respect user privacy/is it secure? (10 points)
Ans: Yes, the user data are encrypted using bcrypt functionality of reactnative and stored in data base.


4.Does it have proper app lifecycle/state management? (10 points)
Ans: Yes, it does have proper app lifecycle/state management. 

5.Does it address at least three additional challenges (other than privacy and state management) unique to mobile app development? (15 points)
Ans: Yes, following challenges are addressed in our app other than privacy and state management,*
 *1) The challange of cross platform is addressed as we have made the app in react-native.*
 *2) The app interacts with web service like firebase, google api's (google accounts, gmails, etc).*
 *3) The app uses various permissions like storage, location for better functioning of app.*
 *4) Being a cross platfrom app, it solves the problem of form factor and can be viewed in different mobiles uniformly.*

6.Does it have a good user experience? (5 points)
Yes, the user experience is good. All the features are self-explanatory and without unnecessary confusion.

Project Details:-

## Summary of Project
*This app provides a platform to low-income family students and anyone who needs books for different purposes. Those who want to gid rid of their used books will have an opportunity to donate them for free or sell them at a lower price. And people who need the book would have a chance to get it for free or buy it at a lower price, and further make study mates or find mentors since the needs of the same book tend to have the related study area. Location services will be enabled to support the local meet-ups.*

## Project Analysis
### Target Audience
*a)Students from pre-school age all the way up to colleges who need used books for free or at a lower price.*

*b)People who need books for different purposes(study or reading in general).*

*c)People would like to give away their used books for free or sell them at a lower price.*

*We reach our intended users by providing this excellent platform targeting on their needs. Free or lower-priced used books are in high demand(Supporting data in the Value Proposition section)*

### Primary Purpose
*Strive for education equality. Helping low-income family students to get affordable books.*

### Value Proposition
*We strive for everybody to get an affordable and better education by providing used books.*

*a). New textbooks are pricy and not affordable for many families.*

*b). Tossing used books away is a waste of valuable resources.*

*c). The healthy used book market greatly protects the author by eliminating unofficial resources(Many students are willing to buy legal copies if not that expensive).*

*d). 38% of children live in low-income families. [1]*

*e). 73.2 million total students enrolled in school(high demand). [2]*

 

*References:*

*[1] “United States Demographics of Low-Income Children,” National Center for Children in Poverty. https://www.nccp.org/demographic/ (accessed Oct. 12, 2022).*

*[2] “Census Bureau Reports Nearly 77 Million Students Enrolled in U.S. Schools,” United States Census Bureau. https://www.census.gov/newsroom/press-releases/2019/school-enrollment.html (accessed Oct. 12, 2022).*



### Success Criteria
*a) Passing the sense of community: Users tend to be educational-related, potentially providing a platform to make friends or mentors.*

*b) Monetization: Giant size of used books, websites, and educational-related products generates substantial revenue from ads.*

*c) Global recognition: The app can be delivered to countries outside of the United States without legal issues, making it possible to earn global credit and gain more revenue.*

### Competitor Analysis
*Competitor: Facebook Marketplace*

*Pros:*

*a) Professional: Detailed, laser focusing on used books.*

*b) Money-safe: Educational based app leads to far fewer scams than Facebook Marketplace(fake luxury items, house renting deposit scams)*

*c) Global recognition: The app can be delivered to countries outside of the United States without legal issues, making it possible to earn global credit and gain more revenue.*

*Cons:*

*a) Focusing on education criteria will not be as profitable as Facebook Marketplace, which ads for every category.*

*b) No boost-ads like in Facebook Marketplace, meaning less profit on the users' end.*

*c) Aimed users are more narrowed, not having social DNA as Facebook did.*


### Monetization Model
*Ads:*

*a) Used book websites: There will be books in demand that are not being offered. We will run ads from used book websites to compensate for the demand gap.*

*b) Ads from any other education-related product suppliers or products with educational discounts. E.g., Study websites, educational hardware, or traveling promotions(holiday season getaways).*

### Initial Design
*a) Users can upload images, ISBN, and short descriptions of the book.*

*b) Users can cross out the item that is unavailable anymore.*

*c) Users will be able to chat with each other in detail about the book or set up meet-ups by chat box.*

*d) Users will be able to create their account, update their profile, information etc.*

*e) Users will be able to search other users and also other books based on categories*

### UI/UX Design

*React Native UI toolkit*
*a) Home Page*
*b) Sign IN, SignUp Page (Before Signin user will not be able to do anything just view the content)*
*c) Profile*
*d) uploading posts(books)*
*e) Chats*
*F) Search Page*
*g) Notification Page*

### Technical Architecture
*a)Text*

*b)View*

*c)Button*

*d)Image*

*e)Alert*

*f) navigation*

*g) search*

*h)HTTP services are used to store database.*

*i) Async data storage is used to store data locally in react native*

*j) Fire base is used to store various data like immages*

*K) Mongo DB is used as the main database to store data like user's information (Sighin-Signup data, form data, etc) and also, messages are stored in mongo DB server*

*L) For live chat, socket Io is used in the project.

*J) React Native plugins, library's and api's are used in order to work all the functionalities.

## Future Work 

*a) Location services will be implemented, so that people can search for books in their nearby area and exchange/donate/buy/resale books accordingly.*
*b) The UI/UX will be made more user-friendly.*
*C) Bugs Fixation*

## Challenges and Open Questions
*a) The app will be running whether we tested it carefully or not. It might look flawless but have issues after deployment.*

*Solution: Unit testing the app at each stage.*

*b) Move data from memory to server.*

*Solution: Using the database server.*

*c) Provide a better and faster search process.*

*Solution: build searching, sorting, and pagination components.*

*d) Outdated hardwares, their sizes and unsupportive bug fixation can make a challenge for users*

*Solution: The size resolution, pixel settings and dimensions need to be taken care of*


Users will be able to choose the used book they want to donate or sell at a lower price from the category, set up the name of the book, price, provide a brief description, and upload images.

State management has been taken into consideration. When the user uploads their book or type description, they can navigate away from the app or pick up a phone call and continue their work without starting all over again.

Image uploading behaves differently in the simulator but works perfectly in a physical device. It can be achieved by typing **expo start** and scanning the QR code using the expo app on a cellphone.
