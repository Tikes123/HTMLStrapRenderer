// app.js
// const HomePage = () => createElement('div', {}, 'Home Page');
// const AboutPage = () => createElement('div', {}, 'About Page');
// const ContactPage = () => createElement('div', {}, 'Contact Page');

// // Add pages to the HTMLStrapRenderer
// htmlStrapRenderer.addPage('home', HomePage);
// htmlStrapRenderer.addPage('about', AboutPage);
// htmlStrapRenderer.addPage('contact', ContactPage);

// // Initial render of the home page
// htmlStrapRenderer.render('home');
// app.js
// Example components
const loadPage = async (filename) => {
    const response = await fetch(filename);
    const html = await response.text();
    return createElement('div', { style: 'padding: 20px;' }, html);
  };
  
  // Add pages to the HTMLStrapRenderer
  htmlStrapRenderer.addPage('home', () => loadPage('home.html'));
  htmlStrapRenderer.addPage('about', () => loadPage('about.html'));
  
  // Function to handle page navigation
  async function navigateTo(pageName) {
    await htmlStrapRenderer.render(pageName);
  }
  
  // Initial render of the home page
  navigateTo('home');
  
