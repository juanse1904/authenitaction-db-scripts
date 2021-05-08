/*	-------------------------------------------
	Proyect: authentication app
	Objetive: create the post collection
	Developer: Juan Sebastián Gómez
	Fecha: 08/05/2021
-------------------------------------------*/

db.createCollection("posts",{
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [ "_id", "content","date","schema_version"],
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: "objectId",
            description: "Document ID. Must be a ObjectID and is required"
          },
          content: {
            bsonType: "string",
            description: "post content. Must be a string and is required"
          },
          date: {
            bsonType: "date",
            description: "creation post date. Must be a date and is required"
          },
          : {
            bsonType: "string",
            description: "user password. Must be a string and is required"
          },
          bio: {
            bsonType: "string",
            description: "user bio. Must be a string"
          },
          picture: {
            bsonType: "string",
            description: "user picture link. Must be a string"
          },
          posts: {
            bsonType: "array",
            description: "user posts. Must be an array with the object ids",
            items: {
                bsonType: "objectId"
            }
          },
          schema_version: {
            bsonType: "string",
            description: "Current schema version. Must be a string and is required"
          },
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error",
  });
  
  db["user"].createIndex( { "email": 1}, { name: "email_unique", collation: {locale: "en", strength: 2}, unique: true } )
  