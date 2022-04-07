import { connectToDatabase } from "$lib/api/db";

export async function get({ params }) {
    try {
        const dbConnection = await connectToDatabase();
        const db = dbConnection.db;
        const collection = db.collection('fields_of_study');

        console.log(params);

        const data = (await collection.aggregate([
            {
                $lookup: {
                    from: "fields_of_study_group",
                    localField: "group",
                    foreignField: "_id",
                    as: "group"
                }
            },
            {
                $match: {
                    name: params.fos,
                    $or:[
                        {"group.title": params.group},
                        {"group.name": params.group}
                    ]
                },
            },
            {
                $project: {
                    name: 1,
                    description: 1,
                    group: {
                        $arrayElemAt: ["$group", 0]
                    }
                }
            }
        ]).toArray())[0];

        console.log(data);
        if(data && data.description) {
            return {
                status: 200,
                body: {
                    data
                }
            }
        }

        return {
            status: 404,
            body: {
                error: `Nie znaleziono takiego kierunku: ${params.group} ${params.fos}`
            }
        }
    } catch (err) {
        console.log(err);

        return {
            status: 500,
            body: {
                error: "Internal server error"
            }
        };
    }
}