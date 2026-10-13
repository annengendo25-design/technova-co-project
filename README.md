# Technova&CO — Electronics Store

## Project Overview

Technova&CO is a responsive electronics store website designed to showcase modern electronic products and accessories. It provides users with a simple and visually appealing way to explore products, view prices, and interact with the website.

## Problem Statement

Finding and exploring electronic products online should be simple and convenient. A poorly organized website can make it difficult for customers to browse products and access important information.

## Solution

Technova&CO provides a clean and user-friendly product showcase with organized product cards, product details, a shopping cart sidebar, and a dark mode feature.

## Features

- **Product Showcase:** Displays six electronic products with images, prices, ratings, and descriptions.
- **Product Grid:** Organizes products using CSS Grid.
- **Product Modal:** Opens a popup when a product card is clicked.
- **Shopping Cart Sidebar:** Displays selected example products and their total price.
- **Dark Mode:** Allows users to switch between light and dark themes.
- **Filter and Sort UI:** Provides dropdown menus for product categories and sorting options.
- **Hover Effects:** Adds interactive visual effects to product cards.
- **Loading Animation:** Uses a fade-in animation when product cards appear.
- **Responsive Design:** Uses CSS media queries to adapt the layout to different screen sizes.
- **Print Styling:** Includes CSS rules for printing the webpage.

## Technologies Used

- **HTML5:** Structures the webpage and its content.
- **CSS3:** Handles styling, layout, animations, responsive design, and dark mode.
- **JavaScript:** Controls the product modal, cart sidebar, and dark mode.
- **Visual Studio Code:** Used to write and edit the project code.

## Products Displayed

1. Nova X1 Smartphone — $699
2. Aero Pro Headphones — $149
3. Pulse Smartwatch — $199
4. UltraBook Air — $899
5. Nova Buds Pro — $99
6. SoundBox Mini — $79

## Project Structure

```text
Technova/
├── index.html
├── style.css
├── script.js
└── images/
    ├── phone.jpg
    ├── headphones.jpg
    ├── smartwatch.jpg
    ├── laptop.jpg
    ├── earbuds.jpg
    └── speaker.jpg
```

## How to Run the Project

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Ensure the product images are saved in the `images` folder with the correct filenames.
4. Open `index.html` in a web browser, or use the Live Server extension in Visual Studio Code.
5. Explore the products and test the interactive features.

## Design and Responsiveness

The website uses a consistent color scheme, CSS custom properties, Flexbox, and CSS Grid to create an organized layout. Media queries adjust the product grid and other elements for smaller screens.

Hover effects and animations improve the visual experience, while dark mode provides an alternative color theme.

## Limitations

- The filter and sort dropdowns are visual elements and do not currently filter or reorder products.
- The shopping cart displays sample products and does not dynamically update when the Add to Cart buttons are clicked.
- The product modal currently displays the same product details for every product card.
- Checkout is a visual button and does not process payments.

## Future Improvements

- Implement functional product filtering and sorting.
- Add dynamic shopping cart functionality.
- Display the correct details for each selected product.
- Add a functional checkout process.
- Improve accessibility and conduct browser compatibility and performance testing.

## Author

Ann Ng'endo.
