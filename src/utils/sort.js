/**
 * Sorts an array of objects or strings
 */
export function sort({
  sortBy, // Property to sort by. Used when sorting array of objects.
  sortOrder, // 'asc' or 'desc'
}) {
  const sorted = response.body.sort((a, b) => {
    let one = a
    let two = b

    // Use the `sortBy` property if sorting by objects
    if (sortBy) {
      one = a[sortBy]
      two = b[sortBy]
    }

    if (sortOrder === 'asc') {
      if (one < two) return -1
      if (one > two) return 1
      return 0
    }

    if (sortOrder === 'desc') {
      if (one < two) return 1
      if (one > two) return -1
      return 0
    }
  })
}
