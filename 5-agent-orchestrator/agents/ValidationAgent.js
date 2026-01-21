module.exports = {
    execute: (data) => {
      if (!data.extractedData.name || !data.extractedData.amount) {
        throw new Error("Validation failed");
      }
      return data;
    }
  };
  