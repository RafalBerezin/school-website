import { connectToDatabase } from "$lib/api/db";

export async function get() {
    try {
        const dbConnection = await connectToDatabase();
        const db = dbConnection.db;
        const collection = db.collection('fields_of_study');

        const data = await collection.aggregate([
            {
                $lookup: {
                    from: "fields_of_study_group",
                    localField: "group",
                    foreignField: "_id",
                    as: "group"
                }
            },
            {
                $group: {
                    _id: "$group",
                    fields_of_study: {
                        $push: "$$ROOT"
                    }
                }
            },
            {
                $sort: {
                    "_id.order": 1
                }
            },
            {
                $project: {
                    _id: {
                        $arrayElemAt: ["$_id", 0]
                    },
                    "fields_of_study.name": 1,
                    "fields_of_study.img": 1,
                }
            }
        ]).toArray();

        return {
            status: 200,
            body: {
                data
            }
        };
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


// // create login endpoint svelte
// import { writable, get } from "svelte/store";

// export const userStore = writable(null);
// export const error = writable(null);
// export const loading = writable(false);

// export const login = async (email, password) => {
//   loading.set(true);
//   error.set(null);
//   try {
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });
//     const { token } = await response.json();
//     localStorage.setItem("token", token);
//     userStore.set({ email, token });
//   } catch (e) {
//     error.set(e.message);
//   }
//   loading.set(false);
// };

// export const logout = () => {
//   localStorage.removeItem("token");
//   userStore.set(null);
// };

// export const getUser = async () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     try {
//       const response = await fetch("/api/user", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const user = await response.json();
//       userStore.set(user);
//     } catch (e) {
//       userStore.set(null);
//     }
//   }
// };

