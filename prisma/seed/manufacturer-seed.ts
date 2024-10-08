import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedManufacturer() {
    await prisma.manufacturer.deleteMany();
    await prisma.manufacturer.createMany({
        data: [
            {
                name: 'Acme Corp',
                phone: '123-456-7890',
                email: 'contact@acmecorp.com',
                address: '123 Elm Street',
                street: 'Elm Street',
                number: '123',
                city: 'Metropolis',
                state: 'NY',
                zip_code: '10001',
                website: 'https://acmecorp.com',
            },
            {
                name: 'Global Tech',
                phone: '987-654-3210',
                email: 'info@globaltech.com',
                address: '456 Oak Avenue',
                street: 'Oak Avenue',
                number: '456',
                city: 'Gotham',
                state: 'NJ',
                zip_code: '07001',
                website: 'https://globaltech.com',
            },
            {
                name: 'Sunrise Electronics',
                phone: '555-123-4567',
                email: 'support@sunriseelectronics.com',
                address: '789 Pine Road',
                street: 'Pine Road',
                number: '789',
                city: 'Star City',
                state: 'CA',
                zip_code: '90001',
                website: 'https://sunriseelectronics.com',
            },
            {
                name: 'NextGen Solutions',
                phone: '444-567-8901',
                email: 'hello@nextgensolutions.com',
                address: '101 Maple Street',
                street: 'Maple Street',
                number: '101',
                city: 'Central City',
                state: 'TX',
                zip_code: '75001',
                website: 'https://nextgensolutions.com',
            },
            {
                name: 'Innovative Creations',
                phone: '222-789-0123',
                email: 'sales@innovativecreations.com',
                address: '202 Birch Lane',
                street: 'Birch Lane',
                number: '202',
                city: 'Coast City',
                state: 'FL',
                zip_code: '33101',
                website: 'https://innovativecreations.com',
            },
        ],
    })
}
