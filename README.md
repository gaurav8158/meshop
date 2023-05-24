# MeShop.
- Deployed Link: https://gaurav8158.github.io/meshop/

# About Meshop.
MeShop. is the dummy shopping website, which gives us the realistic feel of the online shopping done on the various online shopping platforms available in the market. It is not as sophisticated and efficient as other online shopping platforms are, but contains the required features such as product searching, filtering, cart feature, user login, use signup, user authentication and much more. It covers the complete cycle right from the start of product search to the dummy payment completion.
            
# Technologies used by MeShop.
<p>
              MeShop. is entirely designed and developed in HTML, CSS and
              Javascript. It do not implements any third party CSS or Javscript
              frameworks like Tailwind or ReactJS. We are using the dummy
              products, whose JSON file is fetched from the Fake Store API
              website. This JSON file is then rendered as the dummy products in
              the shop portal. As MeShop. is the dummy shopping platform, it is
              required for it to have the dummy payment portal. This
              functionality is adopted using the RazorPay API which allows us to
              make the dummy payments. The deployment part of the website is
              handled by the Github Pages and the code is deployed in the Github
              Repository.
            </p>
            <p>
              The backbone of any shopping platform is its storage, as it is
              required to store the user details for authentication purpose,
              product details and many more. This part of backend is taken care
              by the browsers local storage. The local storage of the browser is
              used to store the user details such as email and password, current
              user details, product data that is fetched from the server and the
              cart details of the products that are added by the user.
            </p>
            
# MeShop. features

<ul>
              <li>
                Same user can signup and login with multiple emails and
                password. Every credentials will be stored in the local storage
                from which the authentication will be done. Signup and Login
                level authentications such as the user with two same email id
                cannot signup, email and password check while login and other
                basic authetications are also provided. If in any case, the user
                deletes the local storage data, the website will automatically
                redirect the user to the landing page on refreshing.
              </li>
              <li>
                The shopping portal has the features such as searching the
                product, filtering and categorizing the products based on given
                filter and category tags.The shopping portal can only be
                accessed if the user is logged in, else the user will be
                redirected to the landing page.
              </li>
              <li>
                Every product in portal has Add to Cart button, where the user
                can add products in multiple quantity and remove it from the
                cart as well. In the shopping portal, the cart button will only
                visible on the navbar if the user added atleast single product
                to the cart.
              </li>
              <li>
                User can always change their user details by clicking on the
                profile section of the navbar which is only visible if the user
                logs in. This profile section will display the name of the
                current user logged in.
              </li>
              <li>
                The cart page is specifically designed for the preview of the
                products that are added to the cart. Local storage acts as the
                exchange point between shopping portal and the cart page.
                Whenever the user adds or remove the product in shopping portal,
                this information is stored in local storage and then the
                information stored is access by the cart page to render the
                data.
              </li>
              <li>
                We can initiate the dummy payment procedure using the RazorPay
                API in test mode from the cart page only.
              </li>
              <li>
                From design point of view, the website is fully responsive and
                can be displayed smmothly on all the form factors that are given
                in the browsers developer console.
              </li>
            </ul>
