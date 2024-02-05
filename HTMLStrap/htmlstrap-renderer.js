// htmlstrap-renderer.js
class HTMLStrapRenderer {
    constructor(rootId) {
      this.rootElement = document.getElementById(rootId);
      this.pages = {};
    }
  
    addPage(pageName, component) {
      this.pages[pageName] = component;
    }
  
    render(pageName) {
      const component = this.pages[pageName];
      if (component) {
        this.rootElement.innerHTML = '';
        this.rootElement.appendChild(component());
      } else {
        console.error(`Page not found: ${pageName}`);
      }
    }
  }
  
  const htmlStrapRenderer = new HTMLStrapRenderer('root');
  