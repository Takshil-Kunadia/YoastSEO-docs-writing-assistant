const person = {
  name: 'Takshil Kunadia',
  email: 'takshilkunadia@gmail.com',
};

const { name, email, country = 'India' } = person;
Logger.log(`${name}'s email address is ${email}. Their country is ${country}`);

export default person;
