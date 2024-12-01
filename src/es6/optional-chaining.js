const person = {
  name: 'Takshil Kunadia',
  gender: 'Male',
  address: {
    country: 'India',
  },
};

Logger.log(person?.gender || 'Data not available');

// Access deeply nested  properties
Logger.log(person?.address?.country || 'Unknown Location');

Logger.log(person.address?.country || 'Unknown Location');
