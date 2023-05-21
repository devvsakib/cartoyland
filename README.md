# <p align="center">CarToyLand</p>

CarToyLand is a full-stack Toy Marketplace website that focuses on the toy category of Toy Cars. It provides a platform for users to browse and purchase toy cars, as well as add their own toy car listings. The website aims to be visually appealing with a user-friendly interface and seamless functionality.


## Main Features
- Visually Appealing Design: The website emphasizes visual appeal with a pleasing color contrast, proper alignment, and adequate spacing. Customization of component styling is done to ensure a unique and reasonable design.

- Navbar and Footer: The navbar is present on all pages except the 404-page and includes the website logo, name, and essential navigation links such as Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture. The footer includes additional information like contact details, social media links, and address.

- Login & Registration Systems: The website implements a user authentication system with login and registration pages. Users can log in using their email and password or via Google Sign-in. The registration page collects necessary information such as name, email, password, and photo URL.

- Home Page: The home page consists of a banner section, gallery section with attractive toy car images, and a "Shop by category" tab system. Each tab represents a sub-category of Toy Cars and displays relevant toy car listings with details like picture, name, price, rating, and a "View Details" button. Non-logged-in users are prompted to log in when clicking the "View Details" button.

- Blogs Page: The blogs page includes informative blog posts that answer various questions related to topics like access tokens and refresh tokens, SQL and NoSQL databases, Express.js and Nest.js, and MongoDB aggregate.

- All Toys Page: The "All Toys" page presents a table/list of all toy listings added by users. Each row includes information such as seller name, toy name, sub-category, price, available quantity, and a "View Details" button. Users can also search for toys based on the toy name.

- Single Toy Details: The single toy details page provides in-depth information about a specific toy, including its picture, toy name, seller name, seller email, price, rating, available quantity, and detailed description. Non-logged-in users are redirected to the login page when attempting to view toy details.

- Add A Toy Page: The "Add A Toy" page allows users to add their own toy listings. The form includes fields for the toy's picture URL, name, seller name, seller email, sub-category, price, rating, available quantity, and detailed description.

- My Toys Page: The "My Toys" page is accessible to logged-in users and displays a tabular view of toy listings they have added. Each row includes an update and delete button. The update button allows users to modify the toy's price, available quantity, and detailed description. The delete button prompts for confirmation before removing the toy listing.

- 404 Page: The 404 page is a custom error page with an interesting image or gif and a "Back to home" button, allowing users to return to the home page.

- Environment Variables: Sensitive configuration keys and credentials for Firebase and MongoDB are stored as environment variables to ensure their security.
