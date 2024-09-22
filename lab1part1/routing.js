
// These are constants available for you to complete your task.
// You may use these constants in your code. Do not modify these constants.
// Scroll down to the section where you can write your code.

const contentHome = `<h3>Welcome to our website!</h3>
<p>We have many wonderful products that you might be interested in for 2024.</p>`;
const bkgColorHome = '#fff';
const pageTitleHome = 'Home Page';

const contentProducts = `<h3>Our Top 5 Products</h3>
<ol>
  <li>Computers</li>
  <li>Hard Drives</li>
  <li>USB Drives</li>
  <li>Backup Drives</li>
  <li>Printers</li>
</ol>`;
const bkgColorProducts = '#faedcd';
const pageTitleProducts = 'Products Page';

const contentAbout = `<h3>About Us</h3>
<p>We have been around a long time, so we know what we are doing.</p>
<h4>Customer Feedback</h4>
<q>You are the only computer company I trust</q> John Smith`;
const bkgColorAbout = '#ccd5ae';
const pageTitleAbout = 'About Us Page';

// Start writing your code below this line

function updatePage(content, backgroundColor, pageTitle) {
  document.getElementById('content').innerHTML = content;
  document.getElementById('content-wrapper').style.backgroundColor = backgroundColor;
  document.getElementById('page-title').textContent = pageTitle;
}


function onclick() {
  const query = window.location.search;
  if (query.includes('products')) {
      updatePage(contentProducts, bkgColorProducts, pageTitleProducts);
  } else if (query.includes('about')) {
      updatePage(contentAbout, bkgColorAbout, pageTitleAbout);
  } else {
      updatePage(contentHome, bkgColorHome, pageTitleHome);
  }
}

window.onload = onclick;

