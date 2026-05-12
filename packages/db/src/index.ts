import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client.js";
import "dotenv/config"

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });

export const prismaClient = new PrismaClient({ adapter:adapter });

export default prismaClient;