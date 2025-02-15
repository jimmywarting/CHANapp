import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path'
import { User } from "./entities/User";
import { Thread } from "./entities/Thread";
import { Board } from "./entities/Board";

export default {
    migrations: {
      path: path.join(__dirname + '/migrations'), // path to the folder with migrations
      pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post, User, Thread, Board],
    dbName: "Chanapp",
    password: '12345',
    type: "postgresql",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
