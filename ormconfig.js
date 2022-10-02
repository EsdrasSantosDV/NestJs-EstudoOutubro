module.exports={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'esdras',
    password: 'Esdras@67',
    database: 'nest_typeorm_estudo',
    entities:['dist/**/*.entity.js'],
    migrations:['dist/migrations/*.js'],
    cli:{
        migrationsDir:'src/migrations',
    },
    //NAO TEM ESSAS  LINHAS DADO QUE USAMOS MIGRATIONS
    // autoLoadEntities:true,
    // synchronize:true,
};