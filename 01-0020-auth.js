/*	-------------------------------------------
	Proyect: authentication app
	Objetive: create the user collection
	Developer: Juan Sebastián Gómez
	Fecha: 08/05/2021
-------------------------------------------*/

db.createCollection("user",{
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [ "_id", "name", "email", "password","schema_version"],
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: "objectId",
            description: "Document ID. Must be a ObjectID and is required"
          },
          name: {
            bsonType: "string",
            description: "user name. Must be a string and is required"
          },
          phonenumber: {
            bsonType: "string",
            description: "user phonenumber. Must be a string if it is exist"
          },
          email: {
            bsonType: "string",
            description: "user email. Must be a string and is required"
          },
          password: {
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
  
  