// validate is number prime
const isPrime = (numberValide: number ): boolean => {
    
    if( numberValide <= 1) return false
    //validate if number is equal to or less than one

       for( let i = 2; i <= Math.sqrt( numberValide ); i++){
        // We make a cycle from 2 to the square root of the number  
        // to be validated, to make ir more efficient


        if( numberValide % i === 0 ){
            //if the number to be validated is divisable by varible
            //the cycle variable number, it means that it is not prime
                return false
        } 
        
    } 
    
    return true
    // is no divisors are found, it means that it is prime
    // return true 
} 

export {
    isPrime
}
