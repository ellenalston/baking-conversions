const conversionRates = {
    ounces: {
      ounces: 1,
      milliliters: 29.5735,
      cups: 0.125,
      tablespoons: 2,
      teaspoons: 6
    },
    milliliters: {
      ounces: 0.033814,
      milliliters: 1,
      cups: 0.00422675,
      tablespoons: 0.067628,
      teaspoons: 0.202884
    },
    cups: {
      ounces: 8,
      milliliters: 236.588,
      cups: 1,
      tablespoons: 16,
      teaspoons: 48
    },
    tablespoons: {
      ounces: 0.5,
      milliliters: 14.7868,
      cups: 0.0625,
      tablespoons: 1,
      teaspoons: 3
    },
    teaspoons: {
      ounces: 0.166667,
      milliliters: 4.92892,
      cups: 0.0208333,
      tablespoons: 0.333333,
      teaspoons: 1
    }
  };
  
  function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
  
    if (isNaN(amount)) {
      document.getElementById('result').innerText = 'Please enter a valid number';
      return;
    }
  
    const convertedAmount = amount * conversionRates[fromUnit][toUnit];
    document.getElementById('result').innerText = `${amount} ${fromUnit} = ${convertedAmount.toFixed(2)} ${toUnit}`;
  }
  