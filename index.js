// Reverses a string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return this.content.toLowerCase();
  }
  
  this.processedContent = function() {
    return this.processor(this.content);
  }
  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function() {
    return this.content.toUpperCase();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();