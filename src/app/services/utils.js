import { TIMEOUT_SEC } from '../config/config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const waitForElm = function (selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};
/* test block */
waitForElm('.search-results').then(elm => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // console.warn(mutation);
    });
  });

  observer.observe(elm, {
    childList: true,
    subtree: true,
  });
});

export const readHTML = async function (file) {
  const response = await fetch(file);
  const text = await response.text();
  return text;
};

export const implement = function (baseClass, interfaces) {
  class Component extends baseClass {
    constructor() {
      super();
      this.setInterfaces(interfaces);
      this.checkIfImplemented();
    }

    setInterfaces(interfaces) {
      this.interfaces = interfaces;
    }

    getPrototype() {
      return Object.getPrototypeOf(this);
    }

    getPrototypeMethods() {
      return Object.getOwnPropertyNames(this.getPrototype());
    }

    getClassName() {
      return this.getPrototype().constructor.name;
    }

    checkIfImplemented() {
      this.interfaces.forEach(subInterface => {
        let proto = subInterface.prototype;
        Object.getOwnPropertyNames(proto).forEach(methodName => {
          if (
            methodName !== 'constructor' &&
            typeof proto[methodName] === 'function' &&
            !this.getPrototypeMethods().includes(methodName)
          ) {
            console.warn(
              'WARNING! Method ' +
                methodName +
                ' is not implemented in ' +
                this.getClassName()
            );
          }
        });
      });
    }
  }

  return Component;
};
