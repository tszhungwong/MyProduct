# Product Selling Mobile App Plan

## Summary

Build a simple mobile app where one seller can add products, and customers can browse products, add them to a cart, and create an order. The app will not handle online payments in version 1. It will only save the order or trade details in the database.

## Technology

- Mobile app: Expo React Native with TypeScript
- Backend: Supabase
- Platforms: Android and iOS
- Admin: inside the same mobile app

## Main Features

### Customer Features

- Sign up and log in
- Browse products
- View product details
- Add products to cart
- Submit an order
- View order history

### Seller/Admin Features

- Log in as admin
- Add, edit, and deactivate products
- Upload product images
- View customer orders
- Update order status

## Database

Use Supabase for:

- User accounts
- Product information
- Product images
- Cart and order records
- Admin permissions

Main tables:

- `profiles`: user name, contact info, and role
- `products`: product name, description, price, image, stock, and active status
- `orders`: customer order details, total price, status, and date
- `order_items`: products inside each order
- `categories`: optional product grouping

## Order Flow

1. Customer browses products.
2. Customer adds products to cart.
3. Customer enters contact and delivery details.
4. App saves the order in Supabase.
5. Seller sees the new order in the admin area.
6. Seller updates the order status.

## Order Statuses

- Pending
- Accepted
- Preparing
- Completed
- Cancelled

## Testing

Check that:

- Customers can browse products and create orders.
- Admin can create and edit products.
- Product images upload correctly.
- Customers cannot edit products.
- Customers cannot see other customers' orders.
- The app works on both Android and iOS screen sizes.

## Assumptions

- Version 1 is for one seller only.
- Other sellers may need different frontend designs later.
- No payment platform is needed now.
- Supabase is the chosen backend.
- The app should be simple first, then improved later.
