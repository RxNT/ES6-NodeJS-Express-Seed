export default {
  application: 'ES6-NODEJS-EXPRESS-SEED-development',
  env: 'development',
  host: '127.0.0.1',
  port: 9600,
  secureCommunication: false,
  crossOrigins: ['http://localhost'],
  errorToEmail: 'rajaram@rxnt.com',
  errorFromEmail: 'isupport@rxnt.com',
  smtpSettings: {
    host: 'mail.rxnt.com',
    port: 25,
    auth: {
      user: 'isupport@rxnt.com',
      pass: 'isupport123',
    },
  },
  mongoConnectionString: {
    hostName: 'localhost',
    port: 27017,
    database: 'seed',
  },
  sqlConnectionString: {
    user: 'RxNTUser',
    password: '',
    server: 'RXNT_DEV_DB',
    database: 'Seed',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
  },
  logFileName: 'D://External//Logs//seeapiservices.log',
};
