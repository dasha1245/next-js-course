import {connectingDb, insertData, getAllData} from "@/helper/db-utils";

async function handler(req, res) {
    const eventId = req.query.eventId;

    let client;
    try {
        client = await connectingDb();
    } catch (e) {
        res.status(500).json({message: 'Connecting to DB failed!'})
        return;
    }

    if (req.method === 'POST') {
        const {email, name, text} = req.body

        if (
            !email
            || !email.includes('@')
            || !name
            || name.trim() === ''
            || !text
            || text.trim() === ''
        ) {
            return res.status(422).json({message: 'Invalid input. '})
        } else {
            const newComment = {
                eventId,
                email,
                name,
                text
            }

            let result;
            try {
                result = await insertData(client, "comments", {comment: newComment})
                // newComment._id = result.insertedId
                res.status(201).json({message: 'Added comment', comment: newComment})
            } catch (e) {
                res.status(500).json({message: 'Inserting data failed!'})
                await client.close()
            }


        }


    }
    if (req.method === 'GET') {

        try {
           const allComments = await getAllData(client, 'comments', {_id: -1})
            res.status(201).json({comments: allComments})

        } catch (e) {
            res.status(500).json({message: 'Getting comments failed!'})
        }

        await client.close()
    }

}

export default handler