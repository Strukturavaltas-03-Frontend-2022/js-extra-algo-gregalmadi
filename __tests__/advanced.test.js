import getCartesianProductBetweenTwoArrays from '../solutions/advanced/descartes/descartes'
import getTheDifferenceBetweenTwoArrays from '../solutions/advanced/difference/difference'
import getSectionOfTwoArrays from '../solutions/advanced/section/section'
import getUnionOfTwoArrays from '../solutions/advanced/union/union'
import linearSearch from '../solutions/advanced/search/search'

describe('Advanced algorithms ', () => {
  test('cartesian product beetween two array', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [3, 4, 5]

    const result = getCartesianProductBetweenTwoArrays(arr1, arr2)

    expect(result).toEqual([3, 4, 5, 6, 8, 10, 9, 12, 15])
  })

  test('get the difference between two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5]
    const arr2 = [3, 4, 5, 6, 7]

    const result = getTheDifferenceBetweenTwoArrays(arr1, arr2)

    expect(result).toEqual([1, 2])
  })

  test('linear search', () => {
    const arr1 = [1, 2, 3, 4, 5]
    const value = 1

    const result = linearSearch(arr1, value)

    expect(result).toBe(true)
  })

  test('get section of two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5]
    const arr2 = [3, 4, 5, 6, 7]

    const result = getSectionOfTwoArrays(arr1, arr2)

    expect(result).toEqual([3, 4, 5])
  })

  test('get union of two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5]
    const arr2 = [3, 4, 5, 6, 7]

    const result = getUnionOfTwoArrays(arr1, arr2)

    expect(result).toEqual([1, 3, 2, 4, 5, 6, 7])
  })
})
