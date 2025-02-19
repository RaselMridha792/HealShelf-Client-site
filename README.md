# Multi-Vendor Medicine Selling E-commerce Website - (Heal Shelf)

## About the Project
A multi-vendor platform for buying and selling medicines and healthcare products. The website includes vendor management, user authentication, product listings, cart, and payment features.

## user Credentials
- Admin Email: Raselmridha792@gmail.com
- Admin Password: 12345678

## Live Site
You can view the live site here:  
**[Live Site URL](https://heal-shelf-client.web.app)**

## Server-Side URL
The backend (API) server is hosted here:  
**[Server API URL](https://heal-shelf-medical-server.vercel.app)**


## Key Features
- **User Authentication**: Sign up, login, and social login (Google/GitHub).
- **Product Display**: View products by categories, detailed product pages.
- **Cart & Checkout**: Add products to the cart, proceed with Stripe payment.
- **Invoice Generation**: Download invoices post-purchase.
- **Admin Dashboard**: Manage users, products, categories, payments, and advertisements.
- **Seller Dashboard**: Manage products, view payment history, and request advertisement.
- **Payment History**: Track and view past payments for users.
  
## Technology Used
- **Frontend**: React.js, Tailwind CSS, React Router, Tanstack Query
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase, JWT
- **Payment**: Stripe
- **Miscellaneous**: React Hook Form, React Helmet, SweetAlert/Toast

## Routes Overview

### Public Routes:
- `/`: Home Page (`HomaPage`)
- `/login`: Login Page (`Login`)
- `/register`: Register Page (`Register`)
- `/shop-now`: Shop Products (`ShopNow`)
- `/category/:category`: Category Details (`CategoryDetails`)
- `/profile`: User Profile (`UserProfile`)
- `/cart`: Cart Page (`UserCart`, Protected Route)

### Dashboard Routes:
- `/dashboard`: Main Dashboard (`Dashboard`)
  - **Admin Routes**:
    - `/admin-home`: Admin Home (`AdminHome`)
    - `/manage-user`: Manage Users (`ManageUser`)
    - `/manage-category`: Manage Categories (`ManageCategory`)
    - `/admin-banner-ads`: Manage Ads (`ManageBanner`)
    - `/admin-manage-payments`: Manage Payments (`ManagePayments`)
    - `/sales-report`: Sales Report (`SalesReport`)
  - **Seller Routes**:
    - `/seller-home`: Seller Home (`SellerHome`)
    - `/manage-medicine`: Manage Medicines (`ManageMedicine`)
    - `/seller-payment-management`: Payment Management (`SellerPayManagement`)
    - `/seller-ads-management`: Advertisement Request (`AskForAdvertise`)
  - **User Routes**:
    - `/customer-home`: Payment History (`PaymentHistory`)
    - `/payment-management`: Payment Management (`PaymentHistory`)
    - `/checkout`: Checkout Page (`Checkout`)
    - `/invoice`: Invoice Page (`Invoice`)

### Private Routes (Protected):
- `/cart`: Accessible only if logged in (`PrivetRoutes`)
- `/dashboard/*`: Accessible only to authenticated users with respective roles (Admin/Seller/User)

## Installation Process

Follow the steps below to get the project up and running locally:

### 1. Clone the Repository
```bash
git clone https://github.com/RaselMridha792/HealShelf-Client-site
cd HealShelf-Client-site
