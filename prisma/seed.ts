// @ts-ignore
import { PrismaClient } from '@prisma/client';
import { seedRoles } from './seed/roles-seed';
import { seedManufacturer } from './seed/manufacturer-seed';

async function main() {
    await seedRoles();
    await seedManufacturer();
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

