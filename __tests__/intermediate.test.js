import getTheEvenElements from '../solutions/intermediate/even-filter/even-filter'
import getOddEvenElements from '../solutions/intermediate/odd-filter/odd-filter'
import numberAndStringSorter from '../solutions/intermediate/number-string-sorter/number-string-sorter'
import searchAndCount from '../solutions/intermediate/search-counter/search-counter'
import sortByAsc from '../solutions/intermediate/sort-by-asc/sort-by-asc'

describe('Intermediate algorithms ', () => {
  test('get the even elements of an array', () => {
    const arr = [1, 2, 3, 4, 5]

    const result = getTheEvenElements(arr)

    expect(result).toEqual([2, 4])
  })

  test('get the odd elements of an array', () => {
    const arr = [1, 2, 3, 4, 5]

    const result = getOddEvenElements(arr)

    expect(result).toEqual([1, 3, 5])
  })

  test('sort numbers and strings', () => {
    const arr = [1, 2, 3, 'a', 'b', 'c']

    const result = numberAndStringSorter(arr)

    expect(result).toEqual([1, 'a', 2, 'b', 3, 'c'])
  })

  test('search a value and count them', () => {
    const arr = [1, 2, 3, 4, 5, 2, 2]
    const searchValue = 2

    const result = searchAndCount(arr, searchValue)

    expect(result).toBe(3)
  })

  test('sort array by asc', () => {
    const arr = [1, 2, 4, 5, 3]

    const result = sortByAsc(arr)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
