/* eslint-env browser */

/**
 * Element.before polyfill
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before
 */
(function (arr) {
  arr.forEach(function (item) {
    /* eslint-disable */
    if (item.hasOwnProperty('before')) return
    /* eslint-enable */

    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before () {
        var argArr = Array.prototype.slice.call(arguments)
        var docFrag = document.createDocumentFragment()

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
        })

        this.parentNode.insertBefore(docFrag, this)
      }
    })
  })
})([Element.prototype, CharacterData.prototype, DocumentType.prototype])
