function getProductOfDigits(n) {
   let num =n.toString();
    let product =1
    if (n<0) {
      return `not a valid input`
    }
  
    else  {
        for (i=0 ; i <num.length ;i++) {
            product =product* Number(num[i])
        }
        return product
    }
  }


  console.log(getProductOfDigits(439))



  function getOutput(name) {
    if (name === 'Arya') console.log('You are arya');
    if (name === 'John') console.log('You are john');
    return 'Who are you';
  }


  getOutput();