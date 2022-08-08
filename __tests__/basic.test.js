import getTheSmallestElement from '../solutions/basic/min/min'
import getTheLargestElement from '../solutions/basic/max/max'
import getCountOfTheEvenElements from '../solutions/basic/even-counter/even-counter'
import { getSumOfTheElements, getAvarageOfTheElements } from '../solutions/basic/sum-and-avg/sum-and-avg'

describe('Basic algorithms ', () => {
  test('get the smallest element of an array', () => {
    const arr = [1, 2, 3, 4, 5]

    const result = getTheSmallestElement(arr)

    expect(result).toBe(1)
  })

  test('get the largest element of an array', () => {
    const arr = [1, 2, 3, 4, 5]

    const result = getTheLargestElement(arr)

    expect(result).toBe(5)
  })

  test('count even elements of an array', () => {
    const arr = [1, 2, 3, 4, 5]

    const result = getCountOfTheEvenElements(arr)

    expect(result).toBe(2)
  })

  test('get sum of the elements of an array', () => {
    const arr = [1, 2, 3, 4, 5]

    const result = getSumOfTheElements(arr)

    expect(result).toBe(15)
  })

  test('get avarage of the elements of an array', () => {
    const arr = [1, 2, 3, 4, 5]

    const result = getAvarageOfTheElements(arr)

    expect(result).toBe(3)
  })
})
