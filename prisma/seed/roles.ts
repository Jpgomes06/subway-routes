import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export async function seedRoles() {
    await prisma.roles.deleteMany();
    await prisma.roles.createMany({
        data: [
            { id: uuidv4(), name: "Admin", description: "Administrator with full access" },
            { id: uuidv4(), name: "Passenger", description: "Regular user with passenger role" },
            { id: uuidv4(), name: "Train Operator", description: "User responsible for operating trains" },
            { id: uuidv4(), name: "Ticket Booth Attendant", description: "User responsible for ticket sales" },
            { id: uuidv4(), name: "Maintenance Technician", description: "User responsible for train maintenance" },
        ],
    });
}
