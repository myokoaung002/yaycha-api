const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const { UserSeeder } = require("./UserSeeder.cjs");
const { PostSeeder } = require("./PostSeeder.cjs");
const { CommentSeeder } = require("./CommentSeeder.cjs");

async function main() {
    try {
        await UserSeeder();
        await PostSeeder();
        await CommentSeeder();
    } catch (e) {
        console.log(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();