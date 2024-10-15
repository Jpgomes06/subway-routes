import { Router, Request, Response } from 'express';
const router = Router();

router.post('/user', async (req: Request, res: Response) => {
    const {
        username,
        password,
        role_id,
        contact: { phone, email },
        address: { street, city, country, postal_code, state },
        date_of_birth,
        gender,
        nationality,
        languages
    } = req.body;

    try {
        const user = {
            username,
            password,
            role_id,
            contact: {
                phone,
                email
            },
            address: {
                street,
                city,
                country,
                postal_code,
                state
            },
            date_of_birth,
            gender,
            nationality,
            languages
        };
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default router;
