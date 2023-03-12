import {connectingDb, insertData} from "@/helper/db-utils";
async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;
        if (!userEmail || !userEmail.includes('@')) {
            res.status(404).json({message: 'Invalid email.'})
            return;
        }

        let client;
        try {
            client = await connectingDb()
        } catch (e) {
            res.status(500).json({message: 'Connecting to DB failed!'})
            return
        }

        try {
            await insertData(client, 'emails', {email: userEmail})
            await client.close();
        } catch (e) {
            res.status(500).json({message: 'Inserting data failed'})
            return
        }


        res.status(201).json({message: 'Signed up!'})
    }
}

export default handler