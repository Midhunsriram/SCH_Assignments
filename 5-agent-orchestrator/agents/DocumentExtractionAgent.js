module.exports = {
    execute: (input) => {
      return {
        extractedData: {
          name: input.name,
          amount: input.amount
        }
      };
    }
  };
  