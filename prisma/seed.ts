import { PrismaClient } from '@prisma/client';
import { seedRoles } from './seed/roles';

async function main() {
    await seedRoles();
}

main()
    .then(async () => {
        const prisma = new PrismaClient();
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })

