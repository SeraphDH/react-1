function addCommas(number) {
    const number_str = number.toString();
    let [integer_part, decimal_part] = number_str.split('.');
    integer_part = integer_part.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimal_part ? `${integer_part}.${decimal_part}` : integer_part;
  }
  
  module.exports = addCommas;
  