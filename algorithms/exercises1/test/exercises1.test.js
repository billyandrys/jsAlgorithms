
const { isPrime } = require('../numbersPrime')


it('valide is number Prime', ()=>{
    expect(isPrime(5)).toBe(true)
    expect(isPrime(6)).toBe(false)
    expect(isPrime(1)).toBe(false)
})

