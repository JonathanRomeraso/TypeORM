import {DataSource} from 'typeorm';
import {User} from './entities/User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 65432,
    username: "postgres",
    password: "12345",
    database: "typeormdb",
    entities: [User],
    //logging: true,
    synchronize: true,
})