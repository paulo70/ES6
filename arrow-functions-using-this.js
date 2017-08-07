(function() {
  const $button = document.querySelector('[data-js="button"]');

  const sandwich = {
    bread: 'white',
    cheese: 'cheedar',

    prepare: function() {
      return `I want a sandwich with ${this.bread} bread and ${this.cheese}`;
    },

    make: function() {
      window.setTimeout(() => {
        console.log(this.prepare());
      }, 500);
    }
  }
  $button.addEventListener('click', function() { sandwich.make() });
})();