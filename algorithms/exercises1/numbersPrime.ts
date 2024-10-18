// valide is number prime
const isPrime = (numberValide: number ): boolean => {
    
    if( numberValide <= 1) return false
       for( let i = 2; i <= Math.sqrt( numberValide ); i++){
            if( numberValide % i === 0 ){
                return false
        } 
        
    } 
    
    return true
}

console.log(isPrime(5))
console.log(isPrime(12))

export {
    isPrime
}
