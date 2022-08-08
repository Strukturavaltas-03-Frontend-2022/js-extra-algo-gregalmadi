import binarySearch from '../solutions/expert/binary-search/binary-search'
import customSort from '../solutions/expert/custom-sort/custom-sort'
import insertionSort from '../solutions/expert/insertion-sort/insertion-sort'
import getNthLargestElement from '../solutions/expert/nth-largest/nth-largest'
import getNthSmallestElement from '../solutions/expert/nth-smallest/nth-smallest'

describe('Intermediate algorithms ', () => {
  test('binary search', () => {
    const arr = [1, 2, 3, 4, 5]
    const searchValue = 1

    const result = binarySearch(arr, searchValue)

    expect(result).toEqual(true)
  })

  test('sort numbers and put other elements to the end of the array', () => {
    const arr = ['dsf', 34, 6, 343, true, null, 878]

    const result = customSort(arr)

    expect(result).toEqual([6, 34, 343, 878, 'dsf', true, null])
  })

  test('insert element to an array', () => {
    const arr = [1, 10, 100, 1000, 10000]
    global.prompt = () => '20'

    const result = insertionSort(arr)

    expect(result).toEqual([1, 10, 20, 100, 1000, 10000])
  })

  test('get nth largest element', () => {
    const arr = [1, 2, 3, 4, 5]
    const nth = 2

    const result = getNthLargestElement(arr, nth)

    expect(result).toBe(4)
  })

  test('get nth smallest element', () => {
    const arr = [1, 2, 3, 4, 5]
    const nth = 2

    const result = getNthSmallestElement(arr, nth)

    expect(result).toBe(2)
  })
})
