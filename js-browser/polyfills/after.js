/* eslint-env browser */
/**
 * Element.after polyfill
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after
 */
(function (arr) {
  arr.forEach(function (item) {
    /* eslint-disable */
    if (item.hasOwnProperty('after')) return
    /* eslint-enable */

    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after () {
        var argArr = Array.prototype.slice.call(arguments)
        var docFrag = document.createDocumentFragment()

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
        })

        this.parentNode.insertBefore(docFrag, this.nextSibling)
      }
    })
  })
})([Element.prototype, CharacterData.prototype, DocumentType.prototype])
