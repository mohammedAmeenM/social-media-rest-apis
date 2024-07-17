import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
      title: 'Social Media API',
      description: 'Social Media Api'
    },
    host: 'localhost:9000',
    schemes: ['http']
  };
  
  const outputFile = './swagger-output.json';
  const endpointsFiles = ['./src/apis/router/*.js', './app.js'];
  
  swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger documentation generated successfully.');
    require('./app');
  });