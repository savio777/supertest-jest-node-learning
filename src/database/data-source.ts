import { DataSource } from 'typeorm';

import Appointment from '../models/Appointment';
import User from '../models/User';

const AppDataSource = new DataSource({
  name: 'default',
  type: 'mysql',
  host: 'localhost',
  username: 'dbuser',
  password: 'dbuser',
  database: 'supertest_jest_node_learning',
  migrations: ['src/database/migrations/*.ts'],
  port: 3306,
  entities: [Appointment, User],
  synchronize: false,
  logging: true,
});

function initDatabase() {
  AppDataSource.initialize()
    .then(() => {
      console.log('init database done');
    })
    .catch(err => console.log('database err', err));
}

initDatabase();

export { AppDataSource };
